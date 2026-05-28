import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LearningModulePage } from "./pages/LearningModulePage";
import { CbtSessionPage } from "./pages/CbtSessionPage";
import { ProgressPage } from "./pages/ProgressPage";
import { CounselingPage } from "./pages/CounselingPage";
import { CommunityPage } from "./pages/CommunityPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/forgot-password",
    Component: ForgotPasswordPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/learning",
    Component: LearningModulePage,
  },
  {
    path: "/cbt",
    Component: CbtSessionPage,
  },
  {
    path: "/progress",
    Component: ProgressPage,
  },
  {
    path: "/counseling",
    Component: CounselingPage,
  },
  {
    path: "/community",
    Component: CommunityPage,
  },
]);
