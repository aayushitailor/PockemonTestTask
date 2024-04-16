import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonsApi, getPokemonDetailsByUrlApi, getPokemonDetailsApi } from '../api/api';

export const fetchPokemonsApi = createAsyncThunk('data/fetchPokemonsApi', async (nextUrl) => {
  const data = await getPokemonsApi(nextUrl);
  return data;
});

export const fetchPokemonDetailsByUrlApi = createAsyncThunk('data/fetchPokemonDetailsByUrlApi', async (url) => {
  const data = await getPokemonDetailsByUrlApi(url);
  return data;
});

export const fetchPokemonDetailsApi = createAsyncThunk('data/fetchPokemonDetailsApi', async (id) => {
  const data = await getPokemonDetailsApi(id);
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    data1: [],
    data2:[], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemonsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetailsByUrlApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDetailsByUrlApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data1 = action.payload;
      })
      .addCase(fetchPokemonDetailsByUrlApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetailsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDetailsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data2 = action.payload;
      })
      .addCase(fetchPokemonDetailsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
