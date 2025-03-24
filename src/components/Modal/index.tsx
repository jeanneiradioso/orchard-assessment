import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  altText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender || !imageSrc) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${
        isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative rounded shadow-md w-11/12 max-w-screen-md h-[90vh] flex items-center justify-center overflow-hidden ${
          isClosing ? 'animate-scaleOut' : 'animate-scaleIn'
        }`}
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-400 focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        <img
          src={imageSrc}
          alt={altText}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
