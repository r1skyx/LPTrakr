<script setup>
	import ListCard from '../components/ListCard.vue'
	import LogoNavbar from '@/components/LogoNavbar.vue'

	// 		!TESTING DATA!
	import { useFetch } from '@vueuse/core'
	const { data, error, loading } = await useFetch('/example.json')
</script>

<template>
	<LogoNavbar />
	<main v-if="data && !loading">
		<ListCard v-bind="JSON.parse(data)[0]" />
		<ListCard v-bind="JSON.parse(data)[1]" />
	</main>
</template>
