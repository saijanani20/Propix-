"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PropertyCard } from "@/components/property/PropertyCard";
import { getApprovedProperties, DISTRICTS, PROPERTY_TYPES_OPTIONS } from "@/lib/data";
import { SlidersHorizontal, Grid2X2, List, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SORT_OPTIONS = ["Recommended", "Newest", "Price: Low to High", "Price: High to Low"];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("Recommended");

  const [filters, setFilters] = useState({
    listingType: (searchParams.get("type") || "all") as "sale" | "rent" | "all",
    district: searchParams.get("district") || "all",
    category: searchParams.get("category") || "all",
    minPrice: 0,
    maxPrice: 0,
    beds: 0,
    verifiedOnly: false,
  });

  const allProps = getApprovedProperties();

  const filtered = useMemo(() => {
    let results = allProps.filter((p) => {
      if (filters.listingType !== "all" && p.listingType !== filters.listingType) return false;
      if (filters.district !== "all" && !p.district.toLowerCase().includes(filters.district.toLowerCase()) && !p.location.toLowerCase().includes(filters.district.toLowerCase())) return false;
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.beds > 0 && p.beds < filters.beds) return false;
      if (filters.verifiedOnly && !p.verified) return false;
      return true;
    });
    if (sort === "Price: Low to High") results = [...results].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") results = [...results].sort((a, b) => b.price - a.price);
    if (sort === "Newest") results = [...results].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return results;
  }, [filters, sort, allProps]);

  const setF = (k: keyof typeof filters, v: unknown) => setFilters((f) => ({ ...f, [k]: v }));

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Listing Type */}
      <div>
        <label className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 block">Listing Type</label>
        <div className="flex gap-2">
          {[["all","All"],["sale","For Sale"],["rent","For Rent"]].map(([v,l]) => (
            <button key={v} onClick={() => setF("listingType", v as "sale"|"rent"|"all")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${filters.listingType === v ? "bg-primary text-white border-primary" : "bg-white border-border text-foreground hover:border-primary"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* District */}
      <div>
        <label className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 block">District</label>
        <div className="relative">
          <select value={filters.district} onChange={(e) => setF("district", e.target.value)}
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none">
            <option value="all">All Districts</option>
            {DISTRICTS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 block">Property Type</label>
        <div className="relative">
          <select value={filters.category} onChange={(e) => setF("category", e.target.value)}
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none">
            <option value="all">All Types</option>
            {PROPERTY_TYPES_OPTIONS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 block">Min. Bedrooms</label>
        <div className="flex gap-2">
          {[0,1,2,3,4,5].map((n) => (
            <button key={n} onClick={() => setF("beds", n)}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${filters.beds === n ? "bg-primary text-white border-primary" : "bg-white border-border text-foreground hover:border-primary"}`}>
              {n === 0 ? "Any" : `${n}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Verified Only */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer">
          <div className={`w-11 h-6 rounded-full transition-all relative ${filters.verifiedOnly ? "bg-primary" : "bg-border"}`}
            onClick={() => setF("verifiedOnly", !filters.verifiedOnly)}>
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${filters.verifiedOnly ? "left-6" : "left-1"}`} />
          </div>
          <span className="text-sm font-medium text-foreground">Verified Listings Only</span>
        </label>
      </div>

      <Button onClick={() => setFilters({ listingType: "all", district: "all", category: "all", minPrice: 0, maxPrice: 0, beds: 0, verifiedOnly: false })}
        variant="outline" className="w-full rounded-xl">Clear All Filters</Button>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30 pt-16">
        {/* Top bar */}
        <div className="bg-white border-b border-border sticky top-16 z-30">
          <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileFilters(true)} className="lg:hidden flex items-center gap-2 text-sm font-semibold text-foreground bg-muted px-3 py-1.5 rounded-lg">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <p className="text-sm font-semibold text-foreground">
                <span className="text-primary">{filtered.length}</span> properties found
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <select value={sort} onChange={(e) => setSort(e.target.value)}
                  className="bg-white border border-border rounded-lg px-3 py-1.5 text-sm font-medium focus:outline-none appearance-none pr-8">
                  {SORT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              <div className="flex gap-1 bg-muted rounded-lg p-1">
                <button onClick={() => setView("grid")} className={`p-1.5 rounded ${view === "grid" ? "bg-white shadow-sm" : ""}`}><Grid2X2 className="w-4 h-4" /></button>
                <button onClick={() => setView("list")} className={`p-1.5 rounded ${view === "list" ? "bg-white shadow-sm" : ""}`}><List className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex gap-8">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-xl border border-border p-6 shadow-sm sticky top-32">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-foreground">Filters</h2>
                  <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                </div>
                <FilterPanel />
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl border border-border">
                  <p className="text-4xl mb-3">🏡</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">No properties found</h3>
                  <p className="text-muted-foreground text-sm">Try adjusting your filters to find more results.</p>
                </div>
              ) : (
                <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "space-y-4"}>
                  {filtered.map((p) => <PropertyCard key={p.id} property={p} />)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filter drawer */}
        {mobileFilters && (
          <div className="fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
            <div className="relative bg-white w-80 ml-auto h-full overflow-y-auto p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-foreground text-lg">Filters</h2>
                <button onClick={() => setMobileFilters(false)}><X className="w-5 h-5" /></button>
              </div>
              <FilterPanel />
              <Button onClick={() => setMobileFilters(false)} className="w-full mt-6 bg-primary hover:bg-primary/90 text-white rounded-xl">
                Show {filtered.length} Results
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
