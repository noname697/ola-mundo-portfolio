import styles from "./BotaoPrincipal.module.css";

const BotaoPrincipal = ({ children, tamanho }) => {
  return (
    <button className={`${styles.BotaoPrincipal} ${styles[tamanho]}`}>
      {children}
    </button>
  );
};

export default BotaoPrincipal;
