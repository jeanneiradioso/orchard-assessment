import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  altText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen || !imageSrc) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-white p-4 rounded shadow-md max-w-3xl w-11/12 sm:w-auto cursor-auto"
        onClick={handleModalClick}
      >
        <img src={imageSrc} alt={altText} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Modal;
