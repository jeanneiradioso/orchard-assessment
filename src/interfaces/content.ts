// src/interfaces/ContentInterfaces.ts

export interface ImageItem {
    src: string;
    alt: string;
  }
  
  export interface ColorItem {
    colorName: string;
    description: string;
    imageSrc: string;
  }
  
  export interface CookingBlockData {
    title: string;
    description: string;
    noteTitle: string;
    note: string;
    images: ImageItem[];
  }
  
  export interface TasteColoursBlockData {
    title: string;
    colors: ColorItem[];
  }
  
  export interface TasteologyPageData {
    id: string;
    name: string;
    url: string;
    contentType: string;
    properties: {
      cookingBlock: CookingBlockData;
      tasteColoursBlock: TasteColoursBlockData;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any[]; 
  }
  