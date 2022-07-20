<template>
  <!-- <div class="w3-row">
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
  </div> -->
  <div class="w3-row">
    <div class="w3-col w3-container m4 w3-amber">
      <p>Users:</p>
    </div>
    <div class="w3-col w3-container m1 w3-dark-gray">
      <p>☂️</p>
    </div>
    <div class="w3-col w3-container m1 w3-yellow">
      <p>M</p>
    </div>
    <div class="w3-col w3-container m1 w3-yellow">
      <p>T</p>
    </div>
    <div class="w3-col w3-container m1 w3-yellow">
      <p>W</p>
    </div>
    <div class="w3-col w3-container m1 w3-orange">
      <p>Th</p>
    </div>
    <div class="w3-col w3-container m1 w3-yellow">
      <p>F</p>
    </div>
    <div class="w3-col w3-container m1 w3-yellow">
      <p>Sa</p>
    </div>
    <div class="w3-col w3-container m1 w3-yellow">
      <p>Su</p>
    </div>
  </div>

  <div v-for="item in items" :key="item.employeeID">
    <UserData :data="item" />
  </div>

  <div class="w3-row">
    <div class="w3-col w3-container m4 w3-blue-gray">
      <p>Total Coverage</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-red">
      <p>☀️</p>
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
  <div class="w3-row">
    <div class="w3-col w3-container m4 w3-blue-gray"><p>&nbsp;</p></div>
    <div class="w3-col w3-container m1 w3-pale-red">
      <p>☁️</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>2</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>2</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>2</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>2</p>
    </div>
  </div>
  <div class="w3-row">
    <div class="w3-col w3-container m4 w3-blue-gray"><p>&nbsp;</p></div>
    <div class="w3-col w3-container m1 w3-pale-red">
      <p>🌗</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>2</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>2</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>0</p>
    </div>
    <div class="w3-col w3-container m1 w3-pale-green">
      <p>0</p>
    </div>
  </div>
</template>

<script>
import UserData from "../Components/Home/UserData.vue";
// @ is an alias to /src

export default {
  components: { UserData },
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
