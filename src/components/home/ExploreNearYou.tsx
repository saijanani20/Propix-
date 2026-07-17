"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Home } from "lucide-react";

const PINS = [
  { id: "prop-001", title: "Colombo 7 House", price: "LKR 75M", top: "28%", left: "22%", hot: true },
  { id: "prop-004", title: "Galle Fort Villa", price: "LKR 145M", top: "72%", left: "30%", hot: true },
  { id: "prop-003", title: "Kandy Land", price: "LKR 18.5M", top: "38%", left: "52%", hot: false },
  { id: "prop-008", title: "Gampaha Commercial", price: "LKR 180K/mo", top: "20%", left: "35%", hot: false },
  { id: "prop-006", title: "Kurunegala House", price: "LKR 22M", top: "33%", left: "40%", hot: false },
  { id: "prop-012", title: "Colombo 5 Penthouse", price: "LKR 95M", top: "30%", left: "25%", hot: true },
];

export function ExploreNearYou() {
  const [radius, setRadius] = useState("5 km");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Location Discovery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Explore Properties Near You</h2>
            <p className="text-muted-foreground mt-2">Discover properties within your preferred radius across Sri Lanka</p>
          </div>
          <div className="flex gap-2">
            {["5 km", "10 km", "25 km"].map((r) => (
              <button key={r} onClick={() => setRadius(r)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${radius === r ? "bg-primary text-white border-primary" : "bg-white border-border text-foreground hover:border-primary hover:text-primary"}`}>
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden border border-border shadow-lg">
          {/* Stylized Sri Lanka map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1B4332" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Ocean-like background */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-100/60 rounded-l-full" />
            {/* Island outline approximation */}
            <div className="absolute left-1/4 top-1/6 w-2/5 h-4/5 bg-emerald-100/80 rounded-[40%_50%_60%_40%/50%_40%_60%_50%]" />
          </div>

          {/* Property Pins */}
          {PINS.map((pin) => (
            <div key={pin.id} className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
              style={{ top: pin.top, left: pin.left }}
              onMouseEnter={() => setHovered(pin.id)}
              onMouseLeave={() => setHovered(null)}>
              {/* Tooltip */}
              {hovered === pin.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-white shadow-xl rounded-xl px-3 py-2 text-center min-w-[140px] border border-border z-20 whitespace-nowrap">
                  <p className="text-xs font-bold text-foreground">{pin.title}</p>
                  <p className="text-xs text-primary font-semibold">{pin.price}</p>
                  <Link href={`/properties/${pin.id}`} className="text-[10px] text-accent hover:underline">View Property →</Link>
                </div>
              )}
              {/* Pin */}
              <div className={`flex flex-col items-center`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform group-hover:scale-110 ${pin.hot ? "bg-accent" : "bg-primary"}`}>
                  <Home className="w-4 h-4 text-white" />
                </div>
                <div className={`w-2 h-2 rounded-full mt-0.5 ${pin.hot ? "bg-accent" : "bg-primary"}`} />
              </div>
            </div>
          ))}

          {/* Radius circle indicator */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-border shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Showing within {radius}</p>
                <p className="text-xs text-muted-foreground">{PINS.length} properties found</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-border shadow-md">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs"><div className="w-3 h-3 rounded-full bg-accent" /><span className="text-muted-foreground">Featured</span></div>
              <div className="flex items-center gap-2 text-xs"><div className="w-3 h-3 rounded-full bg-primary" /><span className="text-muted-foreground">Standard</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
