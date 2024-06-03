"use client"
import type { ImageLoaderProps } from 'next/image';


const myImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://beta.jasonthompson.org/${src}?w=${width}&q=${quality || 75}`;
};

export default myImageLoader;