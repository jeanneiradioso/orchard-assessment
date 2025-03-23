import React from "react";
import { ColorItem } from '../../interfaces/content';

export interface ColorItemProps {
  item: ColorItem;
  onImageClick: (src: string, alt: string) => void;
  onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const TasteColorItem: React.FC<ColorItemProps> = ({
  item,
  onImageClick,
  onAnchorClick,
}) => {
  return (
    <div className="flex flex-col items-center text-center mb-4">
      <a href="#/" onClick={onAnchorClick}>
        <img
          src={item.imageSrc}
          alt={item.colorName}
          className="rounded hover:scale-110 transition-transform cursor-pointer !w-[375px] !h-[300px]"
          onClick={() => onImageClick(item.imageSrc, item.colorName)}
        />
      </a>
      <h3 className="mt-8 font-sans font-bold text-[20px]">
        {item.colorName}
      </h3>
      <p className="mt-2 text-gray-200 leading-relaxed text-[20px] px-2">
        {item.description}
      </p>
    </div>
  );
};

export default TasteColorItem;
