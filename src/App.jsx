import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AuthContainer from "./features/authentication/AuthContainer";
import CompeleteProfile from "./features/pages/CompeleteProfile";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:w-[30%] ">
        <Routes>
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/complete-profile" element={<CompeleteProfile />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
