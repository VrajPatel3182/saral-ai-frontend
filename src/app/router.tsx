import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/auth/Login";

import ProtectedRoute from "./guards/ProtectedRoute";
import PublicRoute from "./guards/PublicRoute";
import AuthLoadingGuard from "./guards/AuthLoadingGuard";

import DashboardLayout from "../pages/dashboard/DashboardLayout";
import OverviewPage from "../pages/dashboard/OverviewPage";
import ProjectsPage from "../pages/dashboard/ProjectsPage";
import CandidatesPage from "../pages/dashboard/CandidatesPage";
import SequencesPage from "../pages/dashboard/SequencesPage";
import IntegrationsPage from "../pages/dashboard/IntegrationsPage";
import BillingPage from "../pages/dashboard/BillingPage";
import NotFoundPage from "../components/layout/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: (
      <AuthLoadingGuard>
        <PublicRoute />
      </AuthLoadingGuard>
    ),
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <AuthLoadingGuard>
        <ProtectedRoute />
      </AuthLoadingGuard>
    ),
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <OverviewPage /> },
          { path: "projects", element: <ProjectsPage /> },
          { path: "candidates", element: <CandidatesPage /> },
          { path: "sequences", element: <SequencesPage /> },
          { path: "integrations", element: <IntegrationsPage /> },
          { path: "billing", element: <BillingPage /> },
        ],
      },
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);
