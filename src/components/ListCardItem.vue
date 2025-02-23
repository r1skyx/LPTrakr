<script setup>
	import { defineProps } from 'vue'
	import StarRating from './StarRating.vue'
	import { getImageUrl } from '@/composables/useImageURL'

	const props = defineProps({
		id: String,
		//data to be decided @todo
		albumCover: String,
		linkTo: String,
		rating: Number || null,
	})
</script>

<template>
	<div class="flex flex-col items-center">
		<router-link :to="linkTo">
			<img class="size-24 pb-2 md:size-46" :src="getImageUrl(albumCover)" />
		</router-link>
		<StarRating v-show="rating !== null && rating !== undefined" :rating="rating" />
	</div>
</template>
