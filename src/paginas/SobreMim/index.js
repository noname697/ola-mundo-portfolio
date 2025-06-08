import PostModelo from "componentes/PostModelo/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Arthur!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Arthur Manenti"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou um estudante de programação e estou feliz de te ver
        por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com o mundo da tecnologia começou quando tinha apenas 13
        anos, naquele ano teve a pandemia do COVID-19 e nesse período tive
        vários aprendizados. Eu aprendi lógica de programação e o básico de
        várias áreas, como web design, design, JavaScript, mas sem aprofundar
        muito em cada uma delas. Eu gostava muito de estudar HTML e CSS, mas na
        época estudava apenas por diversão e com cursos no youtube.
      </p>

      <p className={styles.paragrafo}>
        até que no ensino médio, escolhi estudar no Instituto Federal
        Catarinense(IFC). Lá eu escolhi fazer o Curso Técnico de Informática
        Integrado ao Ensino Médio, que me proporcionou e está proporcionando até
        hoje uma base sólida em programação e desenvolvimento web. Durante o
        curso, estou tendo a oportunidade de aprender várias linguagens de
        programação, como Python, Java e JavaScript, além de me aprofundar em
        HTML e CSS.
      </p>

      <p className={styles.paragrafo}>
        Também tive a oportunidade de fazer estágio no setor de TI do IFC com
        isso tive uma experiência de trabalho neste mundo mais próxima da
        realidade, com prazos de implementação, e aprendi muito enquanto fazia
        as tarefas do cotidiano.
      </p>

      <p className={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. Desde
        ano passado estou também estudando na Alura, onde já obtive proficiência em várias
        tecnologias, como: JavaScript, Node.js, Git e GitHub, API's, HTTP, Sequelize, Blender e agora React.js. Agora meus planos são aprender mais sobre React e migrar para o TypeScript. Hoje sou muito feliz de
        ter a oportunidade de saber me virar nesses conteúdos e espero um dia conseguir trabalhar nesta área!
      </p>
    </PostModelo>
  );
};

export default SobreMim;
