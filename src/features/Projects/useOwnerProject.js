import { useQuery } from "@tanstack/react-query";
import getOwnerPRojectApi from "../service/ProjectService";

export default function useOwnerProject() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerPRojectApi,
  });
  const {projects}=data ||{}
  return {projects ,isLoading}
}
