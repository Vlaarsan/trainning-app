// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice'; // Crée ce fichier et le slice correspondant

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Ajoute d'autres slices ici si nécessaire
  },
});

export default store;
