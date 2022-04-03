<template>
  <HeaderView />

  <div v-if="loading" class="d-flex p-4">
    <Spinner class="mx-auto" />
  </div>

  <p v-else-if="!MOVIE_DETAILS.id" class="text-center my-5">No results found</p>

  <template v-else>
    <div
      class="myContainer"
      v-bind:style="{ backgroundImage: 'url(' + MOVIE_DETAILS.backdrop + ')' }"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7 col-md-12 col-sm-12 box p-5">
            <h1
              class="p-3 fw-bolder text-uppercase text-lg-start text-md-center text-sm-center"
            >
              {{ MOVIE_DETAILS.title }}
            </h1>

            <p class="p-3 lh-base">{{ MOVIE_DETAILS.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script>
import HeaderView from "../components/Header.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      loading: true,
    };
  },
  components: {
    HeaderView,
  },
  computed: {
    ...mapGetters("movies", ["MOVIES_LIST", "MOVIE_DETAILS"]),
  },
  methods: {
    ...mapActions("movies", ["FETCH_MOVIE_OVERViEW"]),
  },
  async created() {
    try {
      this.loading = true;
      await this.FETCH_MOVIE_OVERViEW(this.$route.params.movie_id);
    } finally {
      this.loading = false;
    }
  },
};
</script>
<style scoped>
.myContainer {
  background-size: 100%;
  min-height: 650px;
  background-repeat: no-repeat;
  background-position: top bottom;
}
.box {
  background-color: rgba(0, 0, 0, 0.542);
  box-shadow: 0.5px 5px 20px rgba(0, 0, 0, 0.994);
  border: none;
}
h1 {
  font-size: 2.445rem;
  letter-spacing: 0.5rem;
}
p {
  font-size: 20px;
}
</style>
