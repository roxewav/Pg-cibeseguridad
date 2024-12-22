import React from "react";

{/* NAVEGACIÓN */ }
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

{/* VARIOS */ }
import { FaUser } from "react-icons/fa"; // Importa FaUser
import PrevencionImage from './imagenes/Prevencion.jpg';
import carta from './imagenes/carta.png';

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

function Prevencion() {
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
                        <Link to="/Prevencion">PREVENCIÓN</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link to="/Herramientas">HERRAMIENTAS</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link to="/Denuncia">DENUNCIA</Link>
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

            {/* Contenido principal */}
            <div className="flex justify-center items-center">
                <img
                    src={PrevencionImage}
                    alt="Prevención"
                    className="rounded-[20px] w-full max-w-3xl object-cover"
                />
            </div>

            <div className="bg-white min-h-screen p-8">
                {/* Título principal */}
                <h1 className="text-blue-600 text-2xl font-anton text-center mb-8">
                    PROTEGER LOS DATOS PERSONALES PARA PREVENIR LA VIOLENCIA DIGITAL
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Columna izquierda */}
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <p className="text-gray-800 leading-relaxed mb-4 font-anton text-justify">
                            En el uso de las tecnologías de la información y comunicación, continuamente compartimos información con otras personas o instituciones a través de plataformas digitales y es necesario protegerlas para que no hagan mal uso de ellas.
                        </p>
                        <p className="text-gray-800 leading-relaxed font-anton text-justify">
                            Todas las personas tenemos el derecho a la privacidad de nuestros datos personales y para disfrutarla es importante cuidar a quién y qué tipo de información personal compartimos, incluyendo aquellos que se comparten a través de fotografías.
                        </p>
                    </div>

                    {/* Columna derecha */}
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-blue-600 font-bold text-lg mb-4 font-anton text-left">
                            ¿Por qué es importante cuidar nuestros datos personales?
                        </h2>
                        <ul className="list-disc pl-5 text-gray-800 font-anton text-left">
                            <li>Porque dicen quién eres.</li>
                            <li>Porque dicen cómo eres.</li>
                            <li>Porque pueden revelar una forma de encontrarte.</li>
                            <li>Porque pueden revelar información de su entorno o familia.</li>
                        </ul>
                    </div>
                </div>

                {/* Sección inferior */}
                <div className="flex flex-col items-center bg-white py-8 px-4">
                    <h2 className="text-2xl font-bold text-blue-600 mb-8 font-anton">
                        ¿CÓMO PROTEGER LA PRIVACIDAD DIGITAL?
                    </h2>
                    {/* Contenedor de columnas */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">

                        {/* Columna izquierda (Títulos) */}
                        <div className="flex flex-col h-full font-anton">
                            <div className="bg-[#85eae9] text-white p-4 rounded-t-lg w-[400px] h-[55px] flex items-center justify-center">
                                ACTUALIZACIÓN FRECUENTE DE LOS DISPOSITIVOS
                            </div>
                            <div className="bg-[#3ddad7] text-white p-4 w-[400px] h-[80px] flex items-center justify-center">
                                PROTECCIÓN FRENTE A ACCESOS NO DESEADOS
                            </div>
                            <div className="bg-[#37c8ee] text-white p-4 w-[400px] h-[80px] flex items-center justify-center">
                                CIFRAR EL CONTENIDO
                            </div>
                            <div className="bg-[#2c92d4] text-white p-4 w-[400px] h-[80px] flex items-center justify-center">
                                GESTIÓN DE CONTRASEÑAS
                            </div>
                            <div className="bg-[#162e84] text-white p-4 w-[400px] h-[130px] flex items-center justify-center">
                                DETECCIÓN DE USOS NO CONTROLADOS
                            </div>
                            <div className="bg-[#0e2c4c] text-white p-4 rounded-b-lg w-[400px] h-[80px] flex items-center justify-center">
                                IMPLEMENTAR ACCIONES DE BORRADO SEGURO
                            </div>
                        </div>

                        {/* Columna derecha (Contenido) */}
                        <div className="flex flex-col font-anton text-justify">
                            <div className="bg-gray-100 p-4 ml-[-150px] rounded-t-lg text-gray-700">
                                Un dispositivo actualizado es menos vulnerable ante los ciberataques.
                            </div>
                            <div className="bg-gray-50 p-4 ml-[-150px] text-gray-700">
                                Las contraseñas y los patrones de desbloqueo deben ser secretos, complejos y seguros, pues constituyen la primera barrera de seguridad para proteger la privacidad de tus dispositivos.
                            </div>
                            <div className="bg-gray-100 p-4 ml-[-150px] text-gray-700">
                                La mayoría de los sistemas operativos ofrecen la opción de cifrar el contenido del móvil, de forma que para acceder a cualquier información hay que introducir una clave de seguridad.
                            </div>
                            <div className="bg-gray-50 p-4 ml-[-150px] text-gray-7 00">
                                No revelar a nadie las contraseñas. Debe evitarse apuntarlas y utilizar una misma contraseña para todos los accesos. Para facilitar el trabajo, puede utilizarse una herramienta de gestión de claves.
                            </div>
                            <div className="bg-gray-100 p-4 ml-[-150px] text-gray-700">
                                Para detectar accesos no permitidos en los dispositivos, debe verificarse que no haya aplicaciones que no se hayan instalado y revisar detalladamente las facturas para comprobar que no haya ningún uso no controlado. En caso de robo o pérdida del teléfono, existen herramientas que facilitan la ubicación del dispositivo y permiten bloquearlo de manera remota.
                            </div>
                            <div className="bg-gray-50 p-4 ml-[-150px] rounded-b-lg text-gray-700">
                                Para minimizar accesos o recuperación de información no autorizada se deben usar acciones de borrado seguro.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">CARTA DE DERECHOS</h2>
            <div className="flex justify-start items-center">
                <img
                    src={carta}
                    alt="carta"
                    className="rounded-[20px] w-1/4 object-cover"
                />
            </div>

            <Chatbott />
            <Footer />
        </div>
    );
}
export default Prevencion;