
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
        title: "Inhalt erstellt!",
        description: "Ihre Marketinginhalte wurden erfolgreich generiert.",
      });
    } catch (error) {
      console.error("Fehler bei der Inhaltserstellung:", error);
      toast({
        title: "Erstellung fehlgeschlagen",
        description: "Es gab einen Fehler bei der Generierung Ihrer Inhalte. Bitte versuchen Sie es erneut.",
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
              Immobilien Marketing <span className="text-realestate-primary">Automation</span>
            </h1>
            <p className="text-xl text-realestate-muted max-w-2xl mx-auto">
              Erstellen Sie professionelle Marketingmaterialien für Ihre Immobilienangebote in Minuten, nicht Stunden.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Zeit sparen",
                description: "Generieren Sie Inhalte für Wochen in nur wenigen Minuten mit unserem KI-gestützten System."
              },
              {
                title: "Professionelle Qualität",
                description: "Erhalten Sie SEO-optimierte, ansprechende Inhalte, maßgeschneidert für Ihre spezifische Immobilie."
              },
              {
                title: "Multi-Kanal-Ready",
                description: "Website-Texte, E-Mail-Kampagnen und Social-Media-Beiträge aus einem Formular."
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
