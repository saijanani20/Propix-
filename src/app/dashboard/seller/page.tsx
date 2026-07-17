"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PROPERTIES } from "@/lib/data";
import { DashboardCard } from "@/components/shared/DashboardCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Home, Clock, CheckCircle, MessageSquare, PlusCircle, ArrowRight, Eye, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SellerDashboard() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => { const r = localStorage.getItem("propix_user"); if (r) setUser(JSON.parse(r)); }, []);

  const myListings = PROPERTIES.filter((p) => p.sellerId === "user-seller-01");
  const approved = myListings.filter(p => p.status === "approved");
  const pending = myListings.filter(p => p.status === "pending");
  const totalViews = myListings.reduce((s, p) => s + p.views, 0);
  const totalInquiries = myListings.reduce((s, p) => s + p.inquiries, 0);

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-heading">Welcome back, {user?.name?.split(" ")[0] ?? "Seller"} 👋</h1>
          <p className="text-muted-foreground mt-1">Here is an overview of your property listings and activity.</p>
        </div>
        <Link href="/listings/new">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-2"><PlusCircle className="w-4 h-4" />Add New Property</Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Total Listings" value={myListings.length} icon={Home} subtitle="All properties" color="green" trend={{ value: "+2 this month", positive: true }} />
        <DashboardCard title="Pending Review" value={pending.length} icon={Clock} subtitle="Awaiting admin" color="amber" />
        <DashboardCard title="Total Views" value={totalViews.toLocaleString()} icon={Eye} subtitle="Across all listings" color="blue" trend={{ value: "+180 this week", positive: true }} />
        <DashboardCard title="Buyer Inquiries" value={totalInquiries} icon={MessageSquare} subtitle="Total received" color="purple" trend={{ value: "+5 this week", positive: true }} />
      </div>

      {/* Recent listings */}
      <div className="bg-white rounded-xl border border-border shadow-sm">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-bold text-foreground font-heading">My Listings</h2>
          <Link href="/dashboard/seller/listings" className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">View All<ArrowRight className="w-4 h-4"/></Link>
        </div>
        <div className="divide-y divide-border">
          {myListings.slice(0, 5).map((p) => (
            <div key={p.id} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${p.images[0]})` }} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">{p.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.location}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-bold text-primary">{p.priceLabel}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Eye className="w-3 h-3"/>{p.views} views</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><MessageSquare className="w-3 h-3"/>{p.inquiries} inquiries</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <StatusBadge status={p.status} />
                <Link href={`/properties/${p.id}`} className="text-xs text-primary hover:underline">View Listing</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: PlusCircle, label: "Add New Property", sub: "List a new property", href: "/listings/new", color: "bg-primary/10 text-primary" },
          { icon: TrendingUp, label: "Get a Valuation", sub: "Know your property value", href: "/valuation", color: "bg-secondary/20 text-secondary" },
          { icon: DollarSign, label: "Feature a Listing", sub: "Boost your property visibility", href: "/payment", color: "bg-accent/15 text-accent" },
        ].map((a) => (
          <Link key={a.label} href={a.href}>
            <div className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-all hover:border-primary/30 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${a.color}`}><a.icon className="w-5 h-5" /></div>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">{a.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{a.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}