import "./App.css";

import Header from "./components/Header";
import Hero from "./components/hero";
import Footer from "./components/footer";

import Projetos from "./Pages/Projetos";
import Contatos from "./Pages/contatos";
import SobreMim from "./Pages/sobreMim";
import Direitos from "./Pages/direitosAutorais";

// Import de rotas para os <links> serem usados
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
      {/* o header fica fora de Routes para rendenrizar em todas as paginas */}
      <Header />

      <div>
        <Routes>
          {/* Pagina home */}
          <Route path="/" element={<Hero />} />

          {/* Links para outras abas dentro do header */}
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Contato" element={<Contatos />} />
          <Route path="/Sobre" element={<SobreMim />} />
          
          {/* Direitos autorais do footer */}
          <Route path="/Direitos" element={<Direitos />} />"
          
          {/* Caso tente acessar um link que nao exista, ira mostrar essa mensagem na tela */}
          <Route path="*" element={<h1>Pagina não encontrada.</h1>} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
