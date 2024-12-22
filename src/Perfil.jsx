import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { FiCamera, FiEdit, FiArrowLeft } from 'react-icons/fi';

const Perfil = () => {
  const navigate = useNavigate();
  const { user, token, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  const manejarCambioFoto = (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('photo', selectedFile);

    fetch('http://localhost:5000/api/user/photo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Foto de perfil actualizada con éxito', data);
      })
      .catch((error) => {
        console.error('Error al actualizar la foto de perfil', error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 flex space-x-10">
        {/* Columna de Foto y Nombre */}
        <div className="w-1/4 flex flex-col items-center justify-start border-r border-gray-300 pr-8">
          <div className="relative mb-6">
            <img
              src={user.foto || 'https://via.placeholder.com/150'}
              alt="Foto de perfil"
              className="w-36 h-36 rounded-full border-4 border-gray-300 shadow-md"
            />
            <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-900 transition">
              <FiCamera className="text-lg" />
              <input
                type="file"
                className="hidden"
                onChange={manejarCambioFoto}
              />
            </label>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">{user.nombre_de_usuario}</h1>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        {/* Columna de Información Personal */}
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Información Personal</h2>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Nombre Completo</label>
              <p className="text-lg text-gray-800">{user.nombre_de_usuario}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Email</label>
              <p className="text-lg text-gray-800">{user.email}</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="mt-8 flex justify-end gap-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center bg-blue-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FiArrowLeft className="mr-2 text-lg" />
              Regresar
            </button>
            <button
              onClick={logout}
              className="flex items-center bg-red-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-red-700 transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;