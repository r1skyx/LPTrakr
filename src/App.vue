<script setup>
	import { RouterView } from 'vue-router'
	import NavigationDock from './components/NavigationDock.vue'
</script>

<template>
	<Suspense>
		<RouterView />
	</Suspense>
	<NavigationDock />
</template>

<style scoped></style>
