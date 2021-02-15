<template>
  <div class="container">
    <h1>Quotes Added</h1>
    <app-header :progress="progressPercent"></app-header>
    <app-new-quote-component @quoteAdded="addQuote"> </app-new-quote-component>
    <app-quote-grid
      :quotes="quotes"
      @deleteQuote="deleteQuote"
    ></app-quote-grid>
    <div class="col-sm-12 text-center">
      <div class="alert alert-info">Info: Click on a quote to delete it</div>
    </div>
  </div>
</template>

<script>
import QuotesGrid from "./components/quotesGrid.vue";
import NewQuote from "./components/newQuote.vue";
import Header from "./components/header.vue";

export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ["I'm a quote", "I'm not a quote"],
    };
  },
  components: {
    appQuoteGrid: QuotesGrid,
    appNewQuoteComponent: NewQuote,
    appHeader: Header,
  },
  methods: {
    addQuote(newQuote) {
      if (this.quotes.length >= 10) {
        return alert("Remove quotes before adding any more");
      }
      this.quotes.push(newQuote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    },
  },
  computed: {
    progressPercent() {
      return this.quotes.length * 10;
    },
  },
};
</script>

<style></style>
