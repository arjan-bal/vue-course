<template>
  <div class="row">
    <server-list-component> </server-list-component>
    <server-status-component> </server-status-component>
  </div>
</template>

<script>
import ServerListComponentVue from "./ServerListComponent.vue";
import ServerStatusComponentVue from "./ServerStatusComponent.vue";

export default {
  components: {
    "server-status-component": ServerStatusComponentVue,
    "server-list-component": ServerListComponentVue,
  },
};
</script>
