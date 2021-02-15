<template>
	<div>
		<h1>Trade or view your stock portfolio</h1>
		<h6>You can save and load your portfolio</h6>
		<h6>Click on End day to get new stock prices</h6>
		<hr />
		<p>Your funds: ${{ funds }}</p>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["funds"]),
	},
};
</script>
