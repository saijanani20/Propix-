import { Building2, Users2, CheckCircle2, TrendingUp } from "lucide-react";

const STATS = [
  { label: "Properties Sold", value: "2,500+", icon: Building2 },
  { label: "Active Listings", value: "10,000+", icon: TrendingUp },
  { label: "Registered Agents", value: "850+", icon: Users2 },
  { label: "Happy Customers", value: "15,000+", icon: CheckCircle2 },
];

export function Statistics() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border-y border-white/10 py-12">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-2">{stat.value}</h3>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
