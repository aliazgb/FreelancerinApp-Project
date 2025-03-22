import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getProjectsApi } from "../service/ProjectService";
export default function useProjects() {
  const { search } = useLocation();
  const statusObject = Object.fromEntries(new URLSearchParams(search));
  const { data, isLoading } = useQuery({
    queryKey: ["projects",statusObject],
    queryFn:()=> getProjectsApi(search),
  });
  const { projects } = data || {};
  return { projects, isLoading };
}
