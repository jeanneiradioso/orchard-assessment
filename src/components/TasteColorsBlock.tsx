import React, { useState } from 'react';
import Modal from './Modal';

interface ColorItem {
  colorName: string;
  description: string;
  imageSrc: string;
}

interface TasteColorsBlockProps {
  title: string;
  colors: ColorItem[];
}

const TasteColorsBlock: React.FC<TasteColorsBlockProps> = ({ title, colors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>('');

  const openModal = (imageSrc: string, altText: string) => {
    setModalImage(imageSrc);
    setModalAlt(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalAlt('');
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(`Anchor clicked: ${e.currentTarget.href || 'No HREF'}`);
  };

  return (
    <section className="py-8">
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {colors.map((colorItem, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <a href="#/" onClick={handleAnchorClick}>
              <img
                src={colorItem.imageSrc}
                alt={colorItem.colorName}
                className="rounded hover:scale-110 transition-transform cursor-pointer"
                onClick={() =>
                  openModal(colorItem.imageSrc, colorItem.colorName)
                }
              />
            </a>
            <h3 className="mt-4 text-lg font-semibold uppercase">
              {colorItem.colorName}
            </h3>
            <p className="mt-2 text-gray-200 text-sm md:text-base leading-relaxed">
              {colorItem.description}
            </p>
          </div>
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
