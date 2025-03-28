import DashboardHeader from "../freelancer/DashboardHeader";
import Stats from "../freelancer/Stats";
import useProjects from "../hooks/useProjects";
import { useProposal } from "../proposals/useProposal";
import Loader from "../ui/Loader";
import { useUsers } from "./useUsers";

function DashboardLayout() {
  const { proposals, isLoading: isLoading1 } = useProposal();
  const { users, isLoading: isLoading2 } = useUsers();
  const { projects, isLoading: isLoading3 } = useProjects();
  if (isLoading1 && isLoading2 && isLoading3) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals.length} users={users} projects={projects} />
    </div>
  );
}

export default DashboardLayout;
