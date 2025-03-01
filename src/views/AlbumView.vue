<script setup>
	import { useRoute } from 'vue-router'
	import { getExampleAlbumData } from '@/composables/useFetchExample'
	import { getImageUrl } from '@/composables/useImageURL'
	import dayjs from 'dayjs'
	const albumId = useRoute().params.id
	let example = await getExampleAlbumData(albumId)
</script>

<template>
	<div class="mx-auto mt-12 text-center">
		<img class="mx-auto size-65 pb-2 sm:size-80" :src="getImageUrl(example.albumCover)" />
		<h1 class="mt-4 text-2xl">{{ example.title }}</h1>
		<h2 class="text-primary text-xl">{{ example.artist.name }}</h2>
		<p class="mt-6 text-gray-500">
			{{ example.description ?? 'No description available for this release' }}
		</p>
		<p class="text-gray-500">
			Release:
			{{
				dayjs(example.wiki.published, 'YYYY-MM-DD')?.format('DD MMMM YYYY') ??
				'No date available for this release'
			}}
		</p>
	</div>
</template>
