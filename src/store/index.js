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
    // toggleUpvote
    // Given an employeeID, change the user's vote of schedule
  },
  actions: {},
});
