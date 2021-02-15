<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Http Practice</h1>
				<div class="form-group">
					<label> Username </label>
					<input class="form-control" type="text" v-model="user.username" />
				</div>
				<div class="form-group">
					<label> Email </label>
					<input class="form-control" type="text" v-model="user.email" />
				</div>
				<button class="button button-primary" @click="submit">Submit</button>
				<hr />
				<button class="button button-primary" @click="fetchData">Fetch</button>
				<br /><br />
				<ul class="list-group">
					<li
						class="list-group-item"
						v-for="user in users"
						:key="user.username"
					>
						{{ user.username }} - {{ user.email }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				username: "",
				email: "",
			},
			users: [],
		};
	},
	methods: {
		async submit() {
			const response = await this.$http.post("", this.user);
			console.log(response);
		},
		async fetchData() {
			const response = await this.$http.get("");
			this.users = [response.body];
			console.log(this.users);
		},
	},
};
</script>

<style></style>
