import React, { useState } from "react";
import Modal from "../Modal";
import ColorItemComponent from "./ColorItem";
import { ColorItem } from "../../interfaces/content";

export interface TasteColorsBlockData {
  title: string;
  colors: ColorItem[];
}

interface TasteColorsBlockProps {
  data: TasteColorsBlockData;
}

const TasteColorsBlock: React.FC<TasteColorsBlockProps> = ({ data }) => {
  const { title, colors } = data;
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

  return (
    <section className="py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-[55px] relative inline-block">
          {title}
          <span className="absolute left-0 -bottom-6 block h-[1px] w-0 bg-white animate-expand"></span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {colors.map((color, index) => (
          <ColorItemComponent
            key={index}
            item={color}
            onImageClick={openModal}
            onAnchorClick={handleAnchorClick}
          />
        ))}
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

export default TasteColorsBlock;
