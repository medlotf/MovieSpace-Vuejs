<template>
  <b-card
    bg-variant="dark"
    header-class="card_header"
    :header="concatNameDate(movie.name, movie.date)"
    text-variant="white"
    class="text-center"
    :img-src="movie.poster"
    img-height="500"
    img-top
  >
    <b-card-text class="desc">
      {{ partOfSynopsis(movie.synopsis) }}
    </b-card-text>
    <b-button variant="info"><RouterLink style="color: inherit;text-decoration: none;" :to="`/Movie/${i}`" >More details</RouterLink></b-button>
  </b-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    i: Number,
    movie: Object
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setMovie"]),
    selectMovie(){
      this.setMovie(this.movie);
    },
    concatNameDate(nm, dt){
      return nm+" "+dt;
    },
    partOfSynopsis(s){
      return s.slice(0,90)+"...";
    }
  },
  computed: {
    ...mapState(["Movie"])
  }
};
</script>

<style>
.card_header {
  font-size: 20px;
  font-weight: bold;
}
.desc {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
</style>
