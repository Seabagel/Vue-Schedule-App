<template>
  <div class="w3-row">
    <div class="w3-col w3-container m4 w3-amber">
      <p>Users:</p>
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
export default {
  setup() {
    const _days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return {
      days: _days,
    };
  },
};
</script>
