<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link tag="a" to="/" active-class="active" class="navbar-brand"
				>Stock Trader</router-link
			>

			<div class="collapse navbar-collapse">
				<ul class="navbar-nav mr-auto">
					<router-link
						tag="li"
						to="/stocks"
						active-class="active"
						class="nav-item"
					>
						<a class="nav-link">Stocks</a>
					</router-link>
					<router-link
						tag="li"
						to="/portfolio"
						active-class="active"
						class="nav-item"
					>
						<a class="nav-link">Portfolio</a>
					</router-link>
				</ul>
				<strong class="navbar-text navbar-right">Funds: {{ funds }} </strong>
				<ul class="navbar-nav navbar-right">
					<li class="nav-item" @click="randomizeStocks">
						<a class="nav-link pointer-link">End Day</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							@click="isDropdownOpen = !isDropdownOpen"
						>
							Save and Load
						</a>
						<div
							class="dropdown-menu"
							:class="{ show: isDropdownOpen }"
							aria-labelledby="navbarDropdown"
						>
							<a class="dropdown-item pointer-link" @click="loadData"
								>Load data</a
							>
							<a class="dropdown-item pointer-link" @click="saveData"
								>Save data</a
							>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	data() {
		return {
			isDropdownOpen: false,
		};
	},
	computed: {
		funds() {
			return this.$store.getters.funds;
		},
	},
	methods: {
		...mapActions(["randomizeStocks", "loadData"]),
		async saveData() {
			const data = {
				funds: this.funds,
				portfolio: this.$store.getters.stockPortfolio,
				stocks: this.$store.getters.stocks,
			};
			// console.log(data);
			await this.$http.put("", data);
			// console.log(result);
		},
	},
};
</script>

<style scoped>
.pointer-link {
	cursor: pointer;
}
</style>
