<template>
  <li>
    <p @click="selectServer">Server {{ server.id }}</p>
  </li>
</template>
<script>
import { serverBus } from "../../main";
export default {
  props: ["server"],
  methods: {
    selectServer() {
      serverBus.$emit("serverWasSelected", this.server);
    },
  },
};
</script>
