import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeUserStatusApi } from "../../service/authService";

export default function useChangeUsersStatus() {
  const { isPending: isChangingStatusUser, mutate: changeUserStatus } =
    useMutation({
      mutationFn: changeUserStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => toast.error(err?.response?.data?.message),
    });

  return { isChangingStatusUser, changeUserStatus };
}
