<template>
  <div class="w3-row">
    <div class="w3-col w3-container m4 w3-amber">
      <p>
        <b>{{ title }}:</b>
      </p>
    </div>
    <div class="w3-col w3-container m1 w3-dark-gray">
      <p>☂️</p>
    </div>
    <div v-for="(day, index) in days" :key="index">
      <div class="w3-col w3-container m1 w3-yellow">
        <p>{{ days[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    title: String,
  },
  setup(props) {
    const _days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return {
      days: _days,
      title: computed(() => props.title),
    };
  },
};
</script>
