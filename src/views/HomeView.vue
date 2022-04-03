<template>
  <HeaderView />

  <main>
    <section class="container-fluid py-3">
      <div class="border-start border-warning border-5 p-2">
        <h2 class="text-bolder">Trending movies</h2>
      </div>
      <p class="text-white-50 ps-3">This week's top TV series and movies</p>
      <div class="row gx-3">
        <div v-if="loading">
          <Spinner />
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 rounded"
          v-for="(movie, index) in MOVIES_LIST"
          :key="index"
        >
          <router-link to="/overview" @click="onClick(index)">
            <div class="my-2 box relative">
              <img
                :src="movie.poster"
                :alt="movie.title"
                class="absolute w-100 h-auto rounded-top"
              />
              <div class="p-3 d-flex absolute">
                <h1 class="fs-5 fw-bold">{{ movie.title }}</h1>
                <p class="ms-auto">{{ movie.ratings }}/10</p>
              </div>
              <div class="p-2">
                <button
                  class="btn btn-outline-warning w-100 my-3 rounded-pill p-2"
                >
                  Trailer
                </button>
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
import Spinner from "../components/Spinners.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      loading: false,
    };
  },

  computed: {
    ...mapGetters("movies", ["MOVIES_LIST"]),
  },

  components: {
    HeaderView,
    Spinner,
  },

  methods: {
    ...mapActions("movies", ["FETCH_MOVIES", "FETCH_MOVIE_OVERViEW"]),
    async onLoad() {
      try {
        this.loading = true;
        this.FETCH_MOVIES();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    onClick(index) {
      const selectedMovieDetails = this.MOVIES_LIST[index];
      this.FETCH_MOVIE_OVERViEW(selectedMovieDetails);
    },
  },
  mounted() {
    this.onLoad();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
body,
a {
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
