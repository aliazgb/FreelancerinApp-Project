import useOwnerProject from "../Projects/useOwnerProject";
import DashboardHeader from "../freelancer/DashboardHeader";
import { useProposal } from "../proposals/useProposal";
import Loader from "../ui/Loader";
import Stats from "./Stats";
import { useUsers } from "./useUsers";

function DashboardLayout() {
  const { projects, isLoading: isLoading3 } = useOwnerProject();
  const { proposals, isLoading: isLoading1 } = useProposal();
  const { users, isLoading: isLoading2 } = useUsers();

  if (isLoading1 && isLoading2 && isLoading3) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals?.length}
        users={users?.length}
        projectList={projects?.length}
      />
    </div>
  );
}

export default DashboardLayout;
