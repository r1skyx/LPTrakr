import { useFetch } from '@vueuse/core'

async function useFetchExample(link) {
	const { data } = await useFetch(link).json()
	if (data) {
		return data
	} else {
		return 1
	}
}

async function getExampleJSON() {
	let example = await useFetchExample('/example.json')
	return example
}

async function getExampleAlbums() {
	let albums = await useFetchExample('/albumsExample.json')
	return albums
}

async function getExampleAlbumData(id) {
	const albums = await getExampleAlbums()
	if (albums?.value) {
		return albums?.value.find((item) => item.id == id)
	} else {
		return 1
	}
}

export { getExampleJSON, getExampleAlbums, getExampleAlbumData }
