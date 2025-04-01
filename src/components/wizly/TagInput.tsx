import React, { useState } from "react";
import { Tag } from "./Tag";

interface TagInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  maxTags: number;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

export const TagInput: React.FC<TagInputProps> = ({
  tags,
  setTags,
  maxTags,
  label,
  placeholder = "Add a tag",
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() && tags.length < maxTags) {
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className="flex items-center mb-3.5">
        <div className="text-[#3D3D3D] text-base font-semibold">{label}</div>
        <div className="text-[#626B76] text-sm ml-[7px]">
          (Maximum {maxTags})
        </div>
      </div>

      <div className="flex flex-wrap gap-[15px] mb-3.5">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            label={tag}
            onRemove={() => handleRemoveTag(index)}
          />
        ))}
      </div>

      <div className="flex items-center mb-[41px]">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || tags.length >= maxTags}
          className="flex-1 h-11 border text-base text-[#3D3D3D] bg-[#F7F7F5] px-[15px] py-0 rounded-xl border-solid border-[#DADADA]"
        />
        <button
          onClick={handleAddTag}
          disabled={!inputValue.trim() || tags.length >= maxTags || disabled}
          className="w-[63px] h-[30px] text-white cursor-pointer bg-[#5683D2] ml-3 rounded-[30px] border-[none] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </div>
  );
};
