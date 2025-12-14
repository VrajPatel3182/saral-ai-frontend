import api from "./api";

export interface OverviewStats {
  searchesRun: number;
  candidatesAnalyzed: number;
  outreachInitiated: number;
}

export interface RecentActivity {
  message: string;
  createdAt: string;
}

export interface DashboardOverviewResponse {
  stats: OverviewStats;
  recentActivity: RecentActivity[];
}

export const getDashboardOverviewApi =
  async (): Promise<DashboardOverviewResponse> => {
    const res = await api.get<DashboardOverviewResponse>(
      "/dashboard/overview"
    );
    return res.data;
  };
