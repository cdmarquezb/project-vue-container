<template>
  <pp-container>
    <pp-row>
      <pp-col>
        <h1>Dashboard App Module in Container</h1>
        useless-lib version: {{ version }}
      </pp-col>
    </pp-row>
    <pp-row>
      <pp-col>
        <div ref="vue-3-dashboard" />
      </pp-col>
    </pp-row>
  </pp-container>
</template>

<script>
import { mount } from "dashboard/DashboardApp";
import * as uselessLib from 'useless-lib';
import * as ppVuexWebServices from 'pp-vuex-web-services';

export default {
  name: "DashboardApp",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {
    const el = this.$refs["vue-3-dashboard"];
    console.log('CONTAINER: ppVuexWebServices', ppVuexWebServices)

    mount(el);
  },
  computed: {
    version() {
      return uselessLib.version;
    }
  }
};
</script>