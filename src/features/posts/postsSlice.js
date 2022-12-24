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

export const getPostById = createAsyncThunk("posts/getPostById", async (_id)=>{
    try {
        return await postsService.getPostById(_id)
    } catch (error) {
        console.error(error)
    }
});
export const getPostByName = createAsyncThunk("posts/getPostByName", async (title) => {
  try {
    return await postsService.getPostByName(title);
  } catch (error) {
    console.error(error);
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id, thunkAPI) => {
  try {
      let action = await postsService.deletePost(id);
      if (action.post == null) {
          return thunkAPI.rejectWithValue(action)
      }
      return action
  } catch (error) {
      
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
  }
});

export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
      return await postsService.like(_id);
  } catch (error) {
      console.error(error);
  }
});

export const unLike = createAsyncThunk("posts/like", async (_id) => {
  try {
      return await postsService.unLike(_id); 
  } catch (error) {
      console.error(error);
  }
})


export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
            state.isError = false;
            state.message = "";
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
    builder.addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.isError = true
      state.isSuccess = false;
      state.message = action.payload.message
    })

    .addCase(like.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
          if (post._id === action.payload._id) {
              post = action.payload;
          }
          return post
      })
      state.posts = posts
  });
    
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
      