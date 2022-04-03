const state = {
  movies: [],
  movieOverview: [],
};

const getters = {
  MOVIES_LIST: (state) => state.movies,
  MOVIE_DETAILS: (state) => state.movieOverview,
};

const actions = {
  FETCH_MOVIES: async ({ commit }) => {
    const API =
      "https://api.themoviedb.org/3/movie/popular?api_key=3a2cf5b3952891f0edb1dd5b965f9336&language=en-US&page=1";
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

    const data = await fetch(API, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTJjZjViMzk1Mjg5MWYwZWRiMWRkNWI5NjVmOTMzNiIsInN1YiI6IjYyNDE5MmEwOTQ1MWU3MDA4YzkyZDlmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hml-5mWgiqTXoCq7FBkIXEj1EM2SMbbJN2ztfhhDSIM",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => res.json());

    const movies = data.results.map((movie) => {
      return {
        title: movie.title,
        poster: IMG_PATH + movie.poster_path,
        ratings: movie.vote_average,
        overview: movie.overview,
        backdrop: movie.img_path + movie.backdrop_path,
      };
    });
    commit("ADD_MOVIES_MUTATION", movies);
  },

  FETCH_MOVIE_OVERViEW: (context, myMovies) => {
    context.commit("ADD_MOVIE_OVERVIEW_MUTATION", myMovies);
  },
};
const mutations = {
  ADD_MOVIES_MUTATION: (state, myMovies) => {
    console.log({ myMovies });
    state.movies = myMovies;
  },
  ADD_MOVIE_OVERVIEW_MUTATION: (state, myMovies) => {
    state.movieOverview = myMovies;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
