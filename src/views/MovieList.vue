<template>
  <b-container>

    <div class="searchDiv">
      <b-nav-form inline class="pt-4">
        <b-dropdown size="lg" class="m-2" split text="Type de recherche" split-variant="info" variant="info">
          <b-dropdown-item-button @click="selectDropDown('titre')">Titre du film</b-dropdown-item-button>
          <b-dropdown-item-button @click="selectDropDown('annee')">Année de sortie du film</b-dropdown-item-button>
          <b-dropdown-item-button @click="selectDropDown('realisateur')">Réalisateur du film</b-dropdown-item-button>
        </b-dropdown>
        <b-form-input v-model="textRecherche" size="lg" class="ml-4 mr-2 txtRech" id="__BVID__15" placeholder="Taper votre texte ici ..."></b-form-input>
        <b-button size="lg" class="my-2 ml-4 btnRech" variant="info" @click="afficherResultat">Recherche</b-button>
        <b-button size="sm" class="my-2 ml-4" variant="warning" v-show="textRecherche != '' && submited " @click="annulerRecherche">Annuler</b-button>
      </b-nav-form>
    </div>

    <div class="row pt-4">
      <div class="col-md-4 mb-5 mt-3" v-for="(movie, i) in MoviesToDisplay" :key="i">
        <MovieCard :movie="movie" :i="getMovieId(movie)" />
      </div>
    </div>
    <div class="page">

    </div>

  </b-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MovieCard from "@/components/MovieCard.vue";
export default {
  components: {
    MovieCard
  },
  data() {
    return {
      MoviesToDisplay: [],
      typeSearch:"",
      textRecherche: "",
      submited: false
    };
  },
  methods: {
    getMovieId(m){
      return this.Movies.indexOf(m);
    },
    selectDropDown(t){
      this.typeSearch = t;
    },
    afficherResultat(){
      let searchMode=this.typeSearch;
      let searchText=this.textRecherche;
      let valid=0;
      if (searchMode==""){
        this.Message("Vous devez sélectionner un type de recherche");
        valid++;
      }
      if (searchMode=="annee" && isNaN(searchText)){
        this.Message("Type de recherche est 'Année', vous devez saisir une année dans la recherche");
        valid++;
      }
      if (searchMode!="" && searchText==""){
        this.Message("Entrer un text dans la recherche");
        valid++;
      }
      if (!valid){
        this.search(searchMode, searchText);
        this.MoviesToDisplay = this.SearchTab
        this.submited = true;
      }
    },
    annulerRecherche(){
      this.MoviesToDisplay=this.Movies;
      this.typeSearch="";
      this.textRecherche="";
      this.submited=false;
    },
    Message(txt){
      this.$bvToast.toast(txt, {
        title: `Formulaire de Recherche`,
        variant: "danger",
        autoHideDelay: 2000
      });
    }
  },
  computed: {
    ...mapState(["Movies", "SearchTab"]),
    ...mapGetters(["search"])
  },
  mounted() {
    this.MoviesToDisplay = this.Movies;
  }
};
</script>
<style>
input.txtRech {
  background-color: white;
  color: black;
  font-weight: bold;
  padding-right: 66px;
  border-color: white;
}
input.txtRech::placeholder{
  color: black;
}

button.btnRech,button.btnRech:hover,button.btnRech:active{
  width: 250px;
  font-weight: bold;
}

.searchDiv{
  margin-top:20px;
  padding-bottom: 2.5%;
  padding-left: 9.5%;
}

button#__BVID__11__BV_button_,button#__BVID__11__BV_toggle_ {
  font-weight: bold;
}
</style>