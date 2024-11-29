import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import UserReducer from "./reducers/UserReducer";
import KanbanReducer from "./reducers/KanbanReducer";
export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
    userReducer: UserReducer,
    kanbanReducer: KanbanReducer,
  },
});
