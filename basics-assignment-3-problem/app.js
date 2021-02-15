const vue = new Vue({
    el: "#assignment",
    data() {
        return {
            value: 0,
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.value = 0;
            }, 5000);
        }
    },
    methods: {
        add(delta) {
            this.value += delta;
        }
    },
    computed: {
        result() {
            if (this.value < 37) {
                return "Not there yet";
            } else if (this.value > 37) {
                return "Too much!";
            } else {
                return this.value;
            }
        }
    }
})