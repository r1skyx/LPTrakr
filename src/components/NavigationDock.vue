<script setup>
	import { HomeIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/20/solid'
</script>

<template>
	<div class="dock dock-xl">
		<button class="flex justify-center align-middle">
			<HomeIcon class="text-accent size-10" />
			<span class="dock-label">Home</span>
		</button>
		<button class="flex justify-center align-middle">
			<MagnifyingGlassIcon class="size-10" />
			<span class="dock-label">Explore</span>
		</button>
		<button class="flex justify-center align-middle">
			<UserCircleIcon class="size-10" />
			<span class="dock-label">Profile</span>
		</button>
	</div>
</template>
