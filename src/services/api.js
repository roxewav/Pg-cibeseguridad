import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Asegúrate de que esta URL coincide con tu backend

// Función para iniciar sesión
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log('Respuesta del servidor:', response.data); // Agrega este console.log para depurar
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error.response?.data?.message || error.message); // Agrega este console.log para depurar
    throw error.response?.data?.message || 'Error al iniciar sesión';
  }
};

// Función para registrarse
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    console.log('Respuesta del servidor:', response.data); // Agrega este console.log para depurar
    return response.data;
  } catch (error) {
    console.error('Error al registrarse:', error.response?.data?.message || error.message); // Agrega este console.log para depurar
    throw error.response?.data?.message || 'Error al registrarse';
  }
};