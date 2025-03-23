import React, { useRef } from "react";
import useInView from "../../hooks/useInView";

interface CookingBlockTextProps {
  title: string;
  description: string;
  noteTitle: string;
  note: string;
}

const CookingTexts: React.FC<CookingBlockTextProps> = ({
  title,
  description,
  noteTitle,
  note,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.5);
  return (
    <div ref={ref} className="md:w-1/3 px-4 py-0 rounded shadow-inner max-h-[600px] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-[55px] relative inline-block">
        {title}
        <span
          className={`absolute left-0 -bottom-6 block h-[1px] bg-white transition-all duration-500 ${
            inView ? "w-full animate-expand" : "w-0"
          }`}
        ></span>
      </h1>
      <div className="prose">
        <div className="mb-4">
          <p className="text-[20px]">{description}</p>
        </div>
        <p className="uppercase text-[#cf1430] font-bold font-sans mb-2">
          {noteTitle}
        </p>
        <p className="font-bold font-sans text-[20px]">{note}</p>
      </div>
    </div>
  );
};

export default CookingTexts;
