import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post:{}
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});

export const getPostById = createAsyncThunk("posts/getPostById", async (id)=>{
    try {
        return await postsService.getPostById(id)
    } catch (error) {
        console.error(error)
    }
})

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
        state.isLoading = false;
      },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    })
    .addCase(getAllPosts.pending, (state, action) => {
        state.isLoading = true;
      })
    .addCase(getPostById.fulfilled,(state,action)=>{
        state.post = action.payload
    })
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;