<script setup>
	// No special logic needed for now
</script>

<template>
	<div
		class="bg-base-100 text-base-content flex min-h-screen flex-col items-center justify-center p-6"
	>
		<h1 class="mb-6 text-4xl font-bold">DaisyUI Synthwave Theme Test</h1>
		<img src="/logo.svg" alt="" />
		<div class="mb-6 flex flex-wrap gap-4">
			<button class="btn btn-primary">Primary</button>
			<button class="btn btn-secondary">Secondary</button>
			<button class="btn btn-accent">Accent</button>
			<button class="btn btn-info">Info</button>
			<button class="btn btn-success">Success</button>
			<button class="btn btn-warning">Warning</button>
			<button class="btn btn-error">Error</button>
		</div>

		<div class="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
			<div class="card bg-base-200 p-6 shadow-xl">
				<h2 class="card-title">Card Title</h2>
				<p>This is a test card with base colors.</p>
			</div>

			<div class="alert alert-info">
				<span>Info Alert: Theme looks good!</span>
			</div>

			<div class="alert alert-success">
				<span>Success Alert: Everything is working fine.</span>
			</div>

			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Input Field</span>
				</label>
				<input type="text" placeholder="Type something..." class="input input-bordered w-full" />
			</div>
		</div>
	</div>
</template>
