import React from "react";
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./Pages/Inicio";
import Postagem from "./Pages/Postagem";

export default function Rotas() {
  return <BrowserRouter>
  <Routes>
    <Route index path="/" element={<Inicio/>}/>
    <Route path="/Postagem/:nome/:descricao" element={<Postagem/>}/>
  </Routes>
  </BrowserRouter>
}

