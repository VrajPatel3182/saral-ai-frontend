import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../services/auth.api";

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  initialized: boolean; // 👈 IMPORTANT
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  initialized: false, // 👈 app boot not finished
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },

    loginSuccess(
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
      state.initialized = true;

      localStorage.setItem("token", action.payload.token);
    },

    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.initialized = true;
    },

    authFailed(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.initialized = true;

      localStorage.removeItem("token");
    },

    logout(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.initialized = true;

      localStorage.removeItem("token");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  setUser,
  authFailed,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
