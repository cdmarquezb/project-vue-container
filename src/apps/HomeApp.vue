<template>
  <div ref="react-home" />
</template>

<script>
import { mount as homeMount } from "home/HomeApp";

export default {
  name: "HomeApp",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {
    const ref = this.$refs["react-home"];
    const $location = window.location;
    const $router = this.$router;

    const { onParentNavigate } = homeMount(ref, {
      initialPath: window.location.pathname,
      onNavigate: function ({ pathname: nextPathname }) {
        const { pathname: currentPathName } = $location;
        console.log(nextPathname);
        console.log(currentPathName);

        if (currentPathName !== nextPathname) {
          $router.push(nextPathname);
        }
      },
    });

    window.onpopstate = onParentNavigate;
  },
};
</script>