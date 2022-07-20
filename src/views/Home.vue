<template>
  <table-sizes />

  <table-header />

  <div v-for="item in items" :key="item.employeeID">
    <user-data :data="item" />
  </div>

  <total-coverage />
  <button @click="actScheduleMorning">Whats upp</button>
</template>

<script>
import TableHeader from "../Components/Home/TableHeader.vue";
import TableSizes from "../Components/Home/TableSizes.vue";
import TotalCoverage from "../Components/Home/TotalCoverage.vue";
import UserData from "../Components/Home/UserData.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  components: { UserData, TotalCoverage, TableHeader, TableSizes },
  name: "Home",
  setup() {
    const store = useStore();
    return {
      items: computed(() => store.getters.getAllUsers),
      actScheduleMorning: () => store.dispatch("actScheduleMorning", 51323),
    };
  },
};
</script>

<style scoped>
* {
  user-select: none;
}
</style>
