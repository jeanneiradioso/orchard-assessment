import React, { useState } from "react";
import Modal from "../Modal";
import { CookingBlockData } from "../../interfaces/content";
import CookingTexts from "./CookingTexts";
import CookingImages from "./CookingImages";

interface CookingBlockProps {
  data: CookingBlockData;
}

const CookingBlock: React.FC<CookingBlockProps> = ({ data }) => {
  const { title, description, note, noteTitle, images } = data;

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

  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <CookingImages images={images} onImageClick={openModal} />
        <CookingTexts
          title={title}
          description={description}
          noteTitle={noteTitle}
          note={note}
        />
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
