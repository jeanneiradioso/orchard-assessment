import { useState, useEffect } from 'react';
import { ColorItem, ImageItem, TasteologyPageData } from '../interfaces/content';

export const useContentData = (): { data: TasteologyPageData | null; error: string | null } => {
  const [data, setData] = useState<TasteologyPageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL || '';
  const jsonPath = `${import.meta.env.BASE_URL}contentData.json`;

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((json: TasteologyPageData) => {
        const updatedCookingImages = json.properties.cookingBlock.images.map((image: ImageItem) => {
          return image.src.startsWith('http') ? image : {
            ...image,
            src: `${imageBaseUrl}${image.src.startsWith('/') ? '' : '/'}${image.src}`
          };
        });

        const updatedColors = json.properties.tasteColoursBlock.colors.map((color: ColorItem) => {
          return color.imageSrc.startsWith('http') ? color : {
            ...color,
            imageSrc: `${imageBaseUrl}${color.imageSrc.startsWith('/') ? '' : '/'}${color.imageSrc}`
          };
        });

        setData({
          ...json,
          properties: {
            ...json.properties,
            cookingBlock: {
              ...json.properties.cookingBlock,
              images: updatedCookingImages
            },
            tasteColoursBlock: {
              ...json.properties.tasteColoursBlock,
              colors: updatedColors
            }
          }
        });
      })
      .catch((err) => {
        console.error('Error loading content:', err);
        setError(err.message);
      });
  }, [imageBaseUrl, jsonPath]);

  return { data, error };
};
