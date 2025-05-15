
import React from 'react';
import { PropertyDetails } from '@/utils/mockGenerator';
import PropertyCard from '../PropertyCard';

interface ReviewStepProps {
  formData: PropertyDetails;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-realestate-dark">Review Your Information</h2>
        <p className="text-realestate-muted">Please review the details below before generating marketing content.</p>
      </div>

      <PropertyCard property={formData} />

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              When you click "Generate Content", our AI will create marketing materials including website copy, email campaigns, 
              social media posts, and more based on the information provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
