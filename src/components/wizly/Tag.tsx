import React from "react";

interface TagProps {
  label: string;
  onRemove: () => void;
}

export const Tag: React.FC<TagProps> = ({ label, onRemove }) => {
  return (
    <div className="flex items-center gap-[7px] text-[#5683D2] text-base bg-[rgba(86,131,210,0.15)] p-2.5 rounded-[30px]">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="flex items-center justify-center w-4 h-4 text-xs cursor-pointer"
        aria-label={`Remove ${label}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};
