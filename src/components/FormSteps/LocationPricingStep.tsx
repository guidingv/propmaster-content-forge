
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
        <h2 className="text-2xl font-bold text-realestate-dark">Location & Pricing</h2>
        <p className="text-realestate-muted">Enter details about the location and pricing of your property.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="e.g., Downtown Miami, FL"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="entryPrice">Entry Price</Label>
          <Input
            id="entryPrice"
            placeholder="e.g., $450,000"
            value={formData.entryPrice}
            onChange={(e) => updateFormData({ entryPrice: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="units">Number of Units</Label>
          <Input
            id="units"
            type="number"
            placeholder="e.g., 120"
            value={formData.units === 0 ? '' : formData.units.toString()}
            onChange={(e) => updateFormData({ units: parseInt(e.target.value) || 0 })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="completionDate">Completion Date</Label>
          <Input
            id="completionDate"
            placeholder="e.g., December 2025"
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
