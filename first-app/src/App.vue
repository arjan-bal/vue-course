<template>
<div>
  <app-server-status v-for="x in 5" :key="x"> </app-server-status>
</div>
</template>

<script>
import ServerStatus from "./components/home";

export default {
	components: {
		"app-server-status": ServerStatus
	}
}
</script>

<style>

</style>
