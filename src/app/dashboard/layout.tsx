import Link from "next/link";
import { User, Home, PieChart, Settings, LogOut, MessageSquare } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-border md:h-screen md:sticky top-0 flex flex-col">
        <div className="p-6 border-b border-border flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg">
            L
          </div>
          <span className="font-heading font-bold text-xl text-slate-900">
            LankaEstate
          </span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <PieChart className="w-5 h-5 text-slate-500" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="/dashboard/properties" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <Home className="w-5 h-5 text-slate-500" />
            <span className="font-medium">Properties</span>
          </Link>
          <Link href="/dashboard/messages" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <MessageSquare className="w-5 h-5 text-slate-500" />
            <span className="font-medium">Messages</span>
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <User className="w-5 h-5 text-slate-500" />
            <span className="font-medium">Profile</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <LogOut className="w-5 h-5 text-slate-500" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl">
        {children}
      </main>
    </div>
  );
}
