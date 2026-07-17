"use client";
export default function AgentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground font-heading">Agent Dashboard</h1>
      <p className="text-muted-foreground">Welcome, Agent. Your client management tools are here.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {["Active Clients: 8","Consultations Today: 3","Properties Managed: 12"].map(s => (
          <div key={s} className="bg-white rounded-xl border border-border p-5 shadow-sm">
            <p className="font-semibold text-foreground">{s.split(":")[0]}</p>
            <p className="text-3xl font-bold text-primary mt-1">{s.split(":")[1].trim()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}