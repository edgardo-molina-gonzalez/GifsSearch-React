import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    async function getImages() {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false)
    }
  
    useEffect(() => {
      getImages();
    }, []);

 return{
    images,
    isLoading
 }
}
