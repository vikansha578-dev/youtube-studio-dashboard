import React from 'react';
import { Settings as SettingsIcon, Shield, Bell, Key, User, Palette } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="space-y-6 pb-10 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Studio Settings</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your channel preferences, permissions, and appearance.</p>
      </div>

      <div className="bg-[#111726] border border-[#1e293b] rounded-2xl divide-y divide-[#1e293b] shadow-md">
        {/* Profile Settings */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-red-500" />
            <h3 className="text-base font-bold text-white">Channel Profile</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Channel Name</label>
              <input
                type="text"
                defaultValue="Creative Vibes"
                className="w-full bg-[#0c101a] border border-[#1e293b] text-white rounded-xl px-4 py-2 text-sm outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Channel Handle</label>
              <input
                type="text"
                defaultValue="@creativevibes"
                className="w-full bg-[#0c101a] border border-[#1e293b] text-white rounded-xl px-4 py-2 text-sm outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-red-500" />
            <h3 className="text-base font-bold text-white">Notifications</h3>
          </div>
          <div className="space-y-3 pt-2">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-300">Email alerts for new comments</span>
              <input type="checkbox" defaultChecked className="accent-red-600 w-4 h-4" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-300">Weekly performance summary emails</span>
              <input type="checkbox" defaultChecked className="accent-red-600 w-4 h-4" />
            </label>
          </div>
        </div>

        {/* Security */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-red-500" />
            <h3 className="text-base font-bold text-white">Permissions & Security</h3>
          </div>
          <p className="text-sm text-slate-400">Manage who has manager or editor access to your YouTube channel.</p>
          <button className="px-4 py-2 bg-[#1a2338] hover:bg-[#222e4a] text-white text-xs font-semibold rounded-xl border border-[#1e293b] transition-colors">
            Manage Channel Permissions
          </button>
        </div>
      </div>
    </div>
  );
}
