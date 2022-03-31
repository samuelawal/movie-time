const state = {
    movies: [
   
    ],
};
const getters = {
    theMovies: (state) => state.movies,
};
const actions = {
  fetchMovies: (context, myMovies) => {
    context.commit('addMoviesMutation', myMovies)
  }
};
const mutations = {
 addMoviesMutation: (state, myMovies)=> {
   state.movies.push(myMovies)
 }
};

export default {
  namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
