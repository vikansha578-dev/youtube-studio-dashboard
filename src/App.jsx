import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeView from './components/HomeView';
import DashboardView from './components/DashboardView';
import CalendarView from './components/CalendarView';
import SettingsView from './components/SettingsView';
import UploadModal from './components/UploadModal';
import ScheduleModal from './components/ScheduleModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const handleVideoUploaded = (newVideo) => {
    // Navigate home after upload
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-[#f1f5f9] flex overflow-x-hidden antialiased">
      {/* Fixed Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* Main Right Content Section */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-1 px-8 py-7 overflow-y-auto max-w-7xl w-full mx-auto">
          {activeTab === 'home' && (
            <HomeView
              onOpenUpload={() => setIsUploadOpen(true)}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'dashboard' && <DashboardView />}

          {activeTab === 'calendar' && (
            <CalendarView onOpenSchedule={() => setIsScheduleOpen(true)} />
          )}

          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>

      {/* Modals */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onVideoUploaded={handleVideoUploaded}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}
