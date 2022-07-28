<template>
  <div v-for="(icon, index) in icons" :key="index">
    <div class="w3-row">
      <div class="w3-col w3-container m4 w3-lime">
        <p v-if="index == 0">{{ data.username }}</p>
        <p v-if="index > 0">&nbsp;</p>
      </div>
      <div class="w3-col w3-container m1 w3-deep-orange">
        <p>{{ icon }}</p>
      </div>
      <div class="w3-rest w3-container">
        <div
          class="w3-half w3-container w3-light-blue clickable"
          @click="toggleSchedule(index, 0)"
        >
          <p v-if="data.schedules[index][0] == true"><strong>👍</strong></p>
          <p v-if="data.schedules[index][0] != true"><strong>X</strong></p>
        </div>
        <div
          class="w3-half w3-container w3-khaki clickable"
          @click="toggleSchedule(index, 1)"
        >
          <p v-if="data.schedules[index][1] == true"><strong>👍</strong></p>
          <p v-if="data.schedules[index][1] != true"><strong>X</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  props: {
    data: Object,
  },
  setup(props) {
    const store = useStore();

    function toggleSchedule(_schedule, _biWeekly) {
      store.dispatch("actScheduleMorning", {
        employeeID: props.data.employeeID,
        schedule: _schedule,
        biWeekly: _biWeekly,
      });
    }

    return {
      data: computed(() => props.data),
      icons: ["☀️", "☁️", "🌗"],
      toggleSchedule,
    };
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
.clickable:hover {
  filter: brightness(115%);
}

div .w3-rest {
  padding: 0;
}
</style>
