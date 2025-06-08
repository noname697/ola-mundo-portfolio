import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({children, to}) => {
  const localizacao = useLocation();
  // useLocation() é um hook que retorna o pathname atual

  return (
    <Link
      className={`${styles.link} ${
        localizacao.pathname === to ? styles.linkDestacado : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
