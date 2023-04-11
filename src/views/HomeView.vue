<template>
<the-header/>
  <trending-movies />

  
</template>

<script>
import TrendingMovies from "../components/TrendingMovies.vue";
import TheHeader from '../components/TheHeader.vue'
export default {
  name: "HomeView",
  components: {
    TrendingMovies,
    TheHeader
  },
};
</script>
