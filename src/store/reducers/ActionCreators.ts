import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try{
//         dispatch(userSlice.actions.userFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.userFetchingSuccess(response.data));
//     } catch(e: any){
//         dispatch(userSlice.actions.userFetchingError(e.message));
//     }
// }


export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('You have some errors...')
        }
    }
)
