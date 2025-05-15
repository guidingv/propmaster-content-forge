
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
    'Condominium',
    'Apartment',
    'Single-family home',
    'Townhouse',
    'Duplex',
    'Luxury villa',
    'Penthouse',
    'Mixed-use development'
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-realestate-dark">Tell us about your project</h2>
        <p className="text-realestate-muted">Start by providing basic information about your real estate project.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="projectName">Project Name</Label>
          <Input
            id="projectName"
            placeholder="e.g., Skyline Residences"
            value={formData.projectName}
            onChange={(e) => updateFormData({ projectName: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => updateFormData({ projectType: value })}
            required
          >
            <SelectTrigger id="projectType">
              <SelectValue placeholder="Select project type" />
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
