export const getImageUrl = (path) => {
    return new URL(`../assets/image/${path}`, import.meta.url).href
}