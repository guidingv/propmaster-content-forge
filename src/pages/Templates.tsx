import React from 'react';
import { useTranslation } from 'react-i18next';
import { StandardPropertyTemplate } from '@/components/templates/StandardPropertyTemplate';
import { LuxuryPropertyTemplate } from '@/components/templates/LuxuryPropertyTemplate';
import { PropertyDetails } from '@/utils/mockGenerator';

export default function Templates() {
  const { t } = useTranslation();

  const mockProperty: PropertyDetails = {
    projectName: "Sample Property",
    projectType: "Eigentumswohnung",
    location: "Sample Location",
    entryPrice: "500.000€",
    units: 1,
    completionDate: "2024",
    amenities: ["Sample Amenity"],
    agent: {
      name: "Sample Agent",
      email: "agent@example.com",
      phone: "123-456-789"
    }
  };

  const handleUseTemplate = (templateType: string) => {
    // TODO: Implement template selection logic
    console.log(`Selected template: ${templateType}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Property Templates</h1>
        <p className="text-gray-600">
          Choose a template that best fits your property type and marketing needs.
          Each template is optimized for different property segments and target audiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StandardPropertyTemplate 
          property={mockProperty} 
          onUseTemplate={() => handleUseTemplate('standard')} 
        />
        <LuxuryPropertyTemplate 
          property={mockProperty} 
          onUseTemplate={() => handleUseTemplate('luxury')} 
        />
      </div>

      <div className="mt-12 bg-orange-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Why Use Our Templates?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Professional Quality</h3>
            <p className="text-gray-600">
              Our templates are crafted by real estate marketing experts to ensure 
              high-quality, persuasive content.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Time Saving</h3>
            <p className="text-gray-600">
              Generate professional marketing content in minutes instead of hours or days.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Market Optimized</h3>
            <p className="text-gray-600">
              Each template is optimized for specific market segments and property types.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
