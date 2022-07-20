<template>
  <div v-for="(icon, index) in icons" :key="index">
    <div class="w3-row">
      <div class="w3-col w3-container m4 w3-blue-gray">
        <p v-if="index == 0">Total Coverage</p>
        <p v-if="index > 0">&nbsp;</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-red">
        <p>{{ icon }}</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-green">
        <p>0</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-green">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-green">
        <p>0</p>
      </div>
      <div class="w3-col w3-container m1 w3-green">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-green">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-green">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-green">
        <p>2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalCoverage",
  setup(props) {
    return {
      icons: ["☀️", "☁️", "🌗"],
    };
  },
};
</script>
