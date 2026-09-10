import React, { useState } from 'react';
import { X, Upload, Image, CheckCircle, Video } from 'lucide-react';

export default function UploadModal({ isOpen, onClose, onVideoUploaded }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setTitle(e.target.files[0].name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsDone(true);
      setTimeout(() => {
        if (onVideoUploaded) {
          onVideoUploaded({ title, description, duration: '10:15' });
        }
        setIsDone(false);
        setFile(null);
        setTitle('');
        setDescription('');
        onClose();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#111726] border border-[#1e293b] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white">Upload Video</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#1a2338] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isDone ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-white">Video Uploaded Successfully!</h4>
              <p className="text-sm text-slate-400">Your video is now live on your channel.</p>
            </div>
          ) : isUploading ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin mx-auto"></div>
              <h4 className="text-lg font-bold text-white">Processing Video...</h4>
              <p className="text-sm text-slate-400">Uploading and generating thumbnail previews...</p>
            </div>
          ) : (
            <form onSubmit={handleUploadSubmit} className="space-y-5">
              {/* File Drop Area */}
              <div className="border-2 border-dashed border-[#1e293b] hover:border-red-500/50 rounded-2xl p-6 text-center cursor-pointer transition-colors relative bg-[#0d121f]">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Upload className="w-10 h-10 text-red-500 mx-auto mb-2" />
                {file ? (
                  <p className="text-sm font-semibold text-emerald-400">{file.name}</p>
                ) : (
                  <>
                    <p className="text-sm font-medium text-slate-200">
                      Drag and drop video files to upload
                    </p>
                    <p className="text-xs text-slate-500 mt-1">MP4, MOV, or WEBM format up to 4K</p>
                  </>
                )}
              </div>

              {/* Title Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Video Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. My Amazing New Video"
                  className="w-full bg-[#0d121f] border border-[#1e293b] text-white rounded-xl px-4 py-2.5 outline-none focus:border-red-500 transition-colors text-sm"
                />
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers about your video..."
                  className="w-full bg-[#0d121f] border border-[#1e293b] text-white rounded-xl px-4 py-2.5 outline-none focus:border-red-500 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-[#1a2338] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-red-600/30 transition-all"
                >
                  Publish Video
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
