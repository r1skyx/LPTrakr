import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlbumView from '../views/AlbumView.vue'
import DaisyUITestView from '@/views/DaisyUITestView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/album/:id',
			name: 'Album',
			component: AlbumView,
			props: true,
		},
		{
			path: '/daisyUI',
			name: 'Daisy UI Testing Page',
			component: DaisyUITestView,
		},
	],
})

export default router
