<template>
  <pp-container>
    <pp-row>
      <pp-col>
        <div ref="vue-3-dashboard" />
      </pp-col>
    </pp-row>
  </pp-container>
</template>

<script>
import { mount } from "dashboard/DashboardApp";

export default {
  name: "DashboardApp",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {
    const el = this.$refs["vue-3-dashboard"];

    mount(el);
  },
};
</script>