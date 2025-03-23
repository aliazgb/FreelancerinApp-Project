import { NavLink } from "react-router-dom";

function CousttomLinks({ children, to }) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100 px-2 py-2 rounded-lg w-[80%]";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClasses} bg-primary-100/50 text-primary-900 `
          : `${navLinkClasses} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
export default CousttomLinks ;
