import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../service/ProposalsService";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const { mutate: createProposal, isPending: isCreatingProposal } = useMutation(
    {
      mutationFn: createProposalApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["proposal"],
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    }
  );
  return { createProposal, isCreatingProposal };
}
