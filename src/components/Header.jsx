import React, { useState } from 'react';
import { Search, Bell, HelpCircle, User, LogOut, Settings } from 'lucide-react';

export default function Header({ searchQuery, setSearchQuery }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  return (
    <header className="h-18 bg-[#090d16]/80 backdrop-blur-md border-b border-[#1e293b]/50 px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
      {/* Search Input Bar */}
      <div className="relative w-full max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search anything..."
          className="w-full bg-[#111726] border border-[#1e293b] text-slate-200 text-sm rounded-full pl-11 pr-4 py-2.5 outline-none focus:border-red-500/80 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-slate-500"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Notifications Button */}
        <button 
          onClick={() => setHasUnread(false)}
          className="relative p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-[#151c2c] transition-colors"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          {hasUnread && (
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-[#090d16] animate-pulse"></span>
          )}
        </button>

        {/* Help Button */}
        <button 
          className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-[#151c2c] transition-colors"
          title="Help & Support"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* User Avatar Menu Dropdown */}
        <div className="relative ml-2">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center justify-center p-0.5 rounded-full ring-2 ring-transparent hover:ring-red-500/80 transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="User profile"
              className="w-9 h-9 rounded-full object-cover"
            />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-[#111726] border border-[#1e293b] rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-[#1e293b]">
                <p className="text-sm font-semibold text-white">Creative Vibes</p>
                <p className="text-xs text-slate-400">creativevibes@studio.com</p>
              </div>
              <button className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-[#1b2336] flex items-center gap-2.5">
                <User className="w-4 h-4 text-slate-400" />
                <span>Your Channel</span>
              </button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-[#1b2336] flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-slate-400" />
                <span>Studio Settings</span>
              </button>
              <div className="my-1 border-t border-[#1e293b]"></div>
              <button className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2.5">
                <LogOut className="w-4 h-4 text-red-400" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
