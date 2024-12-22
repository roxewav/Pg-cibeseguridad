import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    console.log('Sesión cerrada');
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/refresh-token',
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);

      console.log('Token refrescado exitosamente');
    } catch (error) {
      console.error('Error al refrescar el token:', error);
      logout(); // Si no se puede refrescar el token, se cierra la sesión
    }
  }, [token, logout]);

  const fetchUser = useCallback(async () => {
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:5000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.warn('Token expirado, intentando refrescarlo...');
        try {
          await refreshToken();
          await fetchUser(); // Reintentar obtener el usuario después de refrescar el token
        } catch (refreshError) {
          console.error('Error al refrescar el token:', refreshError);
          logout(); // Si no se puede refrescar el token, se cierra la sesión
        }
      } else {
        console.error('Error al obtener la información del usuario:', error);
        logout(); // Si hay otro error, se cierra la sesión
      }
    }
  }, [token, refreshToken, logout]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (email, password, token) => {
    if (token) {
      // Si se proporciona un token, lo usamos directamente
      setToken(token);
      localStorage.setItem('token', token);
      await fetchUser();
      return;
    }

    if (!email || !password) {
      throw new Error('Email y contraseña son requeridos');
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);

      console.log('Inicio de sesión exitoso:', response.data);

      // Actualizar la información del usuario después de iniciar sesión
      await fetchUser();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error; // Lanza el error para manejarlo en el componente Login
    }
  };

  // Refrescar el token automáticamente cada 55 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      if (token) {
        refreshToken();
      }
    }, 55 * 60 * 1000); // 55 minutos

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
  }, [token, refreshToken]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};