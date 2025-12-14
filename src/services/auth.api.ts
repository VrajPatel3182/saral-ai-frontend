import api from "./api";

export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export const loginApi = async (
  payload: { email: string }
): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>("/auth/login", payload);
  return res.data;
};

export const getMeApi = async (): Promise<User> => {
  const res = await api.get<User>("/auth/me");
  return res.data;
};