import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        email: 'Email',
        title: 'Title',
        author: 'Author',
        style: 'Style',
        isbn: 'ISBN',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseStyle: (state, action) => { state.style = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {chooseName, chooseEmail,  chooseTitle, chooseAuthor, chooseStyle, chooseISBN } = rootSlice.actions;