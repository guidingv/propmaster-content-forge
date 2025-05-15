
import React from 'react';
import { PropertyDetails } from '@/utils/mockGenerator';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building, MapPin, Tag, Calendar, User, Mail, Phone } from 'lucide-react';

interface PropertyCardProps {
  property: PropertyDetails;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const infoItems = [
    { icon: Building, label: "Objektart", value: property.projectType },
    { icon: MapPin, label: "Standort", value: property.location },
    { icon: Tag, label: "Einstiegspreis", value: property.entryPrice },
    { icon: Calendar, label: "Fertigstellung", value: property.completionDate }
  ];

  const agentItems = [
    { icon: User, label: "Name", value: property.agent.name },
    { icon: Mail, label: "E-Mail", value: property.agent.email },
    { icon: Phone, label: "Telefon", value: property.agent.phone }
  ];

  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white p-4">
        <h3 className="text-xl font-semibold">{property.projectName}</h3>
        <p className="text-sm opacity-90">{property.units} Einheiten</p>
      </CardHeader>
      <CardContent className="p-5 space-y-6">
        <div className="space-y-3">
          <h4 className="font-medium text-gray-800">Immobiliendetails</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-[#F7FAF7] p-2 rounded-md text-[#9b87f5]">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-800">Ausstattung</h4>
          <div className="flex flex-wrap gap-2">
            {property.amenities.length > 0 ? (
              property.amenities.map((amenity, index) => (
                <span key={index} className="bg-[#F7FAF7] text-gray-700 px-3 py-1 rounded-full text-xs">
                  {amenity}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">Keine Ausstattungsmerkmale ausgewählt</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-800">Maklerinformationen</h4>
          <div className="space-y-2">
            {agentItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-[#9b87f5]">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <span className="text-gray-500 mr-1">{item.label}:</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
