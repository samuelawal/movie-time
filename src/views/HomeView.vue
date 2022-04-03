<template>
  <HeaderView />
 
  <main>
    <section class="container-fluid py-3">
      <div class="border-start border-warning border-5 p-2">
      <h2 class="text-bolder ">Trending movies</h2>
      </div>
      <p class="text-white-50 ps-3">This week's top TV series and movies</p>
      <div class="row gx-3">
       <div v-if="loading">
    <Spinner/>
  </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 rounded"
          v-for="(movie, index) in movies"
          :key="index"
        >
        
        <router-link to="/overview" @click="onClick(index)">
          <div class="my-2 box relative">
            <img :src="movie.poster" :alt="movie.title" class="absolute w-100 h-auto rounded-top"/>
            <div class="p-3 d-flex absolute">
            <h1 class="fs-5 fw-bold">{{ movie.title }}</h1>
            <p class="ms-auto">{{movie.ratings}}/10</p>
            </div>
            <div class="p-2">
            <button class="btn btn-outline-warning w-100 my-3 rounded-pill p-2 ">Trailer</button>
          </div>
          </div>
     </router-link>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import HeaderView from "../components/Header.vue";
import Spinner from "../components/Spinners.vue"
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters("movies", ["theMovies"]),
    movies() {
      return this.theMovies;
    },
  },
  components: {
    HeaderView,
    Spinner
  },
  methods: {
    ...mapActions("movies", ["fetchMovies", "fetchMoviesOverview"]),
    async onLoad() {
      const API =
        "https://api.themoviedb.org/3/movie/popular?api_key=3a2cf5b3952891f0edb1dd5b965f9336&language=en-US&page=1";
      const img_path = "https://image.tmdb.org/t/p/w1280";
      this.loading = true;
      const res = await fetch(API, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTJjZjViMzk1Mjg5MWYwZWRiMWRkNWI5NjVmOTMzNiIsInN1YiI6IjYyNDE5MmEwOTQ1MWU3MDA4YzkyZDlmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hml-5mWgiqTXoCq7FBkIXEj1EM2SMbbJN2ztfhhDSIM",
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await res.json();
      data.results.forEach((movie) => {
        const { title, poster_path, vote_average, backdrop_path, overview } = movie;
        const myMovies = {
          title: title,
          poster: img_path + poster_path,
          ratings: vote_average,
          overview: overview,
          backdrop: img_path + backdrop_path
        };
        this.fetchMovies(myMovies);
      });
      this.loading = false
      console.log(data.results);
    },
    onClick(index) {
     const myOverview = this.movies[index]
    this.fetchMoviesOverview(myOverview)
}
  },
  mounted() {
    this.onLoad();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
body,  a{
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  background-color: #000;
  scroll-behavior: smooth;
}

.box {
  background-color: rgb(22, 22, 22);
  border-radius: 3px;
}
</style>