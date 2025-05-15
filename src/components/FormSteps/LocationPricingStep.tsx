
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertyDetails } from '@/utils/mockGenerator';

interface LocationPricingStepProps {
  formData: PropertyDetails;
  updateFormData: (data: Partial<PropertyDetails>) => void;
}

const LocationPricingStep: React.FC<LocationPricingStepProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-realestate-dark">Standort & Preise</h2>
        <p className="text-realestate-muted">Geben Sie Details zum Standort und zur Preisgestaltung Ihrer Immobilie ein.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="location">Standort</Label>
          <Input
            id="location"
            placeholder="z.B. Berlin-Mitte"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="entryPrice">Einstiegspreis</Label>
          <Input
            id="entryPrice"
            placeholder="z.B. 450.000 €"
            value={formData.entryPrice}
            onChange={(e) => updateFormData({ entryPrice: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="units">Anzahl der Einheiten</Label>
          <Input
            id="units"
            type="number"
            placeholder="z.B. 120"
            value={formData.units === 0 ? '' : formData.units.toString()}
            onChange={(e) => updateFormData({ units: parseInt(e.target.value) || 0 })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="completionDate">Fertigstellungsdatum</Label>
          <Input
            id="completionDate"
            placeholder="z.B. Dezember 2025"
            value={formData.completionDate}
            onChange={(e) => updateFormData({ completionDate: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default LocationPricingStep;
