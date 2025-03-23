import React from "react";

export interface ImageItem {
  src: string;
  alt: string;
}

interface CookingBlockImagesProps {
  images: ImageItem[];
  onImageClick: (src: string, alt: string) => void;
}

const CookingImages: React.FC<CookingBlockImagesProps> = ({
  images,
  onImageClick,
}) => {
  if (images.length < 3) {
    console.error("CookingBlockImages requires at least 3 images.");
    return null;
  }

  const leftMainImage = images[0];
  const leftStackedImages = images.slice(1, 3);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(`Anchor clicked: ${e.currentTarget.href || "No HREF"}`);
  };

  return (
    <div className="md:w-2/3 flex gap-2 mb-4">
      <div className="w-1/2">
        <a href="#/" onClick={handleAnchorClick}>
          <img
            src={leftMainImage.src}
            alt={leftMainImage.alt}
            className="w-full h-full object-cover rounded shadow-lg hover:scale-105 transition-transform cursor-pointer !w-[372px] !h-[600px]"
            onClick={() => onImageClick(leftMainImage.src, leftMainImage.alt)}
          />
        </a>
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        {leftStackedImages.map((img, idx) => (
          <a key={idx} href="#/" onClick={handleAnchorClick}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded shadow-lg hover:scale-105 transition-transform cursor-pointer !w-[372px] !h-[295px]"
              onClick={() => onImageClick(img.src, img.alt)}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CookingImages;
