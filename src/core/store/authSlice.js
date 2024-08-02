import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = createAsyncThunk(
  '/register',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('Register user data:', userData); // Логируем отправляемые данные
      const response = await axios.post(`${API_URL}/register/`, userData);
      console.log('Register response:', response.data); // Логируем ответ от сервера
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error('Register error:', error.response.data); // Логируем ответ ошибки от сервера
        return rejectWithValue(error.response.data);
      } else {
        console.error('Register error:', error.message); // Логируем сообщение об ошибке
        return rejectWithValue(error.message);
      }
    }
  },
);

export const loginUser = createAsyncThunk(
  '/login',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('Login user data:', userData); // Логируем отправляемые данные
      const response = await axios.post(`${API_URL}/login/`, userData);
      console.log('Login response:', response.data); // Логируем ответ от сервера
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error('Login error:', error.response.data); // Логируем ответ ошибки от сервера
        return rejectWithValue(error.response.data);
      } else {
        console.error('Login error:', error.message); // Логируем сообщение об ошибке
        return rejectWithValue(error.message);
      }
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        console.log('Register fulfilled:', action.payload); // Логируем успешную регистрацию
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('Register rejected:', action.payload); // Логируем ошибку регистрации
      })
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        console.log('Login fulfilled:', action.payload); // Логируем успешную авторизацию
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('Login rejected:', action.payload); // Логируем ошибку авторизации
      });
  },
});

export default authSlice.reducer;
