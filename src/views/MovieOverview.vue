<template>
  <HeaderView />
  <div class="myContainer">
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-md-6">
          <!-- <div v-for="movie in movies">{{ movie.title }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderView from "../components/Header.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: " ",
    };
  },
  components: {
    HeaderView,
  },
  computed: {
    ...mapGetters("movies", ["theMovies"]),
    movies() {
      return this.theMovies
    },
  },
};
</script>
<style >
.myContainer {
  background: url("https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top bottom;
}
</style>
