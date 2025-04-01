import React from "react";
import { WizlyLayout } from "@/components/wizly/WizlyLayout";
import { ExpertiseForm } from "@/components/wizly/ExpertiseForm";

const Index = () => {
  // These functions would typically navigate to different steps
  // or handle form submission in a real application
  const handleBack = () => {
    console.log("Navigate back to previous step");
  };

  const handleContinue = () => {
    console.log("Navigate to next step");
  };

  return (
    <WizlyLayout currentStep={4} totalSteps={5}>
      <ExpertiseForm onBack={handleBack} onContinue={handleContinue} />
    </WizlyLayout>
  );
};

export default Index;
