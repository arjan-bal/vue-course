const app = new Vue({
    el: "#assignment",
    data: {
        value: '',
    },
    methods: {
        showAlert() {
            alert("Button Pressed");
        },
        setValue() {
            this.value = event.target.value;
        }
    }
});