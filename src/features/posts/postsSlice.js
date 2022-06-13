import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("http://localhost:4000/posts");
  const posts = await response.json();
  console.log("getpost", posts);
  return posts;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (post, { rejectWithValue }) => {
    console.log("Post: ", post);

    try {
      const response = await fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      console.log("Response: ", response.ok);
      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error;
      state.status = "failed";
    });
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});
// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.post.find((post) => post.id === postId);
