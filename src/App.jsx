import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AuthContainer from "./features/authentication/AuthContainer";
import CompeleteProfile from "./features/pages/CompeleteProfile";
import Home from "./features/pages/Home";
import OwnerDashboard from "./features/pages/OwnerDashboard";
import PageNotFound from "./features/pages/PageNotFound";
import Project from "./features/pages/Project";
import Projects from "./features/pages/Projects";
import AppLayout from "./features/ui/AppLayout";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {/* <div className="container xl:w-[30%] "> */}
      <Routes>
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/complete-profile" element={<CompeleteProfile />} />
        <Route path="/notfound" element={<PageNotFound />} />
        <Route path="/owner" element={<AppLayout />}>
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </div> */}
    </QueryClientProvider>
  );
}

export default App;
