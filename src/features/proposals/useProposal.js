import { useQuery } from "@tanstack/react-query";
import { getProposalsApit } from "../service/ProposalsService";

export function useProposal() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApit,
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}
