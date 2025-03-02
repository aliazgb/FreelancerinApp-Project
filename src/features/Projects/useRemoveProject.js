import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeProjectApi } from "../service/ProjectService";
export default function useRemoveProject(id) {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success("با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting };
}
