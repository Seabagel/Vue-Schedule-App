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
// @ is an alias to /src

export default {
  components: { UserData, TotalCoverage, TableHeader, TableSizes },
  name: "Home",
  setup() {
    return {
      items: [
        {
          username: "Angelo",
          employeeID: "41323",
          schedules: [
            [0, 1],
            [1, 0],
            [1, 1],
          ],
        },
        {
          username: "Timothy",
          employeeID: "51323",
          schedules: [
            [1, 0],
            [1, 0],
            [0, 0],
          ],
        },
      ],
    };
  },
};
</script>
