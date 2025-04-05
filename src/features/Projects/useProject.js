import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProject } from "../service/ProjectService";

export function useProject() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => getProject(id),
    retry: false,
  });
  const { project } = data || {};
  return { project, isLoading };
}
