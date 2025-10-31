import { LoginResI } from "domain/dto/auth/auth-res.interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface ProfileI {
  id: string;
  email: string;
  username: string;
  qatarID: string;
  createdAt?: Date;
  verifiedAt?: Date;
  updatedAt?: Date;
}

export interface AuthStateI {
  loading: boolean;
  data?: LoginResI;
  error?: string;
  success: boolean;
}

const initialState: AuthStateI = {
  loading: false,
  data: undefined,
  error: undefined,
  success: false,
};

type LoginInfoPayload = {
  payload: LoginResI;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveTokenAuth: (state: AuthStateI, { payload }: LoginInfoPayload) => {
      state.data = payload;
    },
    deleteTokenAuth: (state) => {
      state.data = undefined;
    },
  },
});

export const { saveTokenAuth, deleteTokenAuth } = authSlice.actions;

export default authSlice.reducer;
