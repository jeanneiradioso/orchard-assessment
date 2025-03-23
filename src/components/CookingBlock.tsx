import React, { useState } from "react";
import Modal from "./Modal";

interface ImageItem {
  src: string;
  alt: string;
}

interface CookingBlockProps {
  title: string;
  description: string;
  note: string;
  images: ImageItem[];
  noteTitle: string;
}

const CookingBlock: React.FC<CookingBlockProps> = ({
  title,
  description,
  note,
  images,
  noteTitle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");

  const openModal = (imageSrc: string, altText: string) => {
    setModalImage(imageSrc);
    setModalAlt(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalAlt("");
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(`Anchor clicked: ${e.currentTarget.href || "No HREF"}`);
  };

  const leftMainImage = images[0];
  const leftStackedImages = images.slice(1, 3);

  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 flex gap-2">
          <div className="w-1/2">
            <a href="#/" onClick={handleAnchorClick}>
              <img
                src={leftMainImage.src}
                alt={leftMainImage.alt}
                className="w-full h-full object-cover rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                onClick={() => openModal(leftMainImage.src, leftMainImage.alt)}
              />
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            {leftStackedImages.map((img, idx) => (
              <a key={idx} href="#/" onClick={handleAnchorClick}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => openModal(img.src, img.alt)}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 px-4 py-0 rounded shadow-inner">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="mb-4 h-[1px] w-full bg-white mx-auto animate-expand"></div>
          <div className="prose">
            <p>{description}</p>
            <p>{noteTitle}</p>
            <p>{note}</p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={modalImage}
        altText={modalAlt}
      />
    </section>
  );
};

export default CookingBlock;
