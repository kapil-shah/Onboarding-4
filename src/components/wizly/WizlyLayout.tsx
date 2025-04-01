import React from "react";
import { ProgressSteps } from "./ProgressSteps";

interface WizlyLayoutProps {
  children: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
}

export const WizlyLayout: React.FC<WizlyLayoutProps> = ({
  children,
  currentStep = 4,
  totalSteps = 5,
}) => {
  return (
    <div className="max-w-none flex flex-col items-center min-h-screen bg-[#F7F7F5] mx-auto pt-[62px] pb-5 px-5 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <img
        src="/src/assets/wizly-logo.svg"
        className="w-[132px] h-10 mb-[49px]"
        alt="Wizly Logo"
      />

      <h1 className="text-[#3D3D3D] text-[25px] font-semibold mb-[11px]">
        Join the Knowledge Hub
      </h1>

      <p className="text-[#626B76] text-base mb-12">
        Your personalized AI knowledge platform.
      </p>

      <ProgressSteps currentStep={currentStep} totalSteps={totalSteps} />

      {children}

      <footer className="flex items-center gap-2 text-[#626B76] text-base mt-[31px]">
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
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M15 9h.01"></path>
          <path d="M9 9a3 3 0 0 1 6 0v1.5a3 3 0 0 1-6 0V9z"></path>
          <path d="M12 16v-3"></path>
        </svg>
        <span>2025 Wizly. All rights reserved.</span>
      </footer>
    </div>
  );
};
