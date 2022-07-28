<template>
  <table-header :title="'Total Coverage'" />

  <div
    v-for="(icon, index) in icons"
    :key="index"
    :class="[index % 2 ? '' : 'darker-shade']"
  >
    <div class="w3-row">
      <div class="w3-col w3-container m4 w3-dark-gray">
        <p>&nbsp;</p>
      </div>
      <div class="w3-col w3-container m1 w3-pale-red">
        <p>{{ icon }}</p>
      </div>
      <div class="w3-col w3-container m1 w3-light-blue">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-light-blue">
        <p>1</p>
      </div>
      <div class="w3-col w3-container m1 w3-light-blue">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-orange">
        <p>2</p>
      </div>
      <div class="w3-col w3-container m1 w3-khaki">
        <p>1</p>
      </div>
      <div class="w3-col w3-container m1 w3-khaki">
        <p>0</p>
      </div>
      <div class="w3-col w3-container m1 w3-khaki">
        <p>1</p>
      </div>
    </div>
  </div>
</template>

<script>
import TableHeader from "./TableHeader.vue";
export default {
  components: { TableHeader },
  name: "TotalCoverage",
  setup(props) {
    return {
      icons: ["☀️", "☁️", "🌗"],
    };
  },
};
</script>

<style scoped>
* {
  user-select: none;
}
.darker-shade {
  filter: hue-rotate(-20deg) brightness(96%) saturate(96%);
}
</style>
