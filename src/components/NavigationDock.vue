<script setup>
	import { HomeIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/20/solid'
</script>

<template>
	<div class="dock dock-xl">
		<button>
			<HomeIcon class="text-accent size-10" />
			<span class="dock-label">Home</span>
		</button>
		<button>
			<MagnifyingGlassIcon class="size-10" />
			<span class="dock-label">Explore</span>
		</button>
		<button>
			<UserCircleIcon class="size-10" />
			<span class="dock-label">Profile</span>
		</button>
	</div>
</template>
