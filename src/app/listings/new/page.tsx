"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Upload, X, Home, MapPin, BedDouble, Bath, Ruler,
  DollarSign, FileText, ChevronLeft, CheckCircle2, Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const PROPERTY_TYPES = ["House", "Apartment", "Villa", "Land", "Commercial", "Condominium"];
const LOCATIONS = [
  "Borella", "Homagama", "Kadawatha", "Kottawa",
  "W4 (Wellawatta 4)", "Dehiwela", "Panadura",
  "Kiribathgoda", "Dematogoda", "W3 (Wellawatta 3)",
];
const AMENITIES = [
  "Swimming Pool", "Gym", "Security 24/7", "Parking",
  "Garden", "Air Conditioning", "Solar Panels", "CCTV",
  "Water Backup", "Generator", "Elevator", "Balcony",
];

export default function NewListingPage() {
  const [images, setImages] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleAmenity = (a: string) =>
    setSelectedAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setImages((prev) => [...prev, url]);
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, url]);
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Listing Submitted!</h2>
          <p className="text-slate-500">
            Your property has been submitted for review. Our team will verify the details and publish it within 24 hours.
          </p>
          <div className="flex flex-col gap-3">
            <Button asChild className="bg-primary hover:bg-secondary text-white rounded-xl h-12">
              <Link href="/dashboard/seller">Go to My Dashboard</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl h-12">
              <Link href="/listings/new">List Another Property</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
              <span className="font-bold text-xl uppercase tracking-wider text-primary hidden sm:block">PROPIX</span>
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">List Your Property</span>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard/buyer">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 py-10 max-w-4xl">
        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-10">
          {[
            { n: 1, label: "Property Details" },
            { n: 2, label: "Photos & Media" },
            { n: 3, label: "Pricing & Contact" },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-2 flex-1">
              <button
                onClick={() => setStep(s.n)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all ${
                  step >= s.n
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {s.n}
              </button>
              <span className={`text-sm font-medium hidden sm:block ${step >= s.n ? "text-primary" : "text-slate-400"}`}>
                {s.label}
              </span>
              {i < 2 && <div className={`flex-1 h-px ${step > s.n ? "bg-primary" : "bg-slate-200"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1 — Property Details */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Property Details</h1>
              <p className="text-slate-500 mt-1">Tell buyers about your property.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Listing Title *</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="e.g. Luxury 3-Bedroom House in Borella" className="pl-10 h-12" required />
                </div>
              </div>

              {/* Type + Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type *</label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                    <Select>
                      <SelectTrigger className="pl-10 h-12">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROPERTY_TYPES.map((t) => (
                          <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                    <Select>
                      <SelectTrigger className="pl-10 h-12">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {LOCATIONS.map((l) => (
                          <SelectItem key={l} value={l.toLowerCase().replace(/\s+/g, "_")}>{l}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Full Address */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Address</label>
                <Input placeholder="Street address, number, etc." className="h-12" />
              </div>

              {/* Beds, Baths, Size */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
                  <div className="relative">
                    <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input type="number" min={0} placeholder="0" className="pl-10 h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bathrooms</label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input type="number" min={0} placeholder="0" className="pl-10 h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Size (sq ft)</label>
                  <div className="relative">
                    <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input type="number" min={0} placeholder="0" className="pl-10 h-12" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Description *</label>
                <textarea
                  rows={4}
                  placeholder="Describe the property, key features, nearby landmarks, etc."
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Amenities</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AMENITIES.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => toggleAmenity(a)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm transition-all text-left ${
                        selectedAmenities.includes(a)
                          ? "border-primary bg-primary/5 text-primary font-semibold"
                          : "border-border bg-white text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${selectedAmenities.includes(a) ? "bg-primary" : "bg-slate-300"}`} />
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} className="h-12 px-8 bg-primary hover:bg-secondary text-white rounded-xl font-semibold">
                Next: Upload Photos →
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 — Photos */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Photos & Media</h2>
              <p className="text-slate-500 mt-1">Upload high-quality photos to attract more buyers. (Max 20 photos)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border space-y-6">
              {/* Drop Zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleImageDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                  dragging
                    ? "border-primary bg-primary/5 scale-[1.01]"
                    : "border-slate-200 hover:border-primary hover:bg-slate-50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Upload className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Drag & drop photos here</p>
                    <p className="text-sm text-slate-400 mt-1">or <span className="text-primary font-medium">click to browse</span> from your computer</p>
                  </div>
                  <p className="text-xs text-slate-400">JPG, PNG, WEBP — up to 10MB each</p>
                </div>
              </div>

              {/* Image Previews */}
              {images.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-3">{images.length} photo{images.length > 1 ? "s" : ""} uploaded</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {images.map((img, i) => (
                      <div key={i} className="relative group rounded-xl overflow-hidden aspect-square bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={`upload-${i}`} className="w-full h-full object-cover" />
                        {i === 0 && (
                          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium">
                            Cover
                          </span>
                        )}
                        <button
                          onClick={() => setImages((prev) => prev.filter((_, idx) => idx !== i))}
                          className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-xl border-2 border-dashed border-slate-200 hover:border-primary flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-primary transition-colors"
                    >
                      <ImageIcon className="w-6 h-6" />
                      <span className="text-xs font-medium">Add More</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button onClick={() => setStep(1)} variant="outline" className="h-12 px-6 rounded-xl">
                ← Back
              </Button>
              <Button onClick={() => setStep(3)} className="h-12 px-8 bg-primary hover:bg-secondary text-white rounded-xl font-semibold">
                Next: Pricing →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 — Pricing & Contact */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Pricing & Contact</h2>
              <p className="text-slate-500 mt-1">Set your price and how buyers can reach you.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border space-y-6">
              {/* Listing Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Listing Type *</label>
                <div className="grid grid-cols-2 gap-3">
                  {["For Sale", "For Rent"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="py-3 rounded-xl border-2 border-border hover:border-primary font-semibold text-slate-600 hover:text-primary transition-all"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Asking Price (LKR) *</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input type="number" placeholder="e.g. 25000000" className="pl-10 h-12" />
                </div>
                <p className="text-xs text-slate-400 mt-1">Enter the full amount in Sri Lankan Rupees (LKR)</p>
              </div>

              {/* Negotiable */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
                <span className="text-sm text-slate-600 font-medium">Price is negotiable</span>
              </label>

              {/* Divider */}
              <hr className="border-slate-100" />

              {/* Contact Details */}
              <div>
                <h3 className="font-semibold text-slate-800 mb-4">Your Contact Information</h3>
                <div className="space-y-4">
                  <Input placeholder="Full Name *" className="h-12" />
                  <Input type="email" placeholder="Email Address *" className="h-12" />
                  <Input type="tel" placeholder="Phone Number *" className="h-12" />
                </div>
              </div>

              {/* Preferred contact method */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Contact Method</label>
                <div className="flex flex-wrap gap-2">
                  {["Phone Call", "WhatsApp", "Email"].map((m) => (
                    <button
                      key={m}
                      type="button"
                      className="px-4 py-2 rounded-full border-2 border-border hover:border-primary text-sm font-medium text-slate-600 hover:text-primary transition-all"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-primary" />
                <span className="text-sm text-slate-500">
                  I confirm that all information provided is accurate and I agree to Propix&apos;s{" "}
                  <Link href="/terms" className="text-primary hover:underline">Listing Terms</Link>.
                </span>
              </label>
            </div>

            <div className="flex justify-between">
              <Button onClick={() => setStep(2)} variant="outline" className="h-12 px-6 rounded-xl">
                ← Back
              </Button>
              <Button
                onClick={() => setSubmitted(true)}
                className="h-12 px-10 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold text-base shadow-lg"
              >
                Submit Listing 🚀
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
