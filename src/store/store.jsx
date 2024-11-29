import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import UserReducer from "./reducers/UserReducer";
export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
    userReducer: UserReducer,
  },
});
