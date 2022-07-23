<template>
	<div class="row my-3">
		<div class="col-10">
			<div class="card h-100">
				<div class="card-header">
					<h2>{{ title }}</h2>
				</div>
				<div class="card-body">
					<div class="row" v-for="(items) in 5" :key="index">
						<div class="col">
							<span class="">Rep: {{ items }} </span>
						</div>
						<div class="col">
							<span class="">Set: {{ set }} </span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<div class="btn-group-vertical">
				<a class="btn btn-lg rounded btn-outline-primary my-2">
					<font-awesome-icon icon="fa-solid fa-arrow-up" />
				</a>
				<a class="btn btn-lg rounded btn-outline-danger my-2">
					<font-awesome-icon icon="fa-solid fa-circle-xmark" />
				</a>
				<a class="btn btn-lg rounded btn-outline-primary my-2">
					<font-awesome-icon icon="fa-solid fa-arrow-down" />
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		title: String,
		repCount: Number,
		set: Number
	}
}
</script>