import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import http from 'utils/api';
import { RootState } from '../index';

export interface User {
    id: number;
    name: string;
    username: string;
}

export interface UsersState {
    readonly list: User[];
    readonly loading: boolean;
    readonly hasErrors: boolean;
}

const initialState: UsersState = {
    list: [],
    loading: false,
    hasErrors: false,
};

export const fetchUserList = createAsyncThunk('users/fetchAll', async () => {
    const userList = await http<User[]>(
        'https://jsonplaceholder.typicode.com/users',
    );
    console.log('userList', userList);
    return userList;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getUsers: (state) => {
            state.loading = true;
        },
        getUsersSuccess: (state, { payload }) => {
            state.list = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getUsersFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUserList.fulfilled, (state, { payload }) => {
            state.loading = true;
            state.list = payload;
        });
    },
});

export const { getUsers, getUsersSuccess, getUsersFailure } =
    postsSlice.actions;

export const stateSelector = (state: RootState): UsersState => state.users;
export const userListSelector = createSelector(
    stateSelector,
    (state) => state.list,
);

export default postsSlice.reducer;