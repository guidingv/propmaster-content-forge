
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import Layout from '@/components/Layout';
import StepForm from '@/components/StepForm';
import ResultsView from '@/components/ResultsView';
import { PropertyDetails, GeneratedContent, generateContent } from '@/utils/mockGenerator';

const Index = () => {
  const [property, setProperty] = useState<PropertyDetails | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFormSubmit = async (data: PropertyDetails) => {
    setIsGenerating(true);
    setProperty(data);
    
    try {
      const content = await generateContent(data);
      setGeneratedContent(content);
      toast({
        title: "Content Generated!",
        description: "Your marketing content has been successfully created.",
      });
    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setProperty(null);
    setGeneratedContent(null);
  };

  return (
    <Layout>
      {!property || !generatedContent ? (
        <div className="space-y-10">
          {/* Hero Section */}
          <div className="text-center space-y-4 py-8">
            <h1 className="text-4xl font-bold text-realestate-dark">
              Real Estate Marketing <span className="text-realestate-primary">Automation</span>
            </h1>
            <p className="text-xl text-realestate-muted max-w-2xl mx-auto">
              Create professional marketing materials for your real estate listings in minutes, not hours.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Save Time",
                description: "Generate weeks worth of content in just minutes with our AI-powered system."
              },
              {
                title: "Professional Quality",
                description: "Get SEO-optimized, engaging content tailored to your specific property."
              },
              {
                title: "Multi-Channel Ready",
                description: "Website copy, email campaigns, and social media posts all from one form."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-realestate-primary mb-2">{benefit.title}</h3>
                <p className="text-realestate-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Form Section */}
          <div id="form" className="scroll-mt-20">
            <StepForm onSubmit={handleFormSubmit} isLoading={isGenerating} />
          </div>
        </div>
      ) : (
        <ResultsView 
          property={property} 
          content={generatedContent} 
          onReset={resetForm} 
        />
      )}
    </Layout>
  );
};

export default Index;
