export default function AgentDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold font-heading text-slate-900 mb-2">Agent Dashboard</h1>
      <p className="text-slate-500">Manage clients, track leads, and view performance analytics.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Active Leads</h3>
          <p className="text-2xl font-bold text-primary">24</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Appointments</h3>
          <p className="text-2xl font-bold text-primary">8</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Properties</h3>
          <p className="text-2xl font-bold text-primary">15</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Commission</h3>
          <p className="text-2xl font-bold text-primary">LKR 1.2M</p>
        </div>
      </div>
    </div>
  );
}
