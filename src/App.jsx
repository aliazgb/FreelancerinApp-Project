import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import AdminDashboard from "./features/admin/AdminDashboard";
import AdminLayOut from "./features/admin/AdminLayOut";
import Users from "./features/admin/user/Users";
import AuthContainer from "./features/authentication/AuthContainer";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import OwnerLayout from "./features/owner/OwnerLayout";
import CompeleteProfile from "./features/pages/CompeleteProfile";
import Home from "./features/pages/Home";
import OwnerDashboard from "./features/pages/OwnerDashboard";
import PageNotFound from "./features/pages/PageNotFound";
import Project from "./features/pages/Project";
import Projects from "./features/pages/Projects";
import SubmitProjects from "./features/pages/SubmitProjects";
import NotFound from "./features/ui/NotFound";
import Proposals from "./features/ui/Proposals";
import ProtectedRoute from "./features/ui/ProtectedRoute";
import ProjectTable from "./features/Projects/ProjectTable";

const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/complete-profile" element={<CompeleteProfile />} />
          <Route path="/notfound" element={<PageNotFound />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmitProjects />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayOut />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users/>} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmitProjects />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeContextProvider>
  );
}

export default App;
