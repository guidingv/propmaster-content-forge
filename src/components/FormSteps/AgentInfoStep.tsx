
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
        <h2 className="text-2xl font-bold text-realestate-dark">Maklerinformationen</h2>
        <p className="text-realestate-muted">Geben Sie Kontaktdaten für den zuständigen Makler an.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="agentName">Name des Maklers</Label>
          <Input
            id="agentName"
            placeholder="z.B. Max Mustermann"
            value={formData.agent.name}
            onChange={(e) => updateAgentInfo('name', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agentEmail">E-Mail</Label>
          <Input
            id="agentEmail"
            type="email"
            placeholder="z.B. max.mustermann@immobilien.de"
            value={formData.agent.email}
            onChange={(e) => updateAgentInfo('email', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agentPhone">Telefonnummer</Label>
          <Input
            id="agentPhone"
            placeholder="z.B. 030 12345678"
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
