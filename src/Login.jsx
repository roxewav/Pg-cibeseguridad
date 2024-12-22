import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSocial, setLoadingSocial] = useState(false); // Nuevo estado para autenticación social
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Validación de correo electrónico
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validación de contraseña
  const validatePassword = (password) => {
    return password.length >= 4; // Mínimo 6 caracteres
  };

  const toggleAuth = () => {
    setIsSignIn(!isSignIn);
    setError(""); // Limpiar errores al cambiar entre registro e inicio de sesión
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Validación de entradas
    if (!email.trim() || !password.trim()) {
      setError("Por favor ingresa tu correo y contraseña");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      if (response.status === 429) {
        throw new Error("Demasiadas solicitudes. Intenta más tarde.");
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Credenciales inválidas");
      }

      const data = await response.json();
      console.log("Inicio de sesión exitoso", data);

      // Actualizar el estado de autenticación con el token
      login(null, null, data.token);

      // Redirigir al usuario a la página principal después del inicio de sesión exitoso
      navigate("/");
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 5000); // Limpiar error después de 5 segundos
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validación de entradas
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          email: email.trim(),
          password: password.trim(),
        }),
      });

      if (response.status === 429) {
        throw new Error("Demasiadas solicitudes. Intenta más tarde.");
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Registro fallido");
      }

      const data = await response.json();
      console.log("Registro exitoso", data);

      // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
      navigate("/login");
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 5000); // Limpiar error después de 5 segundos
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = (provider) => {
    setLoadingSocial(true); // Deshabilitar botones mientras se redirige
    window.location.href = `http://localhost:5000/auth/${provider}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg flex w-[800px]">
        {/* Panel Izquierdo */}
        <div
          className={`w-1/2 p-8 ${
            isSignIn ? "bg-white" : "bg-blue-500 text-white"
          } flex flex-col justify-center`}
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            {isSignIn ? "INICIAR SESIÓN" : "HOLA, AMIGO!"}
          </h2>
          {isSignIn ? (
            <>
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => handleSocialAuth("google")}
                  disabled={loadingSocial}
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => handleSocialAuth("facebook")}
                  disabled={loadingSocial}
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => handleSocialAuth("github")}
                  disabled={loadingSocial}
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mb-4">
                O USA TU CUENTA
              </p>
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-2 mb-4 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full p-2 mb-4 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="text-blue-500 text-sm mb-4">
                  ¿Olvidaste tu contraseña?
                </button>
                <button
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "INICIAR SESIÓN"}
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="text-center mb-6">
                Ingresa tus datos personales y comienza tu viaje con nosotros
              </p>
              <button
                onClick={toggleAuth}
                className="w-full bg-white text-blue-500 p-2 rounded hover:bg-gray-200 transition"
              >
                INICIAR SESIÓN
              </button>
            </>
          )}
        </div>

        {/* Panel Derecho */}
        <div
          className={`w-1/2 p-8 ${
            isSignIn ? "bg-blue-500 text-white" : "bg-white"
          } flex flex-col justify-center`}
        >
          {isSignIn ? (
            <>
              <h2 className="text-2xl font-bold mb-4">HOLA, AMIGO!</h2>
              <p className="mb-6">
                Ingresa tus datos personales y comienza tu viaje con nosotros
              </p>
              <button
                onClick={toggleAuth}
                className="w-full bg-white text-blue-500 p-2 rounded hover:bg-gray-200 transition"
              >
                REGISTRARSE
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">CREAR CUENTA</h2>
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => handleSocialAuth("google")}
                  disabled={loadingSocial}
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => handleSocialAuth("facebook")}
                  disabled={loadingSocial}
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => handleSocialAuth("github")}
                  disabled={loadingSocial}
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mb-4">
                O USA TU CORREO ELECTRÓNICO PARA REGISTRARTE
              </p>
              <form onSubmit={handleSignUp}>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  className="w-full p-2 mb-4 border rounded"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-2 mb-4 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full p-2 mb-4 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "REGISTRARSE"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Login;