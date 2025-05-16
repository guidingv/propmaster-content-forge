import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropertyDetails } from '@/utils/mockGenerator';
import { Button } from '@/components/ui/button';

interface LuxuryPropertyTemplateProps {
  property: PropertyDetails;
  onUseTemplate: () => void;
}

export function LuxuryPropertyTemplate({ property, onUseTemplate }: LuxuryPropertyTemplateProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 bg-gradient-to-r from-orange-100 to-orange-200">
        <div className="absolute inset-0 flex items-center justify-center text-orange-600">
          <span className="text-lg font-semibold">Premium Property Image</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Luxury Property Template</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Exclusive Features</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Elegant and sophisticated descriptions</li>
              <li>Focus on premium amenities and finishes</li>
              <li>Emphasis on lifestyle and exclusivity</li>
              <li>Perfect for high-end properties</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Template Highlights</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Refined tone and language</li>
              <li>Emphasis on unique selling points</li>
              <li>Luxury market positioning</li>
              <li>Premium visual presentation</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button 
            onClick={onUseTemplate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            Use This Template
          </Button>
        </div>
      </div>
    </div>
  );
}
