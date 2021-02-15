<template>
	<div class="col-sm-6 col-md-4">
		<div class="card">
			<div class="card-header">
				{{ stock.name }} <small>(Price: {{ stock.price }})</small>
			</div>
			<div class="card-body">
				<div class="row justify-content-around">
					<div class="col-md-5">
						<input
							type="number"
							class="form-control"
							placeholder="Quantity"
							v-model="quantityString"
						/>
						<br />
					</div>
					<div class="">
						<button
							type="button"
							class="btn btn-success"
							@click="buyStock"
							:disabled="
								quantity <= 0 ||
									!Number.isInteger(quantity) ||
									insufficientFunds
							"
						>
							{{ insufficientFunds ? "Insufficient funds" : "Buy" }}
						</button>
					</div>
				</div>
			</div>
		</div>
		<br />
	</div>
</template>

<script>
export default {
	props: ["stock"],
	data() {
		return {
			quantityString: 0,
		};
	},
	computed: {
		quantity() {
			return +this.quantityString;
		},
		insufficientFunds() {
			return this.quantity * this.stock.price > this.$store.getters.funds;
		},
	},
	methods: {
		buyStock() {
			const order = {
				stockId: this.stock.id,
				quantity: this.quantity,
				stockPrice: this.stock.price,
			};
			this.quantityString = 0;
			console.log(order);
			this.$store.dispatch("buyStock", order);
		},
	},
};
</script>
