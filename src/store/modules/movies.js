import axios from "axios";
import { Config } from "../../plugins/config";
const ImgPath = "https://image.tmdb.org/t/p/w1280";
const state = {
  trendingMovies: [],
  overviews: [],
};
const getters = {
  GET_TRENDING_MOVIES: (state) => {
    return state.trendingMovies;
  },
  GET_MOVIE_SHOW_OVERVIEW: (state) => {
    console.log(state.overviews);
    return state.overviews;
  },
};
const actions = {
  // FETCH_MOVIES_LISTS: (movieId) => {
  //   return axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Config.apiKey}`
  //   );
  // },
  // FETCH_TV_SHOW_LISTS: (movieId) => {
  //   return axios.get(
  //     `https://api.themoviedb.org/3/tv/${movieId}?api_key=${Config.apiKey}`
  //   );
  // },
  HANDLE_MOVIE_TV_LISTS: async ({ commit }, movieId) => {
    let movieOverview = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Config.apiKey}`
    );
    let movieCasts = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Config.apiKey}`
    );
    // let tvOverview = await axios.get(
    //   `https://api.themoviedb.org/3/tv/${movieId}?api_key=${Config.apiKey}`
    // );
    await axios.all([movieOverview, movieCasts]).then(
      axios.spread((...responses) => {
        const movieDetails = {
          id: responses[0].data.id,
          title:
            responses[0].data.original_title || responses[0].data.original_name,
          casts: responses[1].data.cast,
          ratings: responses[0].data.vote_average,
          poster: ImgPath + responses[0].data.poster_path,
          overview: responses[0].data.overview,
          genre: responses[0].data.genres,
          backdrop: ImgPath + responses[0].data.backdrop_path,
        };
        commit("ADD_MOVIE_TV_MUTATIONS", movieDetails);
        commit("ADD_MOVIE_TV_CAST_MUTATIONS", responses[1].data.cast);

        console.log(responses[1]);
      })
    );
  },
  FETCH_TRENDING_MOVIES: async ({ commit }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/trending/all/day?api_key=${Config.apiKey}`,
      });
      const trendingMovies = await response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.original_title || movie.original_name,
          ratings: movie.vote_average,
          casts: null,
          poster: ImgPath + movie.poster_path,
          overview: movie.overview,
          genre: movie.genre_ids,
          backdrop: ImgPath + movie.backdrop_path,
        };
      });
      commit("ADD_TRENDING_MOVIES_MUTATION", trendingMovies);
    } catch (err) {
      return err;
    }
  },
};
const mutations = {
  ADD_TRENDING_MOVIES_MUTATION: (state, payload) => {
    state.trendingMovies = payload;
  },
  ADD_MOVIE_TV_MUTATIONS: (state, payload) => {
    state.overviews = payload;
    state.trendingMovies.casts = payload
    console.log(state.overviews);
  },
  ADD_MOVIE_TV_CAST_MUTATIONS: (state, payload) => {
    state.overviews.casts = payload;
    state.trendingMovies.casts = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
