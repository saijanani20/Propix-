"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getFeaturedProperties, VALUATION_REQUESTS, CONSULTATION_REQUESTS } from "@/lib/data";
import { PropertyCard } from "@/components/property/PropertyCard";
import { DashboardCard } from "@/components/shared/DashboardCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Heart, Search, Calendar, MessageSquare, DollarSign, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BuyerDashboard() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => { const r = localStorage.getItem("propix_user"); if (r) setUser(JSON.parse(r)); }, []);
  const saved = getFeaturedProperties().slice(0, 3);

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-heading">Welcome, {user?.name?.split(" ")[0] ?? "Buyer"} 👋</h1>
          <p className="text-muted-foreground mt-1">Find your dream property and track your inquiries here.</p>
        </div>
        <Link href="/search"><Button className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-2"><Search className="w-4 h-4"/>Search Properties</Button></Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Saved Properties" value={saved.length} icon={Heart} color="red" />
        <DashboardCard title="Viewing Requests" value={2} icon={Calendar} color="blue" subtitle="1 scheduled" />
        <DashboardCard title="Active Inquiries" value={4} icon={MessageSquare} color="green" trend={{ value: "+2 this week", positive: true }} />
        <DashboardCard title="Financing Status" value="Active" icon={DollarSign} color="sand" subtitle="Under review" />
      </div>

      {/* Saved Properties */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground text-xl font-heading">Saved Properties</h2>
          <Link href="/search" className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">Browse More<ArrowRight className="w-4 h-4"/></Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {saved.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </div>

      {/* Consultations */}
      <div className="bg-white rounded-xl border border-border shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="font-bold text-foreground font-heading">My Consultations</h2>
          <Link href="/consultation" className="text-sm text-primary font-semibold">Book New</Link>
        </div>
        <div className="divide-y divide-border">
          {CONSULTATION_REQUESTS.slice(0, 3).map(c => (
            <div key={c.id} className="flex items-center justify-between px-5 py-4 hover:bg-muted/20 transition-colors">
              <div>
                <p className="font-medium text-foreground text-sm">{c.propertyTitle}</p>
                <p className="text-xs text-muted-foreground mt-0.5 capitalize">{c.consultationType} consultation · {c.requestedAt}</p>
                {c.scheduledDate && <p className="text-xs text-primary mt-0.5 font-medium">Scheduled: {c.scheduledDate}</p>}
              </div>
              <StatusBadge status={c.status as any} />
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: Search, label: "Search Properties", sub: "Browse all listings", href: "/search", color: "bg-primary/10 text-primary" },
          { icon: DollarSign, label: "Financing Options", sub: "Explore loan referrals", href: "/financing", color: "bg-secondary/20 text-secondary" },
          { icon: Calendar, label: "Book Consultation", sub: "Talk to an expert agent", href: "/consultation", color: "bg-accent/15 text-accent" },
        ].map((a) => (
          <Link key={a.label} href={a.href}>
            <div className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-all hover:border-primary/30 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${a.color}`}><a.icon className="w-5 h-5"/></div>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">{a.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{a.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}