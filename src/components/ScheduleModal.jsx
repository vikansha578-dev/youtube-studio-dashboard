import React, { useState } from 'react';
import { X, Clock, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';

export default function ScheduleModal({ isOpen, onClose }) {
  const [videoTitle, setVideoTitle] = useState('Creative Process | Design Episode 2');
  const [scheduleDate, setScheduleDate] = useState('2025-05-20');
  const [scheduleTime, setScheduleTime] = useState('18:00');
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#111726] border border-[#1e293b] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white">Schedule Video</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#1a2338] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isDone ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-white">Video Scheduled!</h4>
              <p className="text-sm text-slate-400">
                Will publish automatically on {scheduleDate} at {scheduleTime}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Video
                </label>
                <input
                  type="text"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className="w-full bg-[#0d121f] border border-[#1e293b] text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full bg-[#0d121f] border border-[#1e293b] text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Publish Time
                  </label>
                  <input
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full bg-[#0d121f] border border-[#1e293b] text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-red-600/30"
                >
                  Confirm Schedule
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
