export default {
  setMovie: ({ commit }, payload) => {
    commit("setMovieState", payload);
  },
  addFilm: ({ commit }, payload) => {
    commit("addNewFilm", payload);
  },
  dropFilm: ({ commit }, payload) => {
    commit("deleteFilm", payload);
  },
  updateFilm: ({ commit }, payload) => {
    commit("putFilm", payload);
  }
};
