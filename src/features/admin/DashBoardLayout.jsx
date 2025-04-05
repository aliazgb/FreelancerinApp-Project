import { useProject } from "../Projects/useProject";
import DashboardHeader from "../freelancer/DashboardHeader";
import useProjects from "../hooks/useProjects";
import { useProposal } from "../proposals/useProposal";
import Loader from "../ui/Loader";
import Stats from "./Stats";
import { useUsers } from "./useUsers";

function DashboardLayout() {
  const { proposals, isLoading: isLoadingProposals } = useProposal();
  const { users, isLoading: isLoadingUsers } = useUsers();
  const { projects, isLoading: isLoadingProjects } = useProjects(); 

  if (isLoadingProposals || isLoadingUsers || isLoadingProjects)
    return <Loader />;
  const activeUsers = users?.filter((user) => user.isActive);

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals?.length}
        users={activeUsers?.length}
        projectList={projects?.length}
      />
    </div>
  );
}

export default DashboardLayout;
