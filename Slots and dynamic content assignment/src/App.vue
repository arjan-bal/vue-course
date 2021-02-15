<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="changeColor('Blue')">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="changeColor('Green')">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="changeColor('Red')">
          Load Red Template
        </button>
        <hr />
        <component :is="selectedComponent">
          <p>Hello from the other side!</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
  data() {
    return {
      selectedComponent: "appRed",
    };
  },
  methods: {
    changeColor(color) {
      this.selectedComponent = "app" + color;
    },
  },
};
</script>

<style></style>
