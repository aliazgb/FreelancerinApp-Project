import { FaSearch } from "react-icons/fa";

function Empty({ resourceName }) {
  return (
    <div className="flex justify-center">
      <span className="font-bold text-secondary-900 text-center flex space-x-6">
        <span>{resourceName} Not Found</span>
        <span className="flex items-center">
          <FaSearch className="w-5 h-5 text-primary-900"/>
        </span>
      </span>
    </div>
  );
}
export default Empty;
