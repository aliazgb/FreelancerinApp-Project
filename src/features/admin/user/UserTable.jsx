import Table from "../../Projects/Table";
import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import { useUsers } from "../useUsers";
import UserRow from "./UserRow";

function UserTable() {
    const { users, isLoading } = useUsers();
    if (isLoading) return <Loader />;
    if (!users.length) {
      return <Empty resourceName="Users" />;
    }
    const activUsers=users.filter((user)=>user.isActive)
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phonenumber</th>
          <th>Role</th>
          <th className="pr-10">Status</th>
          <th className="pr-10">Change User Status</th>
        </Table.Header>
        <Table.Body>
          {activUsers.map((user, index) => (
            <UserRow
              key={user._id}
              users={user}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    );
  }
  
  export default UserTable;