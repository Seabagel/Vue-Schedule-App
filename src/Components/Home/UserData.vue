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
      <div
        class="w3-col w3-container m3 w3-light-blue clickable"
        @click="data.schedules[index][0] == 'Hello'"
      >
        <p v-if="data.schedules[index][0] == true">👍</p>
        <p v-if="data.schedules[index][0] != true">X</p>
      </div>
      <div class="w3-col w3-container m1 w3-blue clickable">
        <p v-if="data.schedules[index].includes(true)">👍</p>
        <p v-if="!data.schedules[index].includes(true)">X</p>
      </div>
      <div class="w3-col w3-container m3 w3-light-blue clickable">
        <p v-if="data.schedules[index][1] == true">👍</p>
        <p v-if="data.schedules[index][1] != true">X</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "UserData",
  props: {
    data: Object,
  },
  setup(props) {
    const data = computed(() => props.data);

    return {
      data,
      icons: ["☀️", "☁️", "🌗"],
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
</style>
