<template>
  <div class="container">
    <header-component> </header-component>
    <hr />
    <server-details-component> </server-details-component>
    <hr />
    <footer-component> </footer-component>
  </div>
</template>

<script>
import FooterComponentVue from "./components/FooterComponent.vue";
import HeaderComponentVue from "./components/HeaderComponent.vue";
import ServerDetailsComponentVue from "./components/ServerDetailsComponent.vue";

export default {
  components: {
    "header-component": HeaderComponentVue,
    "footer-component": FooterComponentVue,
    "server-details-component": ServerDetailsComponentVue,
  },
};
</script>

<style></style>
