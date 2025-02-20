<script setup>
	import { ArrowRightIcon } from '@heroicons/vue/20/solid'
	import { defineProps } from 'vue'
	const props = defineProps({
		title: String,
		//data to be decided @todo
		data: Object,
		linkTo: String,
	})
</script>

<template>
	<div class="card card-dash bg-base-100 w-96">
		<div class="card-body">
			<h2 class="card-title">{{ title }}</h2>
			<div class="card">
				<div class="flex w-full flex-row flex-wrap justify-between">
					<!-- Placeholder img @todo -->
					<img
						class="size-24"
						v-for="(album, i) in [1, 2, 3]"
						:key="i"
						src="../assets/images/album-cover.webp"
					/>
				</div>
			</div>
			<div class="card-actions justify-end">
				<button class="btn btn-ghost btn-square">
					<router-link :to="linkTo">
						<ArrowRightIcon class="size-8 text-white" />
					</router-link>
				</button>
			</div>
		</div>
	</div>
</template>
