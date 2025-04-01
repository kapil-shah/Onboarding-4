import React from "react";

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({
  currentStep = 4,
  totalSteps = 5,
}) => {
  // Generate the steps
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  // Calculate positions for the circles
  const circlePositions = steps.map((_, index) => {
    const position = index * (520 / (totalSteps - 1)) + 16;
    return position;
  });

  return (
    <div className="w-full max-w-[552px] h-8 mb-12 max-md:w-[90%] max-sm:w-full">
      <svg
        width="100%"
        height="32"
        viewBox="0 0 552 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="progress-steps"
      >
        {steps.map((step, index) => {
          const isActive = step <= currentStep;
          const cx = circlePositions[index];

          return (
            <React.Fragment key={step}>
              {/* Circle */}
              <circle
                cx={cx}
                cy="16"
                r="16"
                fill={isActive ? "#5683D2" : "#DADADA"}
              />

              {/* Number */}
              <text
                fill={isActive ? "white" : "#5F5F5F"}
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Inter"
                fontSize="16"
                fontWeight="600"
                letterSpacing="0em"
              >
                <tspan x={cx - 4} y="22.3182">
                  {step}
                </tspan>
              </text>

              {/* Connecting line (except for the last step) */}
              {index < totalSteps - 1 && (
                <line
                  x1={cx + 16}
                  y1="16.5"
                  x2={circlePositions[index + 1] - 16}
                  y2="16.5"
                  stroke={step < currentStep ? "#5683D2" : "#DADADA"}
                />
              )}
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};
