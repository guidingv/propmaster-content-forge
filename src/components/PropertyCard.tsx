
import React from 'react';
import { PropertyDetails } from '@/utils/mockGenerator';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building, MapPin, Tag, Calendar, User, Mail, Phone } from 'lucide-react';

interface PropertyCardProps {
  property: PropertyDetails;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const infoItems = [
    { icon: Building, label: "Project Type", value: property.projectType },
    { icon: MapPin, label: "Location", value: property.location },
    { icon: Tag, label: "Entry Price", value: property.entryPrice },
    { icon: Calendar, label: "Completion", value: property.completionDate }
  ];

  const agentItems = [
    { icon: User, label: "Name", value: property.agent.name },
    { icon: Mail, label: "Email", value: property.agent.email },
    { icon: Phone, label: "Phone", value: property.agent.phone }
  ];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-realestate-primary text-white p-4">
        <h3 className="text-xl font-semibold">{property.projectName}</h3>
        <p className="text-sm opacity-90">{property.units} Units</p>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        <div className="space-y-3">
          <h4 className="font-medium text-realestate-dark">Property Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-realestate-light p-2 rounded-md text-realestate-primary">
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
          <h4 className="font-medium text-realestate-dark">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {property.amenities.length > 0 ? (
              property.amenities.map((amenity, index) => (
                <span key={index} className="bg-realestate-light text-realestate-dark px-3 py-1 rounded-full text-xs">
                  {amenity}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">No amenities selected</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-realestate-dark">Agent Information</h4>
          <div className="space-y-2">
            {agentItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-realestate-primary">
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
