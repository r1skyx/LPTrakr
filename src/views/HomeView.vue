<script setup>
	import ListCard from '../components/ListCard.vue'
	// 		!TESTING DATA!
	const ListenedListCardData = {
		title: 'Recently listened',
		data: [
			{
				id: 'asdnj3FDkeFM',
				// <!-- Placeholder img @todo -->
				albumCover: 'album-cover.webp',
				linkTo: '/user/review/:id',
				rating: 4,
			},
			{
				id: 'asdnj3FDkeFM',
				albumCover: 'album-cover.webp',
				linkTo: '/user/review/:id',
				rating: 2,
			},
			{
				id: 'asdnj3FDkeFM',
				albumCover: 'album-cover.webp',
				linkTo: '/user/review/:id',
				rating: null,
			},
		],
		linkTo: '/user/reviews',
	}
	const ToListenListCardData = {
		title: 'On your listening list',
		data: [
			{
				id: 'asdnj3FDkeFM',
				// <!-- Placeholder img @todo -->
				albumCover: 'album-cover.webp',
				linkTo: '/user/review/:id',
			},
			{
				id: 'asdnj3FDkeFM',
				albumCover: 'album-cover.webp',
				linkTo: '/user/review/:id',
			},
			{
				id: 'asdnj3FDkeFM',
				albumCover: 'album-cover.webp',
				linkTo: '/user/review/:id',
			},
		],
		linkTo: '/user/reviews',
	}
</script>

<template>
	<main>
		<ListCard v-bind="ListenedListCardData" />
		<ListCard v-bind="ToListenListCardData" />
	</main>
</template>
