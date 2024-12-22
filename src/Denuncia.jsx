import React from "react";

{/* NAVEGACIÓN */ }
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

{/* VARIOS */ }
import { FaUser } from "react-icons/fa";
import PrevencionImage from "./imagenes/Prevencion.jpg";
import Stopncii from "./imagenes/stopncii.png";
import Guardia from "./imagenes/guardiaNacional.png";
import Veracruz from "./imagenes/veracruz.jpg";

{/* COMPONENTES */ }
import Footer from "./components/ui/Footer";
import Chatbott from "./components/ui/Chatbott";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "./components/ui/menubar";

function Denuncia() {
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
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
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

            {/* Título principal */}
            <div className="p-4">
                <h1 className="text-6xl font-anton mb-4 text-left">
                    ¿QUE HACER SI TE AMENAZAN CON<br />
                    COMPARTIR FOTOS INTIMAS?
                </h1>
            </div>

            {/* Imágenes */}
            <div className="flex justify-center items-center space-x-6 mt-6">
                <img
                    src={Stopncii}
                    alt="stopncii"
                    className="rounded-lg shadow-lg w-1/3 max-w-sm"
                />

                <img
                    src={PrevencionImage} /* Reemplaza por la ruta de tu segunda imagen */
                    alt="Foto de persona"
                    className="rounded-full shadow-md w-1/4 max-w-xs"
                />
            </div>

            {/* Contactos */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 font-anton">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-blue-600">
                        Contactos para denunciar<br />
                        violencia digital
                    </h3>

                    <div className="bg-[#a1b7ff] p-1 shadow">
                        <p className=" text-center">
                            <strong>Policía Cibernética de la Guardia Nacional</strong>
                        </p>
                    </div>

                    <img
                        src={Guardia}
                        alt="Foto de persona"
                        className="object-center rounded-full w-full "
                    />

                    <p className="text-gray-700 font-anton">Policía Cibernética de la Comisión<br />
                        Nacional de Seguridad: <br />
                        088,el cual opera las 24 horas del día, los<br />
                        365 días del año. También puedes realizar<br />
                        denuncias a través de la cuenta de<br />
                        Twitter<br />
                        @CNAC_ GN<br />
                        el correo<br />
                        cert-mx@sspc.gob.mx<br />
                        y de la aplicación PF Móvil, disponible<br />
                        para todas las plataformas de telefonía<br />
                        celular.
                        policia.cibernetica@ssp.df.gob.mx<br />
                        @UCS_CDMX #CiberneticaCDMX</p>
                </div>


                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-blue-600">
                        Denuncia por violencia de <br />
                        género
                    </h3>
                    <div className="bg-[#a1b7ff] p-1 shadow">
                        <p className="text-center">
                            <strong>Policía Cibernética de Veracruz</strong>
                        </p>
                    </div>

                    <img
                        src={Veracruz}
                        alt="Foto de persona"
                        className="objeto-center w-full h-[250px]"
                    />

                    <p className="text-gray-700">el C4 invita a la población a denunciar y prevenir este tipo de actividades, llamando a las líneas de emergencias 066 y denuncia anónima 089, o escribiendo al correo policiacientifica@veracruz.gob.mx, en caso de ser víctimas de delitos cibernéticos. </p>

                </div>
            </section>

            {/* Consejos */}
            <section className="bg-blue-100 py-6 px-4 md:px-12 mt-8 rounded-lg">
                <h2 className="text-xl font-bold text-blue-800">
                    Para denunciar <span className="text-blue-600">#ViolenciaDigital:</span>
                </h2>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-800">
                    <li>Guarda las pruebas.</li>
                    <li>Haz captura de pantallas de las amenazas.</li>
                    <li>Evita el phishing y sextorsión.</li>
                </ul>
            </section>

            <Chatbott />
            <Footer />
        </div>
    );
}

export default Denuncia;
