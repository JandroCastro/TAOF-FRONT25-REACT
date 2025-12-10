import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fake DB
let fakeDB = [
    { id: 1, title: "Introducción a Redux", author: "DEV" },
    { id: 2, title: "Redux Toolkit Avanzado", author: "DEV" },
    { id: 3, title: "useReducer vs Redux", author: "Jandro" },
    { id: 4, title: "Optimización con createSelector", author: "Jandro" },
    { id: 5, title: "Thunks Async", author: "Alice" },
    { id: 6, title: "Errores y manejo de estados", author: "Bob" },
    { id: 7, title: "Renderizado memoizado", author: "Alice" },
    { id: 8, title: "CRUD completo con RTK", author: "Charlie" },
];
const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Thunks
export const fetchPosts = createAsyncThunk("posts/fetch", async (_, thunkAPI) => {
    // console.log("🚀 ~ thunkAPI:", thunkAPI)
    await delay(500);
    if (Math.random() < 0.2) return thunkAPI.rejectWithValue("Fetch failed!");
    return [...fakeDB];
});

export const addPost = createAsyncThunk("posts/add", async (post, thunkAPI) => {
    await delay(500);
    if (Math.random() < 0.2) return thunkAPI.rejectWithValue("Add failed!");
    const newPost = { id: Date.now(), ...post };
    fakeDB.push(newPost);
    return newPost;
});

export const updatePost = createAsyncThunk("posts/update", async ({ id, data }, thunkAPI) => {
    await delay(500);
    if (Math.random() < 0.2) return thunkAPI.rejectWithValue("Update failed!");
    fakeDB = fakeDB.map(p => p.id === id ? { ...p, ...data } : p);
    return { id, data };
});

export const deletePost = createAsyncThunk("posts/delete", async (id, thunkAPI) => {
    await delay(500);
    if (Math.random() < 0.2) return thunkAPI.rejectWithValue("Delete failed!");
    fakeDB = fakeDB.filter(p => p.id !== id);
    return id;
});

// Slice
const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        loading: false,
        errors: { fetch: null, add: null, update: null, delete: null }
    },
    reducers: {},
    extraReducers: (builder) => {
        // Fetch
        builder
            .addCase(fetchPosts.pending, (state) => { state.loading = true; state.errors.fetch = null; })
            .addCase(fetchPosts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
            .addCase(fetchPosts.rejected, (state, action) => { state.loading = false; state.errors.fetch = action.payload; })

            // Add
            .addCase(addPost.pending, (state) => { state.loading = true; state.errors.add = null; })
            .addCase(addPost.fulfilled, (state, action) => { state.loading = false; state.items.push(action.payload); })
            .addCase(addPost.rejected, (state, action) => { state.loading = false; state.errors.add = action.payload; })

            // Update
            .addCase(updatePost.pending, (state) => { state.loading = true; state.errors.update = null; })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false;
                const { id, data } = action.payload;
                const index = state.items.findIndex(p => p.id === id);
                if (index !== -1) state.items[index] = { ...state.items[index], ...data };
            })
            .addCase(updatePost.rejected, (state, action) => { state.loading = false; state.errors.update = action.payload; })

            // Delete
            .addCase(deletePost.pending, (state) => { state.loading = true; state.errors.delete = null; })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(p => p.id !== action.payload);
            })
            .addCase(deletePost.rejected, (state, action) => { state.loading = false; state.errors.delete = action.payload; });
    }
});

export default postsSlice.reducer;


export const selectPosts = (state) => state.posts.items;
export const selectLoading = (state) => state.posts.loading;
export const selectErrors = (state) => state.posts.errors;


export const selectFetchErrors = (state) => state.posts.errors.fetch;
export const selectAddErrors = (state) => state.posts.errors.add;
export const selectUpdateErrors = (state) => state.posts.errors.update;
export const selectDeleteErrors = (state) => state.posts.errors.delete;
