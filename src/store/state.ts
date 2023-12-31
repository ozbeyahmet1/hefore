import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
export const store = configureStore({
  reducer: {
    searchModalToggle: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const toggleSearchModal = (state: RootState) => state.searchModalToggle.value;
