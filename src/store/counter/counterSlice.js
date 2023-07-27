
import { createSlice } from '@reduxjs/toolkit';

const value = 0;

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: value,
        
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
        decrement: (state) => {
          state.counter -= 1;
        },
        reset:(state) => {
          state.counter = value;
        },
        incrementByAmount: (state, action) => {
          state.counter += action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
