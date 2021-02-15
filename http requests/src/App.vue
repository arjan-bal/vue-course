<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<div class="form-group">
					<label> Username </label>
					<input class="form-control" type="text" v-model="user.username" />
				</div>
				<div class="form-group">
					<label> Email </label>
					<input class="form-control" type="text" v-model="user.email" />
				</div>
				<button class="button button-primary" @click="submit">Submit</button>
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
		};
	},
	methods: {
		submit: async () => {
			const response = await this.$http.post(
				"https://vue-course-5eaa3-default-rtdb.firebaseio.com/data.json",
				this.user
			);
			console.log(response);
		},
	},
};
</script>

<style></style>
