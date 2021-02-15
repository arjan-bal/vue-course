<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>My name is {{ name }}</p>

    <button @click="changeName">Click to change my name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import { eventBus } from "../main";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data() {
    return {
      name: "Arjan",
    };
  },
  created() {
    eventBus.$on("nameWasReset", (data) => {
      this.name = data;
    });
  },
  methods: {
    changeName() {
      this.name = "Max";
      eventBus.$emit("nameWasChanged", this.name);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
