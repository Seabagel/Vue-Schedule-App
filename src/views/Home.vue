<template>
  <div class="w3-row">
    <div class="w3-col m1 w3-center w3-grey">1</div>
    <div class="w3-col m1 w3-center">2</div>
    <div class="w3-col m1 w3-center w3-grey">3</div>
    <div class="w3-col m1 w3-center">4</div>
    <div class="w3-col m1 w3-center w3-grey">5</div>
    <div class="w3-col m1 w3-center">6</div>
    <div class="w3-col m1 w3-center w3-grey">7</div>
    <div class="w3-col m1 w3-center">8</div>
    <div class="w3-col m1 w3-center w3-grey">9</div>
    <div class="w3-col m1 w3-center">10</div>
    <div class="w3-col m1 w3-center w3-grey">11</div>
    <div class="w3-col m1 w3-center">12</div>
  </div>

  <div class="w3-row">
    <div class="w3-col w3-container l5 w3-blue-gray">
      <p>Total Coverage</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
    <div class="w3-col w3-container l1 w3-blue">
      <p>Day.count</p>
    </div>
  </div>
  <div class="w3-row">
    <div class="w3-col w3-container l4 w3-red">
      <p>Users:</p>
    </div>
    <div class="w3-col w3-container l1 w3-teal">
      <p>Shift.icon</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>M</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>T</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>W</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>Th</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>F</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>Sa</p>
    </div>
    <div class="w3-col w3-container l1 w3-yellow">
      <p>Su</p>
    </div>
  </div>

  <!-- <div v-for="item in items" :key="item.employeeID">
    <user-data :userData="item"></user-data>
  </div> -->
  <user-data :userData="items[0]"></user-data>
</template>

<script>
import UserData from "../Components/Home/UserData.vue";
// @ is an alias to /src

export default {
  components: { UserData },
  name: "Home",
  data() {
    return {
      items: [
        {
          username: "Angelo",
          employeeID: "41323",
          startDate: "4/12/21",
          mornings: "010111",
          swing: "110011",
          grave: "100000",
        },
      ],
    };
  },
};
</script>
