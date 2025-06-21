import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "componentes/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

const Post = () => {
  const { id } = useParams();

  const post = posts.find((post) => {
    return post.id === Number(id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const index = posts.findIndex((post) => post.id === Number(id));
  let postsRecomendados = [...posts];
  postsRecomendados.splice(index, 1);
  postsRecomendados = postsRecomendados.slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
              </PostModelo>
              <div className="recomendados-container">
                <h1>Outros posts que você pode gostar: </h1>
                <ul className="lista-recomendados">
                  {postsRecomendados.map((post) => {
                    if (post.id !== Number(id)) {
                      return (
                        <li key={post.id}>
                          <PostCard post={post} />
                        </li>
                      );
                    } else {
                      return "";
                    }
                  })}
                </ul>
              </div>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
