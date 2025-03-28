import { getUsers } from "../service/authService";

export function useUsers() {
    const { data, isLoading } = useQuery({
      queryKey: ["users"],
      queryFn: getUsers,
    });
    const { users } = data || {};
    return { users, isLoading };
  }