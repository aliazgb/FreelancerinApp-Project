import { useParams } from "react-router-dom";
import { getProject } from "../service/ProjectService";
import { useQuery } from "@tanstack/react-query";

export function useProject() {
    const {id}=useParams()
  const { data, isLoading } = useQuery({
    queryKey: ["projects",id],
    queryFn:()=> getProject(id),
  });
  const { project } = data || {};
  return { project, isLoading };
}
