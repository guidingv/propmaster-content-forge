
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertyDetails } from '@/utils/mockGenerator';

interface AgentInfoStepProps {
  formData: PropertyDetails;
  updateFormData: (data: Partial<PropertyDetails>) => void;
}

const AgentInfoStep: React.FC<AgentInfoStepProps> = ({ formData, updateFormData }) => {
  const updateAgentInfo = (field: string, value: string) => {
    updateFormData({
      agent: {
        ...formData.agent,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-realestate-dark">Agent Information</h2>
        <p className="text-realestate-muted">Provide contact details for the agent responsible for this listing.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="agentName">Agent Name</Label>
          <Input
            id="agentName"
            placeholder="e.g., John Smith"
            value={formData.agent.name}
            onChange={(e) => updateAgentInfo('name', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agentEmail">Email</Label>
          <Input
            id="agentEmail"
            type="email"
            placeholder="e.g., john.smith@realestate.com"
            value={formData.agent.email}
            onChange={(e) => updateAgentInfo('email', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agentPhone">Phone Number</Label>
          <Input
            id="agentPhone"
            placeholder="e.g., (555) 123-4567"
            value={formData.agent.phone}
            onChange={(e) => updateAgentInfo('phone', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default AgentInfoStep;
