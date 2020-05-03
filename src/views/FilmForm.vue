<template>
  <div style="background-color: white;color: #181718;">
    <b-container>
      <b-form @submit.prevent="handleSubmit" class="pt-4" style="text-align: left;font-size: 20px;padding-bottom: 40px;">
        <b-row class="my-1">
          <b-col sm="4">
            <label>Titre du film:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input v-model.trim="Movie.name" type="text" required placeholder="Enter le titre du film"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Date de sortie:</label>
          </b-col>
          <b-col sm="8">
            <b-form-select v-model.number="Movie.date" :options="dates" required ></b-form-select>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Langue:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input v-model.trim="Movie.langue" type="text" required placeholder="Enter la langue du film"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Genre:</label>
          </b-col>
          <b-col sm="8">
            <b-form-select v-model.trim="Movie.genre" :options="Categories" required ></b-form-select>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Réalisateur:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input v-model.trim="reali.nom" type="text" required placeholder="Enter le nom du réalisateur" ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label> </label>
          </b-col>
          <b-col sm="8">
            <b-form-input type="text" v-model.trim="reali.nationalite" required placeholder="Enter la nationalité du réalisateur" ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label> </label>
          </b-col>
          <b-col sm="8">
            <b-form-datepicker type="text" v-model.trim="reali.birthday" required placeholder="Enter la date de naissance du réalisateur"></b-form-datepicker>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Rating:</label>
          </b-col>
          <b-col sm="8">
            <b-form-rating show-value v-model.number="Movie.rating" variant="warning" id="input-8" size="md"></b-form-rating>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Synopsis du film:</label>
          </b-col>
          <b-col sm="8">
            <b-form-textarea required v-model="Movie.synopsis" placeholder="Enter le Synopsis du film"></b-form-textarea>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label>Poster du film : <i>(Preview à droit après la saisie de l'url)</i></label>
          </b-col>
          <b-col sm="4">
            <b-form-input type="url" v-model="Movie.poster" required placeholder="Enter l'url du poster du film "
            ></b-form-input>
          </b-col>
          <b-col sm="4">
            <b-card overlay :img-src="Movie.poster" img-height="500" img-alt="Image" img-top border-variant="light" >
          </b-card>
          </b-col>
        </b-row>
        <b-card class="col-md-12 mt-4 footerBg">
          <RouterLink to="/" class="btn btn-info float-left text-light"> Revenir à la liste </RouterLink>
          <b-button type="submit" class="float-right mr-4 pl-5 pr-5 text-light btn btn-success">Valider</b-button>
        </b-card>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      dates: [],
      editForm:false,
      reali:{
        nom: "",
        nationalite: "",
        birthday: ""
      }
    };
  },
  methods: {
    ...mapActions(["setMovie","addFilm","updateFilm"]),
    handleSubmit() {
      let valid=0;
      if(this.Movie.rating===undefined){
        this.makeToast('Merci de noter le film',valid,"danger");
        valid++;
      }
      if(this.Movie.synopsis.length <= 90){
        this.makeToast('Synopsis doit contenir au moins 90 caractères',valid,"danger");
        valid++;
      }
      if(valid===0){
        this.Movie.realisateur = this.reali;
        if(this.editForm){
          this.makeToast("Mise à jour du film avec succes",1,"success");
          this.updateFilm({mv: this.Movie, id: this.$route.params.id});
        }else{
          this.makeToast("Ajout du film avec succes",1,"success");
          this.addFilm(this.Movie);
          this.setMovie(-1);
          this.reali = {};
        }
      }
    },
    dateDeSortie() {
      for (let index = 2020; index >=1980; index--) {
        this.dates.push(index);
      }
    },
    makeToast(msg,delay,variant) {
      this.$bvToast.toast(msg, {
        title: `Formulaire`,
        variant: variant,
        autoHideDelay: 2500+ 1500*delay
      })
    }
  },
  computed: {
    ...mapState(["Movie","Categories"])
  },
  mounted() {
    if(this.$route.name==="AddMovie"){
      this.setMovie(-1);
    }else{
      this.reali = this.Movie.realisateur;
      this.editForm=true;
    }
    this.dateDeSortie();
  }
};
</script>
<style>
  .footerBg{
    background-color: #2c3e50;
  }
</style>