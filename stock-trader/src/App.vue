<template>
	<div>
		<app-header> </app-header>
		<div class="container">
			<div class="row">
				<div class="container-fluid">
					<br />
					<br />
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import headerComponent from "./components/Header.vue";
export default {
	components: {
		appHeader: headerComponent,
	},
	created() {
		this.$store.dispatch("initStocks");
	},
};
</script>

<style>
body {
	padding: 30px;
}
</style>
