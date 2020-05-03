<template>
  <div>
    <b-container>
      <div v-for="cat in Categories" :key="cat" style="padding-bottom: 30px;">
        <h2 class="ttl">{{cat | capitalize}} ({{getCountCategorie(cat)}})</h2>
        <div class="underLigne"></div>
        <div class="row justify-content-center pt-5 pb-3">
          <div class="col-md-4" v-for="(movie, i) in Movies" :key="i" v-show="movie.genre == cat" style="margin-top: -15px;">
            <MovieCard :movie="movie" :i="getMovieId(movie)" />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MovieCard from "@/components/MovieCard.vue";
export default {
  components :{
    MovieCard
  },
  data() {
    return {};
  },
  methods: {
    getMovieId(m){
      return this.Movies.indexOf(m);
    }
  },
  computed: {
    ...mapState(["Movies", "Categories"]),
    ...mapGetters(["getCountCategorie"])
  },
  filters: {
    capitalize(txt){
      return txt.toUpperCase();
    }
  }
};
</script>
<style>

.ttl{
  font-weight: bold;
  margin-top: 20px
}
.underLigne{
  width: 450px;
  height: 3px;
  background-color: #17a2b8;
  margin: 0 auto;
  margin-top:-5px
}

</style>