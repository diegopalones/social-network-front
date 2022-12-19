import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  msg: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user) => {
    try {
      return await authService.register(user);
    } catch (error) {
      console.error(error);
      // const msg = error.response.data.errors[0].msg;
      // return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.msg = action.payload.msg;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        
      })

      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;

        state.msg = action.payload.msg;
      })
      // .addCase(login.fulfilled, (state, action) => {
      //   state.isSuccess = true;

      //   state.msg = action.payload.msg;
      // });
      // .addCase(logout.fulfilled, (state, action) => {
      //   state.isSuccess = true;

      //   state.msg = action.payload.msg;
      // })
      // .addCase(register.rejected, (state, action) => {
      //   state.isError = true;

      //   state.msg = action.payload.msg;
      // });
  },
});

export default authSlice.reducer;
