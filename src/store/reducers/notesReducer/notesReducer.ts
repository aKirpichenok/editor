import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        
    },
    reducers: {
        addNote: (state: any,action: any) => {
            const {id,title,description,tags} = action.payload
            state[id] = {
                id,
                title,
                description,
                tags,
            }
        },
        deleteNote: (state,action: any) => {
            const {id} = action.payload
            delete state[id as keyof typeof state]
        },
    },
})

export const { addNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer