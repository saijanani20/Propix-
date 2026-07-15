import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Search, Eye, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BuyerDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 mb-2">Buyer Dashboard</h1>
          <p className="text-slate-500">Welcome back! Here is your property activity overview.</p>
        </div>
        <Button className="bg-primary hover:bg-secondary">
          Continue Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Saved Properties</CardTitle>
            <Heart className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +2 this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Recently Viewed</CardTitle>
            <Eye className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">45</div>
            <p className="text-xs text-slate-500 mt-1">Across 3 locations</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">AI Recommendations</CardTitle>
            <Search className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">8</div>
            <p className="text-xs text-slate-500 mt-1">New matches today</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Viewings</CardTitle>
            <Calendar className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">2</div>
            <p className="text-xs text-slate-500 mt-1">Scheduled for this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Placeholders for larger dashboard widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-border h-96 flex items-center justify-center bg-slate-50/50">
          <p className="text-slate-500 font-medium">Personalized AI Property Recommendations will appear here</p>
        </Card>
        <Card className="border-border h-96 flex items-center justify-center bg-slate-50/50">
          <p className="text-slate-500 font-medium">Mortgage Tracker & Financial Eligibility</p>
        </Card>
      </div>
    </div>
  );
}
