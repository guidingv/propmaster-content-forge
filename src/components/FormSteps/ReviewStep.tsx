
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
        <h2 className="text-2xl font-bold text-realestate-dark">Überprüfen Sie Ihre Angaben</h2>
        <p className="text-realestate-muted">Bitte überprüfen Sie die unten stehenden Details, bevor die Marketinginhalte erstellt werden.</p>
      </div>

      <PropertyCard property={formData} />

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Wenn Sie auf "Inhalte erstellen" klicken, wird unsere KI Marketingmaterialien erstellen, darunter Website-Texte, E-Mail-Kampagnen, 
              Social-Media-Beiträge und mehr, basierend auf den bereitgestellten Informationen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
