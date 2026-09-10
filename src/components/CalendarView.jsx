import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function CalendarView({ onOpenSchedule }) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Grid dates for May 2025
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const scheduledEvents = {
    16: { title: 'A Day in My Life | Vlog', type: 'published' },
    20: { title: 'Creative Process | Design Ep 2', type: 'scheduled' },
    25: { title: 'Morning Routine 2025', type: 'draft' },
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Content Calendar</h1>
          <p className="text-slate-400 text-sm mt-1">Plan and manage your upcoming video releases.</p>
        </div>

        <button
          onClick={onOpenSchedule}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-red-600/30 transition-all w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Content</span>
        </button>
      </div>

      {/* Calendar Container */}
      <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-6 shadow-md">
        {/* Month Header */}
        <div className="flex items-center justify-between mb-6 border-b border-[#1e293b] pb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-red-500" />
            May 2025
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#192133]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#192133]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {days.map((day) => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>

        {/* Date Grid */}
        <div className="grid grid-cols-7 gap-2">
          {dates.map((date) => {
            const event = scheduledEvents[date];
            return (
              <div
                key={date}
                className="min-h-[90px] bg-[#0c101a] border border-[#1e293b] rounded-xl p-2.5 flex flex-col justify-between hover:border-slate-600 transition-colors"
              >
                <span className={`text-xs font-bold ${date === 16 ? 'text-red-500' : 'text-slate-400'}`}>
                  {date}
                </span>

                {event && (
                  <div className={`p-1.5 rounded-lg text-[10px] font-semibold truncate ${
                    event.type === 'published' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : event.type === 'scheduled'
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {event.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
