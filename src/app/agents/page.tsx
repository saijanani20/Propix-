"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, ShieldCheck, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const AGENTS = [
  { id: 1, name: "Kamal Perera", title: "Senior Property Consultant", exp: "8 Years", area: "Colombo & Suburbs", rating: 4.9, reviews: 124, sold: 45, img: "https://i.pravatar.cc/150?u=kamal" },
  { id: 2, name: "Sarah Fernando", title: "Luxury Real Estate Specialist", exp: "12 Years", area: "Colombo 7, 3, 5", rating: 5.0, reviews: 89, sold: 32, img: "https://i.pravatar.cc/150?u=sarah" },
  { id: 3, name: "Nuwan Silva", title: "Commercial Property Expert", exp: "5 Years", area: "Gampaha District", rating: 4.8, reviews: 56, sold: 78, img: "https://i.pravatar.cc/150?u=nuwan" },
  { id: 4, name: "Dilani Rajapakse", title: "Residential Land Specialist", exp: "10 Years", area: "Kandy & Central", rating: 4.7, reviews: 210, sold: 112, img: "https://i.pravatar.cc/150?u=dilani" },
  { id: 5, name: "Ashan De Silva", title: "Investment Property Advisor", exp: "6 Years", area: "Galle & Southern", rating: 4.9, reviews: 67, sold: 29, img: "https://i.pravatar.cc/150?u=ashan" },
  { id: 6, name: "Thilini Jayasuriya", title: "Apartment Sales & Rentals", exp: "4 Years", area: "Colombo City", rating: 4.8, reviews: 94, sold: 61, img: "https://i.pravatar.cc/150?u=thilini" },
];

export default function AgentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20 bg-muted/30">
        <div className="bg-primary pt-16 pb-24 px-4 md:px-6 mb-[-60px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-white blur-3xl"/>
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Find an Expert Agent</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Connect with PROPIX verified real estate professionals who know the local market inside out.</p>
            
            <div className="mt-8 max-w-2xl mx-auto flex items-center bg-white rounded-xl p-2 shadow-xl">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="w-5 h-5 text-muted-foreground"/>
                <input placeholder="Search by name or location..." className="w-full h-10 bg-transparent text-sm focus:outline-none"/>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-lg h-10 px-6 font-bold">Search</Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENTS.map(agent => (
              <div key={agent.id} className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-cover bg-center shrink-0 border border-border" style={{ backgroundImage: `url(${agent.img})` }}/>
                  <div>
                    <h2 className="font-bold text-foreground font-heading group-hover:text-primary transition-colors flex items-center gap-1.5">{agent.name} <ShieldCheck className="w-4 h-4 text-emerald-500"/></h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{agent.title}</p>
                    <div className="flex items-center gap-1 mt-1.5 text-xs font-semibold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500"/> {agent.rating} <span className="text-muted-foreground font-normal">({agent.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-muted/50 rounded-xl p-3 text-center border border-border">
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="font-bold text-foreground text-sm">{agent.exp}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center border border-border">
                    <p className="text-xs text-muted-foreground">Properties Sold</p>
                    <p className="font-bold text-foreground text-sm">{agent.sold}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <MapPin className="w-4 h-4 text-primary shrink-0"/> {agent.area}
                </div>
                <div className="flex gap-2">
                  <Link href="/consultation" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-10 font-semibold text-xs">Book Consultation</Button>
                  </Link>
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl"><Phone className="w-4 h-4 text-muted-foreground"/></Button>
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl"><Mail className="w-4 h-4 text-muted-foreground"/></Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
            <ShieldCheck className="w-12 h-12 text-emerald-600 mb-4"/>
            <h2 className="text-2xl font-bold font-heading text-emerald-900 mb-2">PROPIX Verified Agents</h2>
            <p className="text-sm text-emerald-700 leading-relaxed max-w-xl">Every agent listed on our platform is legally verified, professionally licensed by the Estate Agents Registration Board (EARB), and continuously reviewed by our community.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
