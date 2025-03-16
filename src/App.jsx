import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import AuthContainer from "./features/authentication/AuthContainer";
import OwnerLayout from "./features/owner/OwnerLayout";
import CompeleteProfile from "./features/pages/CompeleteProfile";
import Home from "./features/pages/Home";
import OwnerDashboard from "./features/pages/OwnerDashboard";
import PageNotFound from "./features/pages/PageNotFound";
import Project from "./features/pages/Project";
import Projects from "./features/pages/Projects";
const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/complete-profile" element={<CompeleteProfile />} />
          <Route path="/notfound" element={<PageNotFound />} />
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeContextProvider>
  );
}

export default App;
