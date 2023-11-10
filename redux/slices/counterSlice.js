import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        setCounter: (state, action) => {
            // el nuevo value para el counter es el que reciba del useer
            state.counter = action.payload.counter;
        }
    }
})

export const { setCounter } = counterSlice.actions;
// obtiene el valor del cont
export const selectCounter = (state) => state.counterState.counter;
export default counterSlice.reducer;