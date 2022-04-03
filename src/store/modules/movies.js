const state = {
    movies: [
   
    ],
    movieOverview: [],
};
const getters = {
    theMovies: state => state.movies,
    myOverview: state => state.movieOverview  
};
const actions = {
  fetchMovies: (context, myMovies) => {
    context.commit('addMoviesMutation', myMovies)
  },
  fetchMoviesOverview: (context, myMovies) => {
    context.commit('addMoviesOverview', myMovies)
  }
};
const mutations = {
 addMoviesMutation: (state, myMovies)=> {
   state.movies.push(myMovies)
 },
 addMoviesOverview: (state, myMovies)=> {
   state.movieOverview = myMovies
 }
};

export default {
  namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
