import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ArrowUpRight, 
  ArrowUp,
  MoreVertical, 
  ArrowRight,
  Play,
  Heart,
  MessageSquareShare
} from 'lucide-react';

export default function HomeView({ onOpenUpload, searchQuery }) {
  const [selectedDate, setSelectedDate] = useState('May 16, 2025');

  // Initial video list
  const initialVideos = [
    {
      id: 1,
      title: 'A Day in My Life | Vlog',
      views: '52.4K views',
      timeAgo: '2 days ago',
      duration: '8:12',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Creative Process | Design',
      views: '38.7K views',
      timeAgo: '5 days ago',
      duration: '8:12',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Morning Routine',
      views: '21.3K views',
      timeAgo: '6 days ago',
      duration: '5:48',
      thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
    },
  ];

  // Initial comments list
  const initialComments = [
    {
      id: 1,
      author: '@user123',
      text: 'Love your content! Keep going! ❤️',
      timeAgo: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      author: '@creativefan',
      text: 'This is so inspiring!',
      timeAgo: '5 hours ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  ];

  // Filter based on global search query
  const filteredVideos = initialVideos.filter(v => 
    v.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredComments = initialComments.filter(c => 
    c.author.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: 'Total Views', value: '125.4K', change: '+12.5%' },
    { label: 'Watch time (hours)', value: '4.8K', change: '+12.4%' },
    { label: 'Subscribers', value: '+3.2K', change: '+24.8%' },
    { label: 'Estimated revenue', value: '$248.75', change: '+16.8%' },
  ];

  return (
    <div className="space-y-7 pb-10">
      {/* Top Banner Greeting & Date Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-slate-400 font-medium text-sm">Good Morning,</p>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Creative Vibes</h1>
          <p className="text-slate-400 text-sm mt-1">Here's what's happening with your channel today.</p>
        </div>

        {/* Date Selector Pill */}
        <button className="flex items-center gap-2.5 px-4 py-2.5 bg-[#111726] border border-[#1e293b] rounded-xl text-slate-300 text-sm font-medium hover:border-slate-600 transition-colors w-fit">
          <CalendarIcon className="w-4 h-4 text-slate-400" />
          <span>{selectedDate}</span>
        </button>
      </div>

      {/* Hero Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2b0307] via-[#1a0408] to-[#0c1019] border border-red-900/30 p-8 shadow-2xl">
        <div className="relative z-10 max-w-lg space-y-4">
          <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
            Grow Your Channel
          </h2>
          <p className="text-slate-300 text-base font-normal">
            Create. Upload. Engage. Repeat.
          </p>
          <button
            onClick={onOpenUpload}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-200 group transform active:scale-95"
          >
            <span>Upload Video</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3D YouTube Graphic Accent */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
          <div className="relative w-56 h-36 bg-gradient-to-tr from-red-700 via-red-600 to-red-500 rounded-3xl shadow-2xl shadow-red-600/50 flex items-center justify-center transform rotate-6 hover:rotate-3 transition-transform duration-300">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-inner">
              <Play className="w-8 h-8 text-red-600 fill-red-600 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#111726] border border-[#1e293b] rounded-2xl p-5 hover:border-[#334155] transition-all duration-200 shadow-md group"
          >
            <p className="text-slate-400 text-xs font-medium mb-1">{stat.label}</p>
            <div className="flex items-baseline justify-between mt-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
            </div>
            <div className="flex items-center gap-1 mt-3 text-emerald-400 text-xs font-semibold">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Videos List (Spans 7 cols on large screens) */}
        <div className="lg:col-span-7 bg-[#111726] border border-[#1e293b] rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-white tracking-tight">Recent Videos</h3>
              <button className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#161e30] transition-colors group cursor-pointer border border-transparent hover:border-[#1e293b]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="relative shrink-0 rounded-lg overflow-hidden w-28 h-16 bg-slate-800">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate group-hover:text-red-400 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {video.views} • {video.timeAgo}
                      </p>
                    </div>
                  </div>

                  <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#202a40] transition-colors shrink-0">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {filteredVideos.length === 0 && (
                <p className="text-center text-slate-500 py-6 text-sm">No videos match your search.</p>
              )}
            </div>
          </div>
        </div>

        {/* Latest Comments List (Spans 5 cols on large screens) */}
        <div className="lg:col-span-5 bg-[#111726] border border-[#1e293b] rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-white tracking-tight">Latest Comments</h3>
              <button className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {filteredComments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-start justify-between p-3.5 rounded-xl hover:bg-[#161e30] transition-colors border border-transparent hover:border-[#1e293b]"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-700 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-300">{comment.author}</span>
                      </div>
                      <p className="text-sm text-slate-200 mt-1 leading-snug">{comment.text}</p>
                      <span className="text-[11px] text-slate-500 mt-1.5 block">{comment.timeAgo}</span>
                    </div>
                  </div>

                  <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#202a40] transition-colors shrink-0">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {filteredComments.length === 0 && (
                <p className="text-center text-slate-500 py-6 text-sm">No comments match your search.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
