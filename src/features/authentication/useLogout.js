import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logOutApi } from "../service/authService";
export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("You are signed out")
      navigate("/auth", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { logout, isPending };
}
