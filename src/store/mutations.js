export default {
  setMovieState: (state, payload) => {
    state["Movie"] = state.Movies[payload];
    if (payload === -1) {
      state["Movie"] = {};
    }
  },
  addNewFilm: (state, payload) => {
    state["Movies"].push(payload);
  },
  deleteFilm: (state, payload) => {
    let mv = state.Movies[payload];
    state["Movies"] = state["Movies"].filter(
      m => state["Movies"].indexOf(mv) !== state["Movies"].indexOf(m)
    );
  },
  putFilm: (state, { mv, id }) => {
    let filmToUpdate = state["Movies"].find(
      m => state["Movies"].indexOf(m) === id
    );
    filmToUpdate.name = mv.name;
    filmToUpdate.poster = mv.poster;
    filmToUpdate.date = mv.date;
    filmToUpdate.langue = mv.langue;
    filmToUpdate.genre = mv.genre;
    filmToUpdate.rating = mv.rating;
    filmToUpdate.realisateur.nom = mv.realisateur.nom;
    filmToUpdate.realisateur.nationalite = mv.realisateur.nationalite;
    filmToUpdate.realisateur.birthday = mv.realisateur.birthday;
  }
};
