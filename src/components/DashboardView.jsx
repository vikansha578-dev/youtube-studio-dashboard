import React from 'react';
import { TrendingUp, Users, Eye, Clock, DollarSign, ArrowUpRight, Award } from 'lucide-react';

export default function DashboardView() {
  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Channel Analytics & Performance</h1>
        <p className="text-slate-400 text-sm mt-1">Detailed stats, audience growth, and revenue reports.</p>
      </div>

      {/* Main Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Total Views</span>
            <Eye className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-3xl font-extrabold text-white">125,480</p>
          <p className="text-xs text-emerald-400 font-semibold mt-2">↑ +12.5% vs last 28 days</p>
        </div>

        <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Watch Time (Hours)</span>
            <Clock className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-3xl font-extrabold text-white">4,812 hrs</p>
          <p className="text-xs text-emerald-400 font-semibold mt-2">↑ +12.4% vs last 28 days</p>
        </div>

        <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Subscribers</span>
            <Users className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-3xl font-extrabold text-white">+3,240</p>
          <p className="text-xs text-emerald-400 font-semibold mt-2">↑ +24.8% vs last 28 days</p>
        </div>

        <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Estimated Revenue</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-3xl font-extrabold text-white">$248.75</p>
          <p className="text-xs text-emerald-400 font-semibold mt-2">↑ +16.8% vs last 28 days</p>
        </div>
      </div>

      {/* Visual Mock Chart */}
      <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Views Overview (Last 30 Days)</h3>
            <p className="text-xs text-slate-400">Daily breakdown of channel impressions</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold">
              Views
            </span>
            <span className="px-3 py-1 bg-[#1a2338] text-slate-400 rounded-lg text-xs font-medium">
              Subscribers
            </span>
          </div>
        </div>

        {/* Custom Bar Graph Visualization */}
        <div className="h-48 flex items-end gap-2 pt-6 pb-2 border-b border-[#1e293b]">
          {[35, 45, 30, 65, 80, 55, 90, 75, 85, 100, 70, 95, 110, 85, 90].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              <div 
                className="w-full bg-gradient-to-t from-red-700 to-red-500 rounded-t group-hover:brightness-125 transition-all"
                style={{ height: `${val}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500 font-medium">
          <span>May 1</span>
          <span>May 8</span>
          <span>May 15</span>
          <span>May 22</span>
          <span>May 29</span>
        </div>
      </div>
    </div>
  );
}
