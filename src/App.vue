<script setup lang="ts">
import SetCard from './components/SetCard.vue'
import RestCard from './components/RestCard.vue'
import CurrentCard from './components/CurrentCard.vue'
import Controls from './components/Controls.vue'
</script>

<template>
	<div class="container-fluid">
		<div class="set-container">
			<CurrentCard title="Exercise 1" rep="1" set="1"/>
			<SetCard title="Exercise 1" rep-count="3" set="1"/>
			<RestCard/>
			<SetCard title="Exercise 2" rep-count="5" set="2"/>
			<RestCard/>
			<SetCard title="Exercise 3" rep-count="10" set="3"/>
		</div>
		<Controls class="controls fixed-bottom" />
	</div>
</template>

<style scoped>
.set-container {
	min-height: 100vh;
}
</style>
