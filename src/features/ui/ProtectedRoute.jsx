import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorize from "../authentication/useAuthorize";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, isAuthorized, user } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isLoading, isAuthenticated, isAuthorized, navigate]);
  if (isLoading)
    return (
      <div className="flex items-center justify-center bg-secondary-100 h-screen">
        <Loader />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
