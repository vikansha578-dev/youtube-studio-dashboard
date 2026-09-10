import React from 'react';
import { 
  Home, 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  Upload, 
  Clock, 
  Settings as SettingsIcon,
  Play
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, onOpenUpload, onOpenSchedule }) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'upload', label: 'Upload Video', icon: Upload, action: onOpenUpload },
    { id: 'schedule', label: 'Schedule Video', icon: Clock, action: onOpenSchedule },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const handleItemClick = (item) => {
    if (item.action) {
      item.action();
    } else {
      setActiveTab(item.id);
    }
  };

  return (
    <aside className="w-64 bg-[#0c1019] border-r border-[#1e293b]/60 flex flex-col justify-between h-screen sticky top-0 shrink-0 select-none">
      {/* Brand Header */}
      <div>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-transparent">
          <div className="w-9 h-6 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight flex items-center gap-1">
            YouTube <span className="font-medium text-slate-300 text-lg">Studio</span>
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="px-3 py-4 space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white shadow-md shadow-red-900/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#151c2c]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Creator Profile Footer */}
      <div className="p-4 m-3 bg-[#111726] border border-[#1e293b] rounded-2xl flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
          alt="Creative Vibes"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-red-500/50"
        />
        <div className="overflow-hidden">
          <h4 className="text-sm font-semibold text-white truncate leading-tight">Creative Vibes</h4>
          <p className="text-xs text-slate-400 truncate">@creativevibes</p>
        </div>
      </div>
    </aside>
  );
}
