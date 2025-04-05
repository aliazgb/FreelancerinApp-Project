import { useProject } from "../Projects/useProject";
import DashboardHeader from "../freelancer/DashboardHeader";
import { useProposal } from "../proposals/useProposal";
import Loader from "../ui/Loader";
import Stats from "./Stats";
import { useUsers } from "./useUsers";

function DashboardLayout() {
  const { proposals, isLoading: isLoadingProposals } = useProposal();
  const { users, isLoading: isLoadingUsers } = useUsers();
  const { project, isLoading: isLoadingProjects } = useProject();

  if (isLoadingProposals || isLoadingUsers || isLoadingProjects)
    return <Loader />;

  const activeUsers = users?.filter((user) => user.isActive);

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals?.length}
        users={activeUsers?.length}
        projectList={project?.length}
      />
    </div>
  );
}

export default DashboardLayout;
