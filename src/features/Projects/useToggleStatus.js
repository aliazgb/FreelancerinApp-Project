import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {toggleProjectStatusApi } from "../service/ProjectService";
export default function useToggleStatus() {
  const queryClient = useQueryClient();
  const { mutate: toggleProjectStatus, isPending: isUpdating } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { toggleProjectStatus, isUpdating };
}
