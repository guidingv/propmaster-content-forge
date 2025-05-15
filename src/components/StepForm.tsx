
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PropertyDetails } from '@/utils/mockGenerator';
import PropertyInfoStep from './FormSteps/PropertyInfoStep';
import LocationPricingStep from './FormSteps/LocationPricingStep';
import AmenitiesStep from './FormSteps/AmenitiesStep';
import AgentInfoStep from './FormSteps/AgentInfoStep';
import ReviewStep from './FormSteps/ReviewStep';

interface StepFormProps {
  onSubmit: (data: PropertyDetails) => void;
  isLoading: boolean;
}

const StepForm: React.FC<StepFormProps> = ({ onSubmit, isLoading }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const [formData, setFormData] = useState<PropertyDetails>({
    projectName: '',
    projectType: 'Condominium',
    location: '',
    entryPrice: '',
    units: 0,
    completionDate: '',
    amenities: [],
    agent: {
      name: '',
      email: '',
      phone: '',
    }
  });
  
  const updateFormData = (data: Partial<PropertyDetails>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const steps = [
    {
      title: 'Property Information',
      component: <PropertyInfoStep formData={formData} updateFormData={updateFormData} />
    },
    {
      title: 'Location & Pricing',
      component: <LocationPricingStep formData={formData} updateFormData={updateFormData} />
    },
    {
      title: 'Amenities',
      component: <AmenitiesStep formData={formData} updateFormData={updateFormData} />
    },
    {
      title: 'Agent Information',
      component: <AgentInfoStep formData={formData} updateFormData={updateFormData} />
    },
    {
      title: 'Review & Submit',
      component: <ReviewStep formData={formData} />
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1
                  ${index < currentStep ? 'bg-green-500 text-white' : 
                    index === currentStep ? 'bg-realestate-primary text-white' : 
                    'bg-gray-200 text-gray-500'}`}
              >
                {index + 1}
              </div>
              <span className={`text-xs hidden md:block ${index === currentStep ? 'text-realestate-primary font-medium' : 'text-gray-500'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-realestate-primary h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentStep) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Mobile step title */}
      <h2 className="text-xl font-bold text-center mb-6 md:hidden">
        {steps[currentStep].title}
      </h2>
      
      {/* Step content */}
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          {steps[currentStep].component}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button 
              type="button"
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button 
              type="submit"
              className="bg-realestate-primary hover:bg-realestate-secondary"
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Content'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepForm;
