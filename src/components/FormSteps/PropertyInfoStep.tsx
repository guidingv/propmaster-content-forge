
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PropertyDetails } from '@/utils/mockGenerator';

interface PropertyInfoStepProps {
  formData: PropertyDetails;
  updateFormData: (data: Partial<PropertyDetails>) => void;
}

const PropertyInfoStep: React.FC<PropertyInfoStepProps> = ({ formData, updateFormData }) => {
  const projectTypes = [
    'Eigentumswohnung',
    'Wohnung',
    'Einfamilienhaus',
    'Reihenhaus',
    'Doppelhaushälfte',
    'Luxusvilla',
    'Penthouse',
    'Gewerbeimmobilie'
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-realestate-dark">Erzählen Sie uns von Ihrem Projekt</h2>
        <p className="text-realestate-muted">Beginnen Sie mit grundlegenden Informationen zu Ihrem Immobilienprojekt.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="projectName">Projektname</Label>
          <Input
            id="projectName"
            placeholder="z.B. Skyline Residenzen"
            value={formData.projectName}
            onChange={(e) => updateFormData({ projectName: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Objektart</Label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => updateFormData({ projectType: value })}
            required
          >
            <SelectTrigger id="projectType">
              <SelectValue placeholder="Objektart auswählen" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfoStep;
