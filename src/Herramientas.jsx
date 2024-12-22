import React from "react";

{/* NAVEGACIÓN */ }
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

{/* VARIOS */ }
import { FaUser } from "react-icons/fa"; // Importa FaUser
import PrevencionVideo from './videos/¿Qué hacer si sufres de violencia digital_.mp4'; //
import SecurityImage from './imagenes/seguridad.jpg';

{/* COMPONENTES */ }
import Chatbott from "./components/ui/Chatbott";
import Footer from "./components/ui/Footer";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "./components/ui/menubar";


{/*Iconos*/ }
import icono1 from './imagenes/icono1.png';
import icono2 from './imagenes/icono2.jpg';
import icono3 from './imagenes/icono3.png';


function Herramientas() {
    const navigate = useNavigate();

    const handlePerfil = () => {
        navigate("/Perfil"); // Cambiado a ruta absoluta
    };

    const handleConfiguracion = () => {
        console.log("Configuración seleccionada");
    };

    const handleCerrarSesion = () => {
        console.log("Cerrando sesión...");
    };

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
                        <MenubarItem onSelect={handlePerfil}>Perfil</MenubarItem>
                        <MenubarItem onSelect={handleConfiguracion}>Configuración</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onSelect={handleCerrarSesion}>Cerrar Sesión</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            {/* Video de prevención centrado y grande */}
            <div className="flex justify-center my-8">
                <video className="w-full max-w-4xl rounded-lg" controls>
                    <source src={PrevencionVideo} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>


            <div className="">
                <h1 className="text-6xl font-anton mb-4 text-justify">
                    HERRAMIENTAS CONTRA LA VIOLENCIA<br />
                    DIGITAL EN FACEBBOCK E INTAGRAM
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center space-y-8">
                {/* Título principal */}
                <h1 className="text-2xl font-bold text-center text-blue-600">
                    ¿QUÉ HACER SI SOY VÍCTIMA DE BULLYING O ACOSO EN FACEBOOK?
                </h1>

                {/* Sección de íconos con texto */}
                <div className="flex justify-center gap-8">
                    {/* Ícono 1 */}
                    <div className="flex flex-col items-center text-center bg-transparent">
                        <img src={icono1} alt="Eliminar" className="w-16 h-16" />
                        <p className="mt-2 text-sm">
                            Elimina a la persona de tu lista de amigos para evitar el contacto por medio del chat.
                        </p>
                    </div>
                    {/* Ícono 2 */}
                    <div className="flex flex-col items-center text-center bg-transparent">
                        <img src={icono2} alt="Bloquear" className="w-16 h-16" />
                        <p className="mt-2 text-sm">
                            Bloquea a esa persona para que no pueda agregarte y ver el contenido que compartes.
                        </p>
                    </div>
                    {/* Ícono 3 */}
                    <div className="flex flex-col items-center text-center bg-transparent">
                        <img src={icono3} alt="Reportar" className="w-16 h-16" />
                        <p className="mt-2 text-sm">
                            Reporta a la persona y su contenido abusivo.
                        </p>
                    </div>
                </div>

                {/* Título para acciones preventivas */}
                <h2 className="text-xl font-bold text-center text-blue-600">
                    ACCIONES PREVENTIVAS CONTRA LA VIOLENCIA DIGITAL
                </h2>

                {/* Contenedor negro con acciones preventivas */}
                <div className="bg-black text-white p-6 rounded-lg w-full max-w-3xl">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">
                            Revisa las políticas de privacidad de las redes sociales.
                        </p>
                        <p className="text-sm">
                            Evita chatear con desconocidos.
                        </p>
                    </div>
                    <img
                        src={SecurityImage}
                        alt="Seguridad"
                        className="mt-4 rounded-lg mx-auto w-60 h-32 object-cover"
                    />
                </div>
            </div>


            {/* Apartado de Descargables */}
            <div className="mt-8 p-4 bg-white rounded-lg">
                <h2 className="text-xl font-bold text-center text-[#0c43f8] mb-4">Descargables</h2>
                <div className="flex justify-center gap-8 flex-wrap">
                    {/* Documento de Ciberseguridad */}
                    <div className="flex flex-col items-center text-center">
                        <embed src="/documentos/10082020_Gui_a_de_ciberseguridad_en_apoyo_a_la_educacio_n_-_VF_para_publicar.pdf" type="application/pdf" className="w-16 h-16" />
                        <a href="/documentos/10082020_Gui_a_de_ciberseguridad_en_apoyo_a_la_educacio_n_-_VF_para_publicar.pdf" download className="text-blue-500 hover:underline mt-2">
                            Documento de Ciberseguridad
                        </a>
                    </div>
                    {/* Documento de Prevención */}
                    <div className="flex flex-col items-center text-center">
                        <embed src="/documentos/CIBERBULLYING.pdf" type="application/pdf" className="w-16 h-16" />
                        <a href="/documentos/CIBERBULLYING.pdf" download className="text-blue-500 hover:underline mt-2">
                            Documento de Prevención
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <embed src="/documentos/UNICEF-DEFINE-CIBERACOSO.pdf" type="application/pdf" className="w-16 h-16" />
                        <a href="/documentos/UNICEF-DEFINE-CIBERACOSO.pdf" download className="text-blue-500 hover:underline mt-2">
                            Documento de Prevención
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <embed src="/documentos/E18-0032.pdf" type="application/pdf" className="w-16 h-16" />
                        <a href="/documentos/E18-0032.pdf" download className="text-blue-500 hover:underline mt-2">
                            Documento de Prevención
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <embed src="/documentos/Vigilancia_Tecnologica_en_Ciberseguridad_Boletin.pdf" type="application/pdf" className="w-16 h-16" />
                        <a href="/documentos/Vigilancia_Tecnologica_en_Ciberseguridad_Boletin.pdf" download className="text-blue-500 hover:underline mt-2">
                            Documento de Prevención
                        </a>
                    </div>
                </div>
            </div>

            <Chatbott />
            <Footer />
        </div>
    );
}

export default Herramientas;