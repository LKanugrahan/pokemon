import { createSlice } from '@reduxjs/toolkit';
import { UsersTransformRes } from 'domain/dto/user/res.interfaces';

export interface UsersStateI {
  loading: boolean;
  data?: UsersTransformRes;
  error?: string;
  success: boolean;
}

const initialState: UsersStateI = {
  loading: false,
  data: undefined,
  error: undefined,
  success: false,
};

type UsersInfoPayload = {
  payload: UsersTransformRes;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    saveUsersData: (state: UsersStateI, { payload }: UsersInfoPayload) => {
      state.data = payload;
    },
  },
});

export const { saveUsersData } = usersSlice.actions;

export default usersSlice.reducer;
