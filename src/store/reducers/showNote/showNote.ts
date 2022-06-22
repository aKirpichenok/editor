import { createSlice } from '@reduxjs/toolkit'

export const showNoteSlice = createSlice({
    name: 'showNote',
    initialState: { 
        clicked: false 
    },
    reducers: {
        showN: (state: any,action: {type: string, payload: any}) => {
            const {id,title,description,tags} = action.payload
            return {
                clicked: true,
                id,
                title,
                description,
                tags,
            }
        },
        close: (state: any) => {
            return {
                clicked:false,
            }
        }
    },
})

export const { showN, close } = showNoteSlice.actions

export default showNoteSlice.reducer