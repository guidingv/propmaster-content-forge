
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PropertyDetails } from '@/utils/mockGenerator';

interface AmenitiesStepProps {
  formData: PropertyDetails;
  updateFormData: (data: Partial<PropertyDetails>) => void;
}

const AmenitiesStep: React.FC<AmenitiesStepProps> = ({ formData, updateFormData }) => {
  const [newAmenity, setNewAmenity] = useState('');
  
  const commonAmenities = [
    'Schwimmbad',
    'Fitnessraum',
    'Concierge-Service',
    'Dachterrasse',
    'Tiefgarage',
    'Business Center',
    'Spa & Wellness',
    'Haustierfreundlich',
    'Kinderspielplatz',
    'Tennisplatz',
    'Smart-Home-Technologie',
    'E-Ladestationen'
  ];
  
  const handleAddAmenity = () => {
    if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
      updateFormData({ 
        amenities: [...formData.amenities, newAmenity.trim()]
      });
      setNewAmenity('');
    }
  };
  
  const handleRemoveAmenity = (amenity: string) => {
    updateFormData({
      amenities: formData.amenities.filter(a => a !== amenity)
    });
  };
  
  const handleCommonAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      updateFormData({
        amenities: [...formData.amenities, amenity]
      });
    } else {
      handleRemoveAmenity(amenity);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-realestate-dark">Ausstattungsmerkmale</h2>
        <p className="text-realestate-muted">Wählen Sie die Ausstattungsmerkmale Ihrer Immobilie oder fügen Sie individuelle hinzu.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Übliche Ausstattungsmerkmale</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {commonAmenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox 
                  id={`amenity-${amenity}`}
                  checked={formData.amenities.includes(amenity)}
                  onCheckedChange={(checked) => 
                    handleCommonAmenityChange(amenity, checked === true)
                  }
                />
                <label 
                  htmlFor={`amenity-${amenity}`}
                  className="text-sm cursor-pointer"
                >
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Individuelle Ausstattungsmerkmale</Label>
          <div className="flex space-x-2">
            <Input
              placeholder="Ausstattungsmerkmal hinzufügen"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddAmenity();
                }
              }}
            />
            <Button 
              type="button"
              onClick={handleAddAmenity}
              variant="outline"
            >
              Hinzufügen
            </Button>
          </div>
        </div>

        {formData.amenities.length > 0 && (
          <div className="space-y-2">
            <Label>Ausgewählte Ausstattungsmerkmale</Label>
            <div className="flex flex-wrap gap-2">
              {formData.amenities.map((amenity) => (
                <div 
                  key={amenity} 
                  className="bg-realestate-light text-realestate-dark px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {amenity}
                  <button
                    type="button"
                    onClick={() => handleRemoveAmenity(amenity)}
                    className="ml-2 text-gray-500 hover:text-realestate-accent"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmenitiesStep;
