import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import "./App.css";

// Importación de componentes y páginas
import { FaUser } from "react-icons/fa";
import inicioImage from "./imagenes/inicio.png";
import Footer from "./components/ui/Footer";
import InfoCards from "./components/ui/InfoCards";
import Grafica from "./components/ui/Grafica";
import Chatbott from "./components/ui/Chatbott";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./components/ui/menubar";
import Prevencion from "./Prevencion";
import Herramientas from "./Herramientas";
import Denuncia from "./Denuncia";
import Login from "./Login";
import Perfil from "./Perfil";
import AuthCallback from "./components/AuthCallback"; // Asegúrate de que la ruta sea correcta
import { Provider } from 'react-redux';
import { store } from './store';

function Home() {
  const navigate = useNavigate();
  const { user, token, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  function handlePerfil() {
    navigate("/perfil");
  }

  function handleConfiguracion() {
    console.log("Configuración seleccionada");
  }

  function handleCerrarSesion() {
    logout();
    console.log("Cerrando sesión...");
  }

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Menú de navegación */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/">INICIO</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/prevencion">PREVENCIÓN</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/herramientas">HERRAMIENTAS</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/denuncia">DENUNCIA</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <FaUser className="w-5 h-5 mr-2" />
          </MenubarTrigger>
          <MenubarContent>
            {user ? (
              <>
                <MenubarItem onSelect={handlePerfil}>Perfil</MenubarItem>
                <MenubarItem onSelect={handleConfiguracion}>Configuración</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onSelect={handleCerrarSesion}>Cerrar Sesión</MenubarItem>
              </>
            ) : (
              <MenubarItem onSelect={() => navigate("/login")}>Iniciar Sesión</MenubarItem>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="p-4">
        <h1 className="text-6xl font-anton mb-4 text-left">
          ¿VIOLENCIA DIGITAL<br />
          EN MÉXICO?
        </h1>
      </div>

      <div className="bg-[#0c43f8] relative h-96 w-full rounded-[25px] flex items-center justify-center">
        <img
          src={inicioImage}
          alt="Inicio"
          style={{ width: "700px", height: "300px" }}
          className="relative object-cover w-64 h-64"
        />
        <div className="p-4 rounded-lg text-white w-full">
          <p className="font-anton text-right" style={{ fontSize: "41px" }}>
            DE LOS 84.1 MILLONES<br />
            DE USUARIOS DE INTERNET<br />
            MAYORES DE 12 AÑOS (79.5%<br />
            DE USUARIOS DE INTERNET)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">9.8 MILLONES</h2>
          <p className="text-md mt-2 font-anton">
            DE MUJERES DE 12 AÑOS Y MÁS, FUERON VÍCTIMAS DE
            CIBERACOSO, A DIFERENCIA DE 7.8 MILLONES DE HOMBRES.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">29.3 %</h2>
          <p className="text-md mt-2 font-anton">
            DE MUJERES DE 20 A 29 AÑOS QUE UTILIZARON INTERNET EN
            2021 FUERON VICTIMAS DE CIBERACOSOS, FRENTE AL 23.7%
            DE LOS HOMBRES.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">61.3 %</h2>
          <p className="text-md mt-2 font-anton">
            DE LA POBLACÍON MAYOR A 12 AÑOS QUE FUE VÍCTIMA DE <br />
            CIBERACOSO FUE ACOSADA POR UN DESCONOCIDO.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">19.1 %</h2>
          <p className="text-md mt-2 font-anton">
            DE LA POBLACIÓN MAYOR A 12 AÑOS FUE VÍCTIMA DE
            CIBERACOSO DURANTE LOS ÚLTIMOS 12 MESES.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">85 %</h2>
          <p className="text-md mt-2 font-anton">
            DE LAS MUJERES EN LÍNEA HAN PRESENTADO VIOLENCIA DIGITAL.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">38 %</h2>
          <p className="text-md mt-2 font-anton">
            DE LAS MUJERES EN LE MUNDO TIENEN EXPERIENCIAS
            PERSONALES DE VIOLENCIA EN LÍNEA.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-anton text-[#0c43f8]">73 %</h2>
          <p className="text-md mt-2 font-anton">
            DE LAS MUJERES ENTRE 18 Y 24 AOS ENFRENTAN NIVELES MÁS
            ELEVADOS DE VIOLENCIA.
          </p>
        </div>
      </div>

      <Grafica />
      <InfoCards />
      <Chatbott />
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      // Almacena el token en localStorage o en un estado global
      localStorage.setItem('token', token);
      login(null, null, token); // Actualiza el estado de autenticación

      // Redirige a la página de inicio o a donde desees
      navigate('/');
    }
  }, [location, navigate, login]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prevencion" element={<Prevencion />} />
      <Route path="/herramientas" element={<Herramientas />} />
      <Route path="/denuncia" element={<Denuncia />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/auth/google/callback" element={<AuthCallback />} />
      <Route path="/auth/facebook/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default AppWrapper;