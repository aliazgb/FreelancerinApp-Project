import { useQuery } from "@tanstack/react-query";
import { getUser } from "../service/authService";

export default function useSuspenseQueries() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
}
