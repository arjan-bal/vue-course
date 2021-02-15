const app = new Vue({
  el: "#assignment",
  data() {
    return {
      className: "",
      isVisible: true,
      bgColor: "",
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible ^= true;
    },
  },
  computed: {
    classData() {
      return {
        user1: this.className === "user1",
        user2: this.className === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
    colorClass() {
      return {
        backgroundColor: this.bgColor,
      };
    },
  },
});
