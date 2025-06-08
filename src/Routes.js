import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

const AppRoutes = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        {/* 
        
          Na Rota "/", a estrutura a ser renderizada é a PaginaPadrao:
          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>

          Na Rota "/sobremim", a estrutura a ser renderizada é a PaginaPadrao:
          <PaginaPadrao>
            <SobreMim />
          </PaginaPadrao>

        */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
