import { useState, useEffect } from 'react';
import { ColorItem, ImageItem, TasteologyPageData } from '../interfaces/content';

export const useContentData = (): { data: TasteologyPageData | null; error: string | null } => {
  const [data, setData] = useState<TasteologyPageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL || '';

  useEffect(() => {
    fetch('/contentData.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((json: TasteologyPageData) => {
        json.properties.cookingBlock.images = json.properties.cookingBlock.images.map(
          (image: ImageItem) =>
            image.src.startsWith('http')
              ? image
              : { ...image, src: imageBaseUrl + image.src }
        );
        json.properties.tasteColoursBlock.colors = json.properties.tasteColoursBlock.colors.map(
          (color: ColorItem) =>
            color.imageSrc.startsWith('http')
              ? color
              : { ...color, imageSrc: imageBaseUrl + color.imageSrc }
        );
        setData(json);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [imageBaseUrl]);

  return { data, error };
};
