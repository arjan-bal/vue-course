<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="server">
      <p>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
      <hr />
      <button @click="resetServer">Change status to Normal</button>
    </div>
    <p v-else>No server is currently selected</p>
    <p></p>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data() {
    return {
      server: null,
    };
  },
  created() {
    serverBus.$on("serverWasSelected", (server) => {
      this.server = server;
    });
  },
  methods: {
    resetServer() {
      serverBus.$emit("serverWasReset", this.server.id);
    },
  },
};
</script>

<style></style>
