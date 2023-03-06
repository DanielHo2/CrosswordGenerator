import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {"authToken": ""};
const initialState = {"user": initialUserState};

export const reducerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login action
        loginStore: (state, action) => {
            state.user = action.payload;
        },

        // logout action
        logout: (state) => {
            state.user = initialUserState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginStore, logout } = reducerSlice.actions

export default reducerSlice.reducer;