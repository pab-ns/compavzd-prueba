import Firebase from "firebase";

export const courseModule = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_COURSE_DATA(state, newCourseData) {
      state.data = newCourseData;
    },
  },
  actions: {
    getAllCourses(context) {
      Firebase.firestore()
        .collection("cursos")
        .get()
        .then((documents) => {
          const courses = [];
          documents.forEach((document) => {
            courses.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_COURSE_DATA", courses);
        });
    },
  },
  getters: {
    alumnosInscritos(state) {
      return state.data.reduce((accumulator, data) => {
        accumulator = accumulator + data.inscritos;

        return accumulator;
      }, 0);
    },
  },
};
