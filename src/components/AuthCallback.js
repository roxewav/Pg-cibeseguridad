// src/components/AuthCallback.js

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchUser } from '../features/auth/authSlice';

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      dispatch(fetchUser(token))
        .then(() => {
          navigate('/perfil'); // Redirige a la página de perfil
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, location]);

  return null;
};

export default AuthCallback;