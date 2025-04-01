import React from "react";
import { Tag } from "./Tag";

interface IndustrySelectProps {
  industries: string[];
  setIndustries: React.Dispatch<React.SetStateAction<string[]>>;
  maxIndustries: number;
}

export const IndustrySelect: React.FC<IndustrySelectProps> = ({
  industries,
  setIndustries,
  maxIndustries,
}) => {
  const handleRemoveIndustry = (indexToRemove: number) => {
    setIndustries(industries.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className="flex items-center mb-3.5">
        <div className="text-[#3D3D3D] text-base font-semibold">
          Industries &amp; Domains Experience
        </div>
        <div className="text-[#626B76] text-sm ml-[7px]">
          (Maximum {maxIndustries})
        </div>
      </div>

      <div className="flex flex-wrap gap-[15px] mb-3.5">
        {industries.map((industry, index) => (
          <Tag
            key={index}
            label={industry}
            onRemove={() => handleRemoveIndustry(index)}
          />
        ))}
      </div>

      <div className="mb-[41px]">
        <select
          disabled={industries.length >= maxIndustries}
          className="w-full h-11 border text-sm text-[rgba(98,107,118,0.6)] appearance-none cursor-pointer bg-[#F7F7F5] px-[15px] py-0 rounded-xl border-solid border-[#DADADA]"
        >
          <option value="">Select or add your industry domain</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Retail">Retail</option>
          <option value="Manufacturing">Manufacturing</option>
        </select>
      </div>
    </div>
  );
};
