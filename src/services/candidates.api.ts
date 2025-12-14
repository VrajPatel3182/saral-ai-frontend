import api from "./api";

export interface Candidate {
  id: string;
  name: string;
  title: string;
  location?: string;
  match?: number; // optional (computed client-side for now)
}

export interface CandidatesListResponse {
  data: Candidate[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}

export const getCandidatesApi = async (
  page = 1,
  limit = 10
): Promise<CandidatesListResponse> => {
  const res = await api.get<CandidatesListResponse>(
    `/candidates?page=${page}&limit=${limit}`
  );
  return res.data;
};
