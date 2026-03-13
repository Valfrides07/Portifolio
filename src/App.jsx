import Header from "./components/Header/index"; 
import Hero from "./components/Hero/index";
import Footer from "./components/Footer/index";


import Projetos from "./Pages/Projetos";
import Contatos from "./Pages/Contatos/index";
import SobreMim from "./Pages/SobreMim/index";
import Direitos from "./Pages/DireitosAutorais/index";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Contatos" element={<Contatos />} />
          <Route path="/SobreMim" element={<SobreMim />} />
          <Route path="/DireitosAutorais" element={<Direitos />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
