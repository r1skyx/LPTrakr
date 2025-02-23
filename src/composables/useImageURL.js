//since ill be using external api, this will later be changed to ext. api url to get album covers
export function getImageUrl(name) {
	return new URL(`../assets/images/${name}`, import.meta.url).href
}
