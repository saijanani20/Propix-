export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold font-heading text-slate-900 mb-2">Admin Dashboard</h1>
      <p className="text-slate-500">Platform overview, moderation queue, and user management.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Total Users</h3>
          <p className="text-2xl font-bold text-primary">15,420</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Pending Approvals</h3>
          <p className="text-2xl font-bold text-accent">45</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Reported Listings</h3>
          <p className="text-2xl font-bold text-destructive">3</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">System Status</h3>
          <p className="text-2xl font-bold text-success">Healthy</p>
        </div>
      </div>
    </div>
  );
}
