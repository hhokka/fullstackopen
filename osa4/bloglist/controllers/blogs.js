const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1, id: 1 })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body
  //const user = await User.findById(request.body.userId)
  const user = await User.findOne().sort('-created_at')
  console.log('user: ', user)
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  })

  if (blog.likes === undefined){
    blog.likes = 0
  }
  if (blog.title === undefined || blog.url === undefined){
    //const savedBlog = await blog.save()
    response.status(400).json(request.body)
  } else {
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }
  console.log('put: ', blog)
  console.log('request.params: ', request.params)
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.json(updatedBlog)
})
module.exports = blogsRouter