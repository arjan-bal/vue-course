<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="quote"
      @click.native="deleteQuote(index)"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import Quote from "./quote.vue";

export default {
  components: {
    appQuote: Quote,
  },
  props: ["quotes"],
  methods: {
    deleteQuote(index) {
      this.$emit("deleteQuote", index);
    },
  },
};
</script>

<style scoped></style>
