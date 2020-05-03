export default {
  //Fct permet de récupérer le resultat de recherche en fonction du type de recherche
  search: (state) => {
    return (type, txt) => {
      if(type=="titre"){
        state.SearchTab = state.Movies.filter( m => {
          return m.name === txt
        });
      }else if (type=="annee"){
        state.SearchTab = state.Movies.filter( m => {
          return m.date == txt
        });
      }else if (type=="realisateur"){
        state.SearchTab = state.Movies.filter( m => {
          return m.realisateur.nom == txt
        });
      }
    }
  },
  //Fct permet de récupérer le nombre de film d'une catégorie
  getCountCategorie: (state) => {
    return cat => {
      return state.Movies.filter( m => m.genre == cat).length
    }
  }
}
