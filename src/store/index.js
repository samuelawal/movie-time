import movies from './modules/movies';
import { createStore } from "vuex";




export const store = createStore({
    modules: {
        movies,
    },  
});