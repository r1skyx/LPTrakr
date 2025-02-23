<template>
	<div class="rating rating-xs">
		<input
			type="radio"
			disabled
			v-for="n in 5"
			:key="n"
			class="mask mask-star"
			:checked="n <= rating ? 'checked' : false"
		/>
	</div>
</template>

<script setup>
	//props needed for
	//  disabled: bool (false if viewing, true if on edit mode);
	defineProps({
		rating: Number,
	})
</script>

<style></style>
