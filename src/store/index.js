import movies from './modules/movies';
import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  });

export const store = createStore({
    modules: {
        movies,
    },  
    plugins: [vuexLocal.plugin],
});