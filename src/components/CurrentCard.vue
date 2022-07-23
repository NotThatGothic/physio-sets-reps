<template>
	<div class="row my-3">
		<div class="col-10">
			<div class="card h-100">
				<div class="card-header">
					<h2>{{ title }}</h2>
				</div>
				<div class="card-body d-flex flex-column align-items-center">
					<div class="row w-100 mb-3">
						<div class="col">
							<span class="">Rep: {{ rep }} </span>
						</div>
						<div class="col">
							<span class="">Set: {{ set }} </span>
						</div>
					</div>
					<div class="row w-100">
						<div class="col-12">
							<div class="progress">
								<div class="progress-bar progress-bar-striped bg-success" role="progressbar"
									aria-label="Success striped example" style="width: 25%" aria-valuenow="25"
									aria-valuemin="0" aria-valuemax="100"></div>
							</div>
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
		rep: Number,
		set: Number,
	}
}
</script>