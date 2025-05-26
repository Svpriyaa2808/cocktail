export const getImageUrl = (image:string):string => {
    return new URL(`../${image}`,import.meta.url).href;
}