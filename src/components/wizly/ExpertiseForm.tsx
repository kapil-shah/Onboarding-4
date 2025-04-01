import React, { useState } from "react";
import { TagInput } from "./TagInput";
import { IndustrySelect } from "./IndustrySelect";

interface ExpertiseFormProps {
  onBack: () => void;
  onContinue: () => void;
}

export const ExpertiseForm: React.FC<ExpertiseFormProps> = ({
  onBack,
  onContinue,
}) => {
  const [expertiseAreas, setExpertiseAreas] = useState<string[]>([
    "Product Design",
    "Product Management",
    "UI UX",
  ]);

  const [industries, setIndustries] = useState<string[]>([
    "Finance",
    "Banking",
  ]);

  return (
    <section className="w-[761px] bg-white pt-[27px] pb-[42px] px-[42px] rounded-[20px] max-md:w-[90%] max-md:p-5 max-sm:w-full max-sm:p-[15px]">
      <header>
        <h2 className="text-[#3D3D3D] text-xl font-semibold text-center mb-[11px]">
          Areas of Expertise &amp; Industry Domains
        </h2>
        <p className="text-[#626B76] text-base text-center mb-[35px]">
          Select or add your specialized areas of expertise and industries you
          have experience in.
        </p>
      </header>

      <form>
        <TagInput
          tags={expertiseAreas}
          setTags={setExpertiseAreas}
          maxTags={8}
          label="Areas of Expertise"
          placeholder="User Research"
        />

        <IndustrySelect
          industries={industries}
          setIndustries={setIndustries}
          maxIndustries={4}
        />

        <div className="flex justify-between max-sm:flex-col max-sm:gap-2.5">
          <button
            type="button"
            onClick={onBack}
            className="w-[113px] h-[43px] border text-[#5683D2] text-base font-medium cursor-pointer bg-white rounded-[9px] border-solid border-[#5683D2] max-sm:w-full"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onContinue}
            className="w-[113px] h-[43px] text-white text-base font-medium cursor-pointer bg-[#5683D2] rounded-[9px] border-[none] max-sm:w-full"
          >
            Continue
          </button>
        </div>
      </form>
    </section>
  );
};
