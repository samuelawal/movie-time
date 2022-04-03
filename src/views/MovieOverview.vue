<template>
  <HeaderView />
  <div class="myContainer" v-bind:style="{ backgroundImage: 'url(' + overviews.backdrop + ')' }">
    <div class="container-fluid">
      <div class="row ">
        <div class="col-lg-7 col-md-12 col-sm-12 box p-5">
         <h1 class="p-3 fw-bolder text-uppercase text-lg-start text-md-center text-sm-center">{{overviews.title}}</h1>
         
         <p class="p-3 lh-base">{{overviews.overview}}</p>
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
      ...mapGetters("movies", ["theMovies", "myOverview"]),
     overviews(){
       return this.myOverview
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
.box{
  background-color: rgba(0, 0, 0, 0.542);
  box-shadow: 0.5px 5px 20px  rgba(0, 0, 0, 0.994);
  border: none;
}
h1{
  font-size: 2.445rem;
  letter-spacing: .5rem;
}
p{
  font-size: 20px;
}

</style>
