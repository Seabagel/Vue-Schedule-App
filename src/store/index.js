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
    mutateScheduleMorning(state, _employeeID) {
      state.allUsers = [
        ...state.allUsers.map((user) => {
          // 👇️ if id equals _employeeID replace object
          if (user.employeeID === _employeeID) {
            user.schedules[0] = [false, false];
          }
          // 👇️ otherwise return object as is
          return user;
        }),
      ];
    },
  },
  actions: {
    async actScheduleMorning({ commit }, _employeeID) {
      commit("mutateScheduleMorning", _employeeID);
    },
  },
});
