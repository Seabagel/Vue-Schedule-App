import { createStore } from "vuex";
import jsonData from "./data.json";

export default createStore({
  state: {
    allUsers: jsonData,
  },
  getters: {
    getAllUsers(state) {
      return state.allUsers;
    },
  },
  mutations: {
    mutateScheduleMorning(state, params) {
      state.allUsers = [
        ...state.allUsers.map((user) => {
          // 👇️ if id equals params._employeeID replace object
          if (user.employeeID === params.employeeID) {
            user.schedules[params.schedule][params.biWeekly] =
              !user.schedules[params.schedule][params.biWeekly];
          }
          // 👇️ otherwise return object as is
          return user;
        }),
      ];
    },
    replaceAllUsers(state, params) {
      state.allUsers = params;
    },
  },
  actions: {
    async actScheduleMorning({ commit }, payload) {
      commit("mutateScheduleMorning", payload);
    },
    async actDBGetUsers({ commit }, payload) {
      commit("replaceAllUsers", payload);
    },
  },
});
