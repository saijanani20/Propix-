"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

const FEATURED_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?q=80&w=1974&auto=format&fit=crop",
    price: "LKR 125,000,000",
    title: "Luxury Beachfront Villa",
    location: "Mirissa, Southern Province",
    beds: 4,
    baths: 4,
    size: 4500,
    type: "Villa",
    aiScore: 98,
    verified: true,
    virtualTour: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    price: "LKR 85,000,000",
    title: "Modern Apartment in City Center",
    location: "Colombo 03",
    beds: 3,
    baths: 2,
    size: 2100,
    type: "Apartment",
    aiScore: 94,
    verified: true,
    virtualTour: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    price: "LKR 45,000,000",
    title: "Contemporary Family Home",
    location: "Pelawatta, Battaramulla",
    beds: 4,
    baths: 3,
    size: 3200,
    type: "House",
    aiScore: 89,
    verified: false,
    virtualTour: true,
  }
];

export function FeaturedProperties() {
  const [filter, setFilter] = useState("All");

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-500 max-w-2xl">
              Discover hand-picked properties selected by our AI based on your preferences, market trends, and high investment potential.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["All", "House", "Apartment", "Villa"].map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                className={`rounded-full ${filter === type ? "bg-primary text-white" : "text-slate-600 bg-white"}`}
                onClick={() => setFilter(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <div key={property.id} className={filter !== "All" && filter !== property.type ? "hidden" : "block"}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-full px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
