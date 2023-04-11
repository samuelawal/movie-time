<template>
  <movie-loader v-if="isLoading" class="d-flex aligns-items-center" />
  <main v-else-if="!isLoading">
    <div class="w-100 h-full">
      <img
        :src="randomTrendingMovies.backdrop"
        class="img-fluid myImg position-relative"
        style="height: 600px; width: 100%; object-fit: cover"
      />
      <div class="mycolor position-absolute top-0 w-100" style="height: 700px">
        <div class="container-fluid ms-5 text-white">
          <div class="position-absolute col-md-6" style="top: 20%">
            <h1 class="text-white fw-bolder h1-fs">
              {{ randomTrendingMovies.title }}
            </h1>
            <p class="fs-6 text-white-50 mt-4">
              <small>{{ randomTrendingMovies.overview }}....</small>
            </p>
            <button class="px-3 py-2 mt-3 mybtn-bg rounded border-0 text-white">
              Watch now
            </button>
          </div>
        </div>
      </div>
    </div>

    <article>
      <div class="container">
        <section class="mt-5">
          <div class="border-start border-warning border-5 p-2">
            <h2 class="text-white fs-3 text-bold">Popular movies</h2>
          </div>
          <p class="text-white-50 ps-3">This week's top TV series and movies</p>

          <div class="row gx-3">
            <div
              class="col-lg-3 col-md-6 col-sm-12 rounded"
              v-for="trending in GET_TRENDING_MOVIES"
              :key="trending.id"
            >
              <router-link
                :to="`/overview/${trending.id}`"
                class="text-decoration-none"
              >
                <div class="my-2" height="603" width="402">
                  <img
                    :src="trending.poster"
                    :alt="trending.title"
                    class="w-100"
                    height="150"
                    style="object-fit: cover"
                  />
                  <div class="p-3 absolute">
                    <p class="fs-5 text-center text-white">
                      {{ trending.title }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import movieLoader from "./MovieLoader.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    movieLoader,
  },
  computed: {
    ...mapGetters("movies", ["GET_TRENDING_MOVIES"]),
    randomTrendingMovies() {
      const trendingMovie = Math.floor(
        Math.random() * this.GET_TRENDING_MOVIES.length
      );
      console.log(this.GET_TRENDING_MOVIES[trendingMovie | 0]);
      return this.GET_TRENDING_MOVIES[trendingMovie];
    },
  },
  async created() {
    this.isLoading = true;
    await this.onLoad();
    this.isLoading = false;
  },
  methods: {
    ...mapActions("movies", ["FETCH_TRENDING_MOVIES"]),
    async onLoad() {
      await this.FETCH_TRENDING_MOVIES();
    },
  },
};
</script>
