import { useState } from "react";
//import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Seguimiento from "./pages/Seguimiento/Seguimiento";
import Formulario from "./pages/registroPaquete/registroPaquete";

function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/seguimiento" element={<Seguimiento />} />
            <Route path="/registro-paquete" element={<Formulario />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
