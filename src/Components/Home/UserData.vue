<template>
  <div
    v-for="(icon, index) in icons"
    :key="index"
    :class="[_index % 2 ? '' : 'darker-shade']"
  >
    <div class="w3-row">
      <div class="w3-col w3-container m4 w3-gray">
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
    _index: Number,
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
      _index: computed(() => props._index),
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
.darker-shade {
  filter: hue-rotate(-12deg) brightness(92%) saturate(99%);
}
</style>
