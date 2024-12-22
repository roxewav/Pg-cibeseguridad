import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asíncrona para obtener el usuario
export const fetchUser = createAsyncThunk('auth/fetchUser', async (token) => {
  const response = await axios.get('/api/user', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.user;
});

// Acción asíncrona para actualizar la foto de perfil
export const updateUserPhoto = createAsyncThunk('auth/updateUserPhoto', async ({ token, formData }) => {
  const response = await axios.post('/api/user/photo', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(updateUserPhoto.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(updateUserPhoto.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default authSlice.reducer;