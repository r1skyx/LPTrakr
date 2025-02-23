<script setup>
	import { ArrowRightIcon } from '@heroicons/vue/20/solid'
	import { defineProps } from 'vue'
	import ListCardItem from './ListCardItem.vue'
	const props = defineProps({
		title: String,
		/* data to be decided @todo
		Possibly:[
						{
						id: String,
							albumCover: String,
							linkTo: String,
							rating: [Number, null]
						}
					]
		*/
		data: Array,
		linkTo: String,
	})
</script>

<template>
	<div class="card card-dash bg-base-100 grid w-full md:w-1/2">
		<div class="card-body">
			<h2 class="card-title text-xl font-normal">{{ title }}</h2>
			<hr class="pb-2" />
			<div class="card grid-flow-row px-2">
				<div class="flex w-full flex-row flex-wrap justify-between">
					<ListCardItem v-for="(album, i) in data" :key="i" v-bind="album" />
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
