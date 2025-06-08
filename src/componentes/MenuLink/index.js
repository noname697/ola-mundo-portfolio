import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkDestacado : "")}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
