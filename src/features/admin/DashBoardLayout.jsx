import DashboardHeader from "../freelancer/DashboardHeader";
import Stats from "../freelancer/Stats";
import { useProposal } from "../proposals/useProposal";
import Loader from "../ui/Loader";


function DashboardLayout() {
  const { proposals, isLoading } = useProposal();
  if (isLoading) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;