import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Title',
        author: 'Author',
        style: 'Style',
        isbn: 'ISBN',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseStyle: (state, action) => { state.style = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseStyle, chooseISBN } = rootSlice.actions;