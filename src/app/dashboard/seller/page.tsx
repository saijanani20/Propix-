export default function SellerDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold font-heading text-slate-900 mb-2">Seller Dashboard</h1>
      <p className="text-slate-500">Manage your property listings, view analytics, and track buyer inquiries.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Active Listings</h3>
          <p className="text-2xl font-bold text-primary">3</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Total Views</h3>
          <p className="text-2xl font-bold text-primary">1,245</p>
        </div>
        <div className="border border-border p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-1">Inquiries</h3>
          <p className="text-2xl font-bold text-primary">12</p>
        </div>
      </div>
    </div>
  );
}
