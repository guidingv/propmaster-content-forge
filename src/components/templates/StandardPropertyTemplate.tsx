import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropertyDetails } from '@/utils/mockGenerator';
import { Button } from '@/components/ui/button';

interface StandardPropertyTemplateProps {
  property: PropertyDetails;
  onUseTemplate: () => void;
}

export function StandardPropertyTemplate({ property, onUseTemplate }: StandardPropertyTemplateProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 bg-orange-100">
        <div className="absolute inset-0 flex items-center justify-center text-orange-500">
          <span className="text-lg font-semibold">Property Image Placeholder</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Standard Property Template</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Property Features</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Clear and concise property descriptions</li>
              <li>Emphasis on practical features and amenities</li>
              <li>Focus on location and accessibility</li>
              <li>Suitable for residential properties</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Template Highlights</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Professional tone of voice</li>
              <li>Balanced property presentation</li>
              <li>Local market context</li>
              <li>Call-to-action focused content</li>
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
