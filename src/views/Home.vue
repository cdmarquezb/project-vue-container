<template>
  <pp-container>
    <pp-row>
      <pp-col>
        <h1>Home</h1>
      </pp-col>
    </pp-row>
    <pp-row>
      <pp-col>
        <p>The home view</p>
      </pp-col>
    </pp-row>
    <pp-row>
      <pp-col>
        <HomeApp />
      </pp-col>
    </pp-row>
  </pp-container>
</template>

<script>
import HomeApp from "../apps/HomeApp";

console.log("home!!!");
export default {
  name: "ViewsHome",
  components: {
    HomeApp,
  },
  props: {},
  data() {
    return {};
  },
};
</script>