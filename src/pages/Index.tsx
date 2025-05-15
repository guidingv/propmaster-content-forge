
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
          {/* Hero Section with updated design */}
          <div className="text-center space-y-6 py-12 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Immobilien Marketing <span className="text-[#9b87f5]">Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Erstellen Sie professionelle Marketingmaterialien für Ihre Immobilienangebote in Minuten, nicht Stunden.
            </p>
          </div>
          
          {/* Benefits with updated design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-[#9b87f5] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Call to action before form */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Starten Sie jetzt mit der Erstellung Ihrer Inhalte</h2>
            <p className="text-gray-600 mb-6">Füllen Sie das Formular aus und erhalten Sie in wenigen Minuten hochwertige Marketingtexte für Ihre Immobilie.</p>
          </div>
          
          {/* Form Section */}
          <div id="form" className="scroll-mt-20 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
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
