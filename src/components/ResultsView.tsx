
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
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Generierte Marketing-Inhalte</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            className="border-orange-300 hover:bg-orange-50"
          >
            Neues Projekt starten
          </Button>
        </div>
        <p className="text-gray-600">
          Ihre KI-generierten Marketing-Inhalte sind bereit. Verwenden Sie die folgenden Tabs, um verschiedene Inhaltstypen anzuzeigen.
        </p>
      </div>
      
      {/* Property Summary Card */}
      <div className="mb-8">
        <PropertyCard property={property} />
      </div>
      
      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-orange-50 text-gray-700">
          <TabsTrigger 
            value="website" 
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Webseite
          </TabsTrigger>
          <TabsTrigger 
            value="email"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            E-Mail
          </TabsTrigger>
          <TabsTrigger 
            value="facebook"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Facebook
          </TabsTrigger>
          <TabsTrigger 
            value="linkedin"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            LinkedIn
          </TabsTrigger>
        </TabsList>
        
        {/* Website Content */}
        <TabsContent value="website" className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-gray-800">Webseiten-Text</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(
                  content.website.highlights + 
                  content.website.body + 
                  content.website.conclusion
                )}
                className="border-orange-300 hover:bg-orange-50"
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
              <h3 className="font-bold text-gray-800">E-Mail-Kampagne</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.email)}
                className="border-orange-300 hover:bg-orange-50"
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
              <h3 className="font-bold text-gray-800">
                Facebook-Anzeigentext (Variante {activeFacebookVariant + 1}/{content.facebook.length})
              </h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.facebook[activeFacebookVariant])}
                className="border-orange-300 hover:bg-orange-50"
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
                        ? 'bg-orange-500' 
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
              <h3 className="font-bold text-gray-800">LinkedIn-Beitrag</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.linkedin)}
                className="border-orange-300 hover:bg-orange-50"
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
        <h3 className="font-semibold text-gray-800 mb-4">Exportoptionen</h3>
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="outline"
            className="border-orange-300 hover:bg-orange-50"
          >
            Als PDF exportieren
          </Button>
          <Button 
            variant="outline"
            className="border-orange-300 hover:bg-orange-50"
          >
            Nach Google Docs exportieren
          </Button>
          <Button 
            variant="outline"
            className="border-orange-300 hover:bg-orange-50"
          >
            Per E-Mail teilen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
