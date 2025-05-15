
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
    // You would typically show a toast notification here
    alert("Copied to clipboard!");
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-realestate-dark">Generated Marketing Content</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
          >
            Start New Project
          </Button>
        </div>
        <p className="text-realestate-muted">
          Your AI-generated marketing content is ready. Use the tabs below to view different content types.
        </p>
      </div>
      
      {/* Property Summary Card */}
      <div className="mb-8">
        <PropertyCard property={property} />
      </div>
      
      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
        </TabsList>
        
        {/* Website Content */}
        <TabsContent value="website" className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-realestate-dark">Website Copy</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(
                  content.website.highlights + 
                  content.website.body + 
                  content.website.conclusion
                )}
              >
                Copy All
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
              <h3 className="font-bold text-realestate-dark">Email Campaign</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.email)}
              >
                Copy
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
                Facebook Ad Copy (Variant {activeFacebookVariant + 1}/{content.facebook.length})
              </h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.facebook[activeFacebookVariant])}
              >
                Copy
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
              <h3 className="font-bold text-realestate-dark">LinkedIn Post</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(content.linkedin)}
              >
                Copy
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
        <h3 className="font-semibold text-realestate-dark mb-4">Export Options</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline">
            Export as PDF
          </Button>
          <Button variant="outline">
            Export to Google Docs
          </Button>
          <Button variant="outline">
            Share via Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
