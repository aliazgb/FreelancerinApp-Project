import { useQuery } from "@tanstack/react-query";
import { getUser } from "../service/authService";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
  const { user } = data || {};
  return { user, isLoading };
}
