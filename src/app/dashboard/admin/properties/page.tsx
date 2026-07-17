"use client";
import { useState } from "react";
import { PROPERTIES } from "@/lib/data";
import { StatusBadge } from "@/components/shared/StatusBadge";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function AdminPropertiesPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PROPERTIES : PROPERTIES.filter(p => p.status === filter);
  return (
    <div className="space-y-6 max-w-6xl">
      <div><h1 className="text-2xl font-bold text-foreground font-heading">All Properties</h1><p className="text-muted-foreground mt-1">{PROPERTIES.length} total listings on the platform</p></div>
      <div className="flex gap-2 flex-wrap">
        {["all","approved","pending","rejected"].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 rounded-full text-sm font-semibold capitalize border transition-all ${filter === s ? "bg-primary text-white border-primary" : "bg-white border-border text-foreground hover:border-primary"}`}>{s === "all" ? `All (${PROPERTIES.length})` : `${s} (${PROPERTIES.filter(p=>p.status===s).length})`}</button>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-border shadow-sm divide-y divide-border">
        {filtered.map((p) => (
          <div key={p.id} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/20 transition-colors">
            <div className="w-16 h-12 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${p.images[0]})` }} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground text-sm truncate">{p.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{p.location} · {p.priceLabel} · {p.category}</p>
              <p className="text-xs text-muted-foreground">Listed: {p.createdAt} · {p.views} views · {p.inquiries} inquiries</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <StatusBadge status={p.status} />
              {p.verified && <StatusBadge status="verified" />}
              <Link href={`/properties/${p.id}`} className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Eye className="w-4 h-4 text-muted-foreground"/></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}