const app = new Vue({
  el: "#assignment",
  data() {
    return {
      tasks: [],
      currentTask: "",
      listHidden: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
    },
    toggleListVisibility() {
      this.listHidden ^= true;
    },
  },
});
