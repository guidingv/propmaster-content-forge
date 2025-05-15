
// This simulates the AI generation process until we connect real APIs
export interface GeneratedContent {
  website: {
    highlights: string;
    body: string;
    conclusion: string;
  };
  email: string;
  facebook: string[];
  linkedin: string;
}

export interface PropertyDetails {
  projectName: string;
  projectType: string;
  location: string;
  entryPrice: string;
  units: number;
  completionDate: string;
  amenities: string[];
  agent: {
    name: string;
    email: string;
    phone: string;
  };
}

// Simulates processing time for AI generation
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateContent = async (property: PropertyDetails): Promise<GeneratedContent> => {
  // Simulate API call delay
  await delay(3000);
  
  return {
    website: {
      highlights: `<h2>Introducing ${property.projectName}</h2>
<p>Located in the heart of ${property.location}, ${property.projectName} offers an unparalleled living experience starting at just ${property.entryPrice}. With ${property.units} meticulously designed units and completion expected by ${property.completionDate}, this ${property.projectType} development represents luxury living at its finest.</p>
<ul>
  <li>Premium ${property.location} location</li>
  <li>Starting from ${property.entryPrice}</li>
  <li>${property.units} luxury units available</li>
  <li>Expected completion: ${property.completionDate}</li>
</ul>`,
      
      body: `<h3>A New Standard of Living</h3>
<p>${property.projectName} redefines modern ${property.projectType} living in ${property.location}. Each residence has been thoughtfully designed to maximize space, light, and comfort while providing residents with an extensive suite of amenities.</p>

<h3>World-Class Amenities</h3>
<p>Residents will enjoy access to:</p>
<ul>
  ${property.amenities.map(amenity => `<li>${amenity}</li>`).join('\n  ')}
</ul>

<h3>Prime Location</h3>
<p>Situated in ${property.location}, residents will enjoy easy access to shopping, dining, entertainment, and transportation options. The neighborhood offers a perfect balance of convenience and tranquility, making it an ideal place to call home.</p>`,
      
      conclusion: `<h3>Limited Availability</h3>
<p>With only ${property.units} units available and high demand expected, interested buyers are encouraged to contact us soon to secure their preferred unit.</p>

<h3>Contact Information</h3>
<p>For more information about ${property.projectName} or to schedule a private consultation, please contact:</p>
<p><strong>${property.agent.name}</strong><br>
Email: ${property.agent.email}<br>
Phone: ${property.agent.phone}</p>`
    },
    
    email: `Subject: Exclusive Opportunity: ${property.projectName} in ${property.location} - Starting at ${property.entryPrice}

Dear [Prospect],

I'm excited to introduce you to ${property.projectName}, our newest ${property.projectType} development in the heart of ${property.location}.

Starting at just ${property.entryPrice}, these ${property.units} luxury units offer:

- Premium ${property.location} location
- Exceptional design and finishes
- World-class amenities including ${property.amenities.slice(0, 3).join(', ')}
- Expected completion: ${property.completionDate}

As a valued client, you have early access to this exclusive opportunity before our public launch next week.

Would you be available for a private presentation of ${property.projectName}? I have times available this Thursday and Friday.

Best regards,

${property.agent.name}
${property.agent.phone}
${property.agent.email}`,
    
    facebook: [
      `🏡 JUST LAUNCHED: ${property.projectName} in ${property.location} 🏡\n\nLuxury ${property.projectType} living starting at ${property.entryPrice}. Only ${property.units} units available!\n\nAmenities include ${property.amenities.slice(0, 3).join(', ')} and much more.\n\nCompletion expected by ${property.completionDate}. Contact ${property.agent.name} at ${property.agent.phone} to learn more!`,
      
      `Discover a new standard of living at ${property.projectName}! ✨\n\nNestled in the heart of ${property.location}, this exclusive ${property.projectType} development offers luxury residences starting at just ${property.entryPrice}.\n\nDM us or call ${property.agent.name} at ${property.agent.phone} to secure your unit today!`,
      
      `Life at ${property.projectName} means waking up to luxury every day. 🌞\n\nImagine having access to ${property.amenities.join(', ')} right at your doorstep!\n\nWith only ${property.units} units available in prime ${property.location}, these won't last long.\n\nContact ${property.agent.name} today: ${property.agent.phone}`
    ],
    
    linkedin: `I'm excited to announce the launch of ${property.projectName}, a premium ${property.projectType} development in ${property.location}.\n\nOffering ${property.units} luxury units starting at ${property.entryPrice}, ${property.projectName} features exceptional amenities including ${property.amenities.join(', ')}.\n\nExpected completion is set for ${property.completionDate}, and we're already seeing strong interest from investors and homebuyers alike.\n\nFeel free to reach out if you'd like to learn more about this exciting opportunity.\n\n#RealEstate #${property.location.replace(/\s+/g, '')} #LuxuryLiving #Investment`
  };
};
