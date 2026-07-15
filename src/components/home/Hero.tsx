"use client";

import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CATEGORIES = ["Sales", "Rentals", "Land", "New Development"];

const LOCATIONS = [
  { value: "current", label: "📍 Use Current Location" },
  { value: "borella", label: "Borella" },
  { value: "homagama", label: "Homagama" },
  { value: "kadawatha", label: "Kadawatha" },
  { value: "kottawa", label: "Kottawa" },
  { value: "w4", label: "W4 (Wellawatta 4)" },
  { value: "dehiwela", label: "Dehiwela" },
  { value: "panadura", label: "Panadura" },
  { value: "kiribathgoda", label: "Kiribathgoda" },
  { value: "dematogoda", label: "Dematogoda" },
  { value: "w3", label: "W3 (Wellawatta 3)" },
];

export function Hero() {
  const [activeCategory, setActiveCategory] = useState("Sales");

  return (
    <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center mt-16">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mb-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-md">
            Find Your <span className="text-accent">Dream</span> Property in Sri Lanka
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-sm font-medium">
            AI-powered recommendations to discover premium homes, luxury apartments, and lucrative investments.
          </p>
        </motion.div>

        {/* Search Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          {/* Category Tabs */}
          <div className="flex gap-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wide rounded-t-lg transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Search Row */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-3">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Location Dropdown */}
              <div className="flex-1 flex items-center h-13 bg-slate-50 rounded-xl px-3 border border-slate-200">
                <MapPin className="text-slate-400 w-5 h-5 mr-2 shrink-0" />
                <Select>
                  <SelectTrigger className="border-0 bg-transparent shadow-none focus:ring-0 text-base text-slate-700 h-12">
                    <SelectValue placeholder="Type a city name or pick area" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATIONS.map((loc) => (
                      <SelectItem
                        key={loc.value}
                        value={loc.value}
                        className={loc.value === "current" ? "font-semibold text-primary" : ""}
                      >
                        {loc.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className="h-13 px-10 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-base w-full md:w-auto shrink-0 transition-all shadow-md">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Filter Pills Row */}
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100">
              {[
                { label: "Radius", options: ["500m", "1km", "2km", "5km", "10km"] },
                { label: "Property Type", options: ["House", "Apartment", "Villa", "Land", "Commercial"] },
                { label: "Max Price", options: ["Under 10M", "Under 20M", "Under 50M", "Under 100M", "100M+"] },
                { label: "Max Bedroom", options: ["1+", "2+", "3+", "4+", "5+"] },
              ].map((filter) => (
                <Select key={filter.label}>
                  <SelectTrigger className="h-9 px-4 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-primary hover:text-primary transition-colors w-auto gap-2 shadow-none">
                    <SelectValue placeholder={filter.label} />
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.options.map((opt) => (
                      <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, "_")}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trending Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-2 items-center text-sm text-white/80"
        >
          <span className="font-medium mr-2">Trending:</span>
          {["Borella", "Dehiwela", "Kottawa", "Homagama"].map((area) => (
            <span
              key={area}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer backdrop-blur-md transition-colors border border-white/10"
            >
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
