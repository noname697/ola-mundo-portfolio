import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá,  Mundo!</h1>
        <p className={styles.paragrafo}>
          ✨ Bem-vindo ao meu cantinho na web! Sou o Arthur Manenti, explorador
          do universo da programação — tanto no front quanto no back-end. Por
          aqui, compartilho aprendizados, ideias e descobertas.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="circuloColorido"
        />
        <img
          className={styles.minhaFoto}
          src="http://github.com/noname697.png"
          alt="Foto do Arthur Manenti"
        />
      </div>
    </div>
  );
};

export default Banner;
