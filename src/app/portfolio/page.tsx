'use client';

import { useState } from 'react';
import Image from 'next/image';

const portfolioSections = [
  {
    title: "Additional / Seasonal Rooms",
    description: "Expand your living space with our beautifully crafted additions and seasonal rooms. Perfect for enjoying every season from the comfort of your home.",
    images: ["/addroom1.jpeg", "/addroom2.jpg", "/addroom3.jpg", "/addroom5.jpg", "/addroom6.jpg", "/addroom7.jpg", "/addroom8.jpg", "/addroom9.jpg", "/addroom10.jpg", "/addroom11.jpg"],
  },
  {
    title: "Decks / Landscaping",
    description: "Transform your backyard into a personal oasis with our custom decks and professional landscaping services. We create stunning, functional outdoor spaces for relaxation and entertainment.",
    images: ["/deck1.jpg", "/deck2.jpg", "/deck3.jpg", "/deck4.jpg", "/deck5.jpg", "/deck6.jpg", "/deck7.jpg", "/deck8.jpg", "/deck9.jpg", "/deck10.jpg", "/deck11.jpg", "/deck12.jpg", "/deck13.jpg", "/deck14.jpg", "/deck15.jpeg", "/deck16.jpg", "/deck17.jpg", "/deck18.jpg"],
  },
  {
    title: "Kitchens",
    description: "The heart of your home deserves to be both beautiful and functional. We design and build dream kitchens with meticulous attention to detail, from custom cabinetry to modern finishes.",
    images: ["/kitch1.jpg", "/kitch2.jpg", "/kitch3.jpg", "/kitch4.jpg", "/kitch5.jpg", "/kitch6.jpg", "/kitch7.jpg", "/kitch8.jpg", "/kitch9.jpg", "/kitch10.jpg", "/kitch11.jpg", "/kitch12.jpg", "/kitch13.jpg", "/kitch14.jpg", "/kitch15.jpg", "/kitch16.jpg", "/kitch17.jpg", "/kitch18.jpg", "/kitch19.jpg", "/kitch20.jpg", "/kitch21.jpg", "/kitch22.jpg"],
  },
  {
    title: "Bathrooms",
    description: "Create a spa-like retreat with our custom bathroom renovations. We handle everything from tiling and plumbing to fixtures and lighting to build a space of comfort and luxury.",
    images: ["/bath1.jpg", "/bath2.jpeg", "/bath3.jpeg", "/bath4.jpeg", "/bath5.jpg", "/bath6.jpg", "/bath7.jpg", "/bath8.jpg", "/bath9.jpg", "/bath10.jpg", "/bath11.jpg", "/bath12.jpg", "/bath13.jpg", "/bath14.jpg", "/bath15.jpg", "/bath16.jpg", "/bath17.jpg", "/bath18.jpg", "/bath19.jpeg", "/bath20.jpeg", "/bath21.jpeg", "/bath22.jpeg", "/bath23.jpeg", "/bath24.jpeg", "/bath25.jpeg", "/bath26.jpg", "/bath27.jpg", "/bath28.jpg", "/bath29.jpg", "/bath30.jpg", "/bath31.jpg", "/bath32.jpg", "/bath33.jpg", "/bath34.jpg", "/bath35.jpg", "/bath36.jpg", "/bath37.jpg", "/bath38.jpg", "/bath39.jpg", "/bath40.jpg", "/bath41.jpg", "/bath42.jpg", "/bath43.jpg"],
  },
  {
    title: "Basements",
    description: "Unlock the full potential of your home with a finished basement. Whether you envision a cozy family room, a home theater, or a personal gym, we can bring your ideas to life.",
    images: ["/base1.jpg", "/base2.jpg", "/base3.jpg", "/base4.jpg", "/base5.jpg", "/base6.jpg", "/base7.jpg", "/base8.jpg", "/base9.jpg", "/base10.jpg", "/base11.jpg", "/base12.jpg", "/base13.jpg", "/base14.jpg", "/base15.jpg", "/base16.jpg"],
  },
  {
    title: "Fireplaces",
    description: "Add warmth, character, and a stunning focal point to any room with a custom-built fireplace. We work with a variety of materials to match your home's style.",
    images: ["/fire1.jpg", "/fire2.jpg", "/fire3.jpg", "/fire4.jpg", "/fire5.jpg", "/fire6.jpg", "/fire7.jpg", "/fire8.jpg", "/fire9.jpg", "/fire10.jpg", "/fire11.jpg", "/fire12.jpg", "/fire13.jpg", "/fire14.jpg", "/fire15.jpeg", "/fire16.jpg", "/fire17.jpg"],
  },
  {
    title: "Things we've built",
    description: "From custom shelving to unique built-ins and special projects, our craftsmanship extends to all corners of the home. Explore some of the unique solutions we've created for our clients.",
    images: ["/things1.jpeg", "/things2.jpeg", "/things3.jpeg", "/things4.jpeg", "/things5.jpeg", "/things6.jpeg", "/things7.jpeg"],
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(portfolioSections[0].title);

  const activeContent = portfolioSections.find(section => section.title === activeSection);

  return (
    <main className="bg-[#212121] text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Work</h1>
        <p className="text-lg text-neutral-300 text-center max-w-3xl mx-auto mb-12">
          Explore our portfolio to see the quality and variety of our work. Click a category to see project photos and learn more.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {portfolioSections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section.title)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeSection === section.title 
                ? 'bg-white text-[#212121] shadow-md' 
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        {activeContent && (
          <div className="bg-neutral-800 text-white p-6 md:p-8 rounded-xl shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-white">{activeContent.title}</h2>
            <p className="text-neutral-300 mb-8 max-w-prose">{activeContent.description}</p>
            
            {activeContent.images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {activeContent.images.map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                    <Image
                      src={img}
                      alt={`${activeContent.title} project image ${index + 1}`}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-neutral-600 rounded-lg">
                <p className="text-neutral-400 italic">More photos coming soon. Check back later!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

// Add this to your globals.css or a style tag if you haven't already
/*
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-in-out;
}
*/ 