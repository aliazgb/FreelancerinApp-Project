import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { chageProposalStatusApi } from "../../service/ProposalsService";

export default function useChangeProposalStaus() {
  const { isPending: isUpdating, mutate: chnageProposalStatus } = useMutation({
    mutationFn: chageProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, chnageProposalStatus };
}
