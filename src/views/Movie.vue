<template>
  <div class="page">
    <div class="container">
      <div class="row text-dark pt-4" v-if="MessageApresSupp">
        <div class="col-md-4">
          <b-card
            overlay
            :img-src="Movie.poster"
            img-height="500"
            img-alt="Image"
            img-top
            border-variant="dark"
          >
          </b-card>
          <div class="rat">
            <b-form-rating class="form-rat" :value="Movie.rating" bg-variant="dark" variant="warning" readonly no-border size="lg"></b-form-rating>
          </div>
        </div>
        <div class="col-md-8">
          <h1 class="mb-4 text-light" style="font-weight: bold;text-transform: uppercase;">{{Movie.name}}</h1>
          <b-list-group style="text-align: left;">
            <b-list-group-item href="#">
              <div class="propList">Année de sortie:</div>
              <div class="detList text-light"> {{Movie.date}}</div>
            </b-list-group-item>
            <b-list-group-item href="#">
              <div class="propList">Genre:</div>
              <div class="detList text-light"> {{Movie.genre}}</div>
            </b-list-group-item>
            <b-list-group-item href="#">
              <div class="propList">Langue:</div>
              <div class="detList text-light"> {{Movie.langue}}</div>
            </b-list-group-item>
            <b-list-group-item href="#">
              <div class="propList">Réalisateur:</div>
              <div class="detList text-light"> {{ realisateur.nom}} ({{ realisateur.birthday }}) <br> {{ realisateur.nationalite }} </div>
            </b-list-group-item>
            <b-list-group-item href="#">
              <div class="propList">Synopsis:</div>
              <div style="text-align: justify;" class="detList text-light"> {{Movie.synopsis}}</div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <div class="row">
        <b-card class="col-md-12 my-5" bg-variant="dark" >
          <RouterLink to="/" class="btn btn-info float-left text-light">
            Revenir à la liste
          </RouterLink>
          <RouterLink
            v-if="MessageApresSupp"
            :to="`/Movie/${this.id}/Edit`"
            class="btn btn-info float-right pl-5 pr-5 text-light"
          >
            Editer
          </RouterLink>
            <b-button v-if="MessageApresSupp" class="btn btn-danger float-right mr-4 pl-5 pr-5 text-light" @click.prevent="del">Supprimer</b-button>
          <h2 class="text-light" v-if="!MessageApresSupp">Suppression du film avec success</h2>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      MessageApresSupp: true,
      id: null,
      realisateur:{}
    };
  },
  methods: {
    ...mapActions(["setMovie","dropFilm"]),
    del(){
      this.dropFilm(this.id);
      this.MessageApresSupp=false;
    }
  },
  computed: {
    ...mapState(["Movie","Movies"])
  },
  mounted() {
    this.id = this.$route.params.id;
    this.setMovie(this.id);
    this.realisateur = this.Movie.realisateur;
  }
};
</script>
<style>
  .rat{
    background-color: #343a40;
    border-radius:0px 0px 5px 5px ;
    margin-top: -3px;
  }
  .form-rat{
    background-color: #343a40;
  }
  .res{
    text-align: justify;
  }
 .list-group-item{
    background-color: #2c3e50;
  }
  .list-group-item:hover{
    background-color: #354758;
  }
  .propList{
    width:30%;
    float:left;
    font-weight:bold;
    color: white;
  }
  .detList{
    width: 68%;
    float: left;
  }
</style>
