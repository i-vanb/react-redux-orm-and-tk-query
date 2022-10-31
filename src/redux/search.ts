import { createAction, createReducer } from '@reduxjs/toolkit'

interface SearchState {
    query: string,
}

export const print = createAction<string>('search/print')
export const clear = createAction('search/clear')

const initialState = { query: '' } as SearchState

const searchReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(print, (state, action) => {
            state.query = action.payload
        })
        .addCase(clear, (state, action) => {
            state.query = ''
        })
})


export default searchReducer
