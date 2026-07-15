import { ShieldCheck, BrainCircuit, CreditCard, CheckCircle, Users, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES = [
  {
    title: "Verified Listings",
    description: "Every property is manually checked and verified for authenticity to ensure a safe transaction.",
    icon: ShieldCheck,
  },
  {
    title: "AI Smart Search",
    description: "Our intelligent algorithms learn your preferences to recommend properties that perfectly match your needs.",
    icon: BrainCircuit,
  },
  {
    title: "Secure Payments",
    description: "Integrated with LANKAQR and JustPay for seamless, secure, and instant booking deposits.",
    icon: CreditCard,
  },
  {
    title: "Property Verification",
    description: "Digital document checks and electronic agreements for a completely transparent process.",
    icon: CheckCircle,
  },
  {
    title: "Trusted Agents",
    description: "Connect with the top-rated, certified real estate professionals across Sri Lanka.",
    icon: Users,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team and AI assistant are available round the clock to help you.",
    icon: HeadphonesIcon,
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Why Choose LankaEstate?
          </h2>
          <p className="text-slate-500 text-lg">
            We are redefining the Sri Lankan real estate experience with cutting-edge technology, unparalleled security, and premium service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
