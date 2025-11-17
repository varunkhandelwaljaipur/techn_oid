import { TitleBanner } from "@/components/sections/TitleBanner";
import { Button } from "@/components/ui/button";

// Mock Data
const eventCategories = [
  { 
    name: "CYBER_TECH", 
    events: [
      { name: "CODING WAR", desc: "Algorithm & logic battle." },
      { name: "ROBO RACE", desc: "High-speed hardware collision." },
    ]
  },
  {
    name: "DIGITAL_ARTS",
    events: [
      { name: "CYBER HUNT", desc: "Digital treasure quest." },
      { name: "REEL MAKING", desc: "Visual data capture." },
    ]
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <TitleBanner title="EVENTS_PROTOCOL" subtitle="Accessing Mainframe..." />
      
      <section className="max-w-7xl mx-auto py-20 px-6">
        {eventCategories.map((category) => (
          <div key={category.name} className="mb-16">
            <h2 className="text-4xl font-orbitron text-neon-pink mb-8 border-b border-neon-pink/30 pb-4">
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.events.map((event) => (
                <div key={event.name} className="border border-neon-cyan/50 p-6 bg-cyber-gray/50 hover:bg-neon-cyan/10 transition-colors">
                  <h3 className="text-2xl font-orbitron text-neon-cyan mb-2">{event.name}</h3>
                  <p className="text-gray-400 font-rajdhani text-lg">{event.desc}</p>
                  <Button variant="outline" className="mt-4">
                    Register
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
