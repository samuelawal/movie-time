import { createStore } from "vuex";
import movies from "./modules/movies";


export const store = createStore({
  modules : {
    movies,
  },
})
