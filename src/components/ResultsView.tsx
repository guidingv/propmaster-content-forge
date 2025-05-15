
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PropertyDetails, GeneratedContent } from '@/utils/mockGenerator';
import PropertyCard from './PropertyCard';

interface ResultsViewProps {
  property: PropertyDetails;
  content: GeneratedContent;
  onReset: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ property, content, onReset }) => {
  const [activeTab, setActiveTab] = useState("website");
  const [activeFacebookVariant, setActiveFacebookVariant] = useState(0);
  
  // Helper to render HTML content safely
  const renderHTML = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("In die Zwischenablage kopiert!");
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-realestate-dark">Generierte Marketing-Inhalte</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
          >
            Neues Projekt starten
          </Button>
        </div>
        <p className="text-realestate-muted">
          Ihre KI-generierten Marketing-Inhalte sind bereit. Verwenden Sie die folgenden Tabs, um verschiedene Inhaltstypen anzuzeigen.
        </p>
      </div>
      
      {/* Property Summary Card */}
      <div className="mb-8">
        <PropertyCard property={property} />
      </div>
      
      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="website">Webseite</TabsTrigger>
          <TabsTrigger value="email">E-Mail</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
        </TabsList>
        
        {/* Website Content */}
        <TabsContent value="website" className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-realestate-dark">Webseiten-Text</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(
                  content.website.highlights + 
                  content.website.body + 
                  content.website.conclusion
                )}
              >
                Alles kopieren
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="prose max-w-none">
                {renderHTML(content.website.highlights)}
              </div>
              
              <div className="prose max-w-none">
                {renderHTML(content.website.body)}
              </div>
              
              <div className="prose max-w-none">
                {renderHTML(content.website.conclusion)}
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Email Content */}
        <TabsContent value="email" className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-realestate-dark">E-Mail-Kampagne</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.email)}
              >
                Kopieren
              </Button>
            </div>
            
            <div className="font-mono text-sm whitespace-pre-wrap">
              {content.email}
            </div>
          </div>
        </TabsContent>
        
        {/* Facebook Content */}
        <TabsContent value="facebook" className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-realestate-dark">
                Facebook-Anzeigentext (Variante {activeFacebookVariant + 1}/{content.facebook.length})
              </h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.facebook[activeFacebookVariant])}
              >
                Kopieren
              </Button>
            </div>
            
            <div className="font-mono text-sm whitespace-pre-wrap mb-4">
              {content.facebook[activeFacebookVariant]}
            </div>
            
            {content.facebook.length > 1 && (
              <div className="flex space-x-2">
                {content.facebook.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFacebookVariant(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeFacebookVariant 
                        ? 'bg-realestate-primary' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </TabsContent>
        
        {/* LinkedIn Content */}
        <TabsContent value="linkedin" className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-realestate-dark">LinkedIn-Beitrag</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.linkedin)}
              >
                Kopieren
              </Button>
            </div>
            
            <div className="font-mono text-sm whitespace-pre-wrap">
              {content.linkedin}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Export options */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-realestate-dark mb-4">Exportoptionen</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline">
            Als PDF exportieren
          </Button>
          <Button variant="outline">
            Nach Google Docs exportieren
          </Button>
          <Button variant="outline">
            Per E-Mail teilen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
