<template>
  <the-header />
  <main>
    <p class="text-center text-white" v-if="!GET_MOVIE_SHOW_OVERVIEW.id">No record found !!</p>
    <div class="w-100 h-full" v-else>
      <img
        :src="GET_MOVIE_SHOW_OVERVIEW.backdrop"
        class="img-fluid myImg position-relative"
        style="height: 600px; width: 100%; object-fit: cover"
      />
      <div class="mycolor position-absolute top-0 w-100" style="height: 700px">
        <div class="container-fluid ms-5 text-white">
          <div class="position-absolute col-md-6" style="top: 20%">
            <h1 class="text-white fw-bold h1-fs">
              {{ GET_MOVIE_SHOW_OVERVIEW.title }}
            </h1>
            <p class="fs-6 text-white-50 mt-3">
              <small> {{ movieOverview }}....</small>
            </p>
            <button class="px-3 py-2 mt-3 mybtn-bg rounded border-0 text-white">
              Watch now
            </button>
            <p class="text-warning mt-5">
              Staring:
              <span
                class="text-white fs-6"
                v-for="casts in GET_MOVIE_SHOW_OVERVIEW.casts.slice(0, 25)"
                :key="casts.id"
                ><small class="ps-2">{{ casts.name}},</small></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "../components/TheHeader.vue";
export default {
  computed: {
    ...mapGetters("movies", ["GET_MOVIE_SHOW_OVERVIEW"]),
    movieOverview() {
      if (
        this.GET_MOVIE_SHOW_OVERVIEW.overview &&
        this.GET_MOVIE_SHOW_OVERVIEW.overview.length > 300
      ) {
        return this.GET_MOVIE_SHOW_OVERVIEW.overview.slice(0, 300);
      } else {
        return this.GET_MOVIE_SHOW_OVERVIEW.overview;
      }
    },
  },
  components: {
    TheHeader,
  },
  methods: {
    ...mapActions("movies", ["HANDLE_MOVIE_TV_LISTS"]),
  },
  created() {
    console.log(this.$route.params.movie_id);
    this.HANDLE_MOVIE_TV_LISTS(this.$route.params.movie_id);
  },
};
</script>
