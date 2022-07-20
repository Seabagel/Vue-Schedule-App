<template>
  <table-sizes />

  <table-header />

  <div v-for="item in items" :key="item.employeeID">
    <user-data :data="item" />
  </div>

  <total-coverage />
</template>

<script>
import TableHeader from "../Components/Home/TableHeader.vue";
import TableSizes from "../Components/Home/TableSizes.vue";
import TotalCoverage from "../Components/Home/TotalCoverage.vue";
import UserData from "../Components/Home/UserData.vue";
import jsonData from "../store/data.json";
// @ is an alias to /src

export default {
  components: { UserData, TotalCoverage, TableHeader, TableSizes },
  name: "Home",
  setup() {
    return {
      items: jsonData,
    };
  },
};
</script>

<style scoped>
* {
  user-select: none;
}
</style>
