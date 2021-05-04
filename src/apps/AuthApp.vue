<template>
  <pp-container>
    <pp-row>
      <pp-col>
        <div ref="react-auth" />
      </pp-col>
    </pp-row>
  </pp-container>
</template>

<script>
import { mount as authMount } from "auth/AuthApp";

export default {
  name: "AuthApp",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {
    const ref = this.$refs["react-auth"];
    const $location = window.location;
    const $router = this.$router;

    const { onParentNavigate } = authMount(ref, {
      initialPath: window.location.pathname,
      onNavigate: function ({ pathname: nextPathname }) {
        const { pathname: currentPathName } = $location;

        if (currentPathName !== nextPathname) {
          $router.push(nextPathname);
        }
      },
      onSignIn: () => {
        $router.push("/dashboard");
      },
    });

    window.onpopstate = onParentNavigate;
  },
};
</script>