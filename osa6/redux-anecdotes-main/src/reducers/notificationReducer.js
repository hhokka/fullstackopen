import { createSlice } from '@reduxjs/toolkit'

const initialState = ''


const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state = initialState, action) {
            const message = action.payload
            return message
        },
    }
})

export const { showNotification } = notificationSlice.actions

export default notificationSlice.reducer