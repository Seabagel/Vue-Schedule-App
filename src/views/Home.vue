<template>
  <div class="contain">
    <table-sizes />

    <table-header :title="'Users'" />

    <div v-for="item in items" :key="item.employeeID">
      <user-data :data="item" />
    </div>

    <total-coverage />
  </div>
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
  setup() {
    const store = useStore();
    return {
      items: computed(() => store.getters.getAllUsers),
    };
  },
};
</script>

<style scoped>
* {
  user-select: none;
}

div.contain {
  min-width: 720px;
  width: 90vw;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
