<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      name: "Arjan",
    };
  },
  created() {
    eventBus.$on("nameWasChanged", (name) => {
      this.name = name;
    });
  },
  methods: {
    resetName() {
      this.name = "Arjan";
      eventBus.$emit("nameWasReset", this.name);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
