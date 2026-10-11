import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FolderOpen, BookOpen, ScanLine,
  GitCompare, Settings as SettingsIcon, Leaf, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useProject } from '@/lib/ProjectContext';

const NAV = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/saved', label: 'Saved Projects', icon: FolderOpen },
  { to: '/materials-guide', label: 'Materials Guide', icon: BookOpen },
  { to: '/scanner', label: 'Scrap Scanner', icon: ScanLine },
  { to: '/compare', label: 'Compare Layouts', icon: GitCompare },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { resetDemo } = useProject();

  return (
    <aside
<<<<<<< HEAD
      className={`${collapsed ? 'w-20' : 'w-64'} shrink-0 transition-all duration-300 flex flex-col bg-[#2b1d08] text-white relative`}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 h-20 border-b border-white/10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a63a] to-[#7c5a1d] flex items-center justify-center shadow-lg shrink-0">
=======
      className={`${collapsed ? 'w-20' : 'w-64'} shrink-0 transition-all duration-300 flex flex-col bg-[#123D26] text-white relative`}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 h-20 border-b border-white/10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16A34A] to-[#15803D] flex items-center justify-center shadow-lg shrink-0">
>>>>>>> 2f1bedcbebf1a926966a427450cf34238219935a
          <Leaf className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-tight">ScrapSmart</div>
<<<<<<< HEAD
            <div className="text-[11px] text-[#f8e7b0]/75 font-medium">Cut smarter. Waste less.</div>
=======
            <div className="text-[11px] text-emerald-200/70 font-medium">Cut smarter. Waste less.</div>
>>>>>>> 2f1bedcbebf1a926966a427450cf34238219935a
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
<<<<<<< HEAD
                active ? 'bg-[#d4a63a]/20 text-white' : 'text-[#f8e7b0]/80 hover:bg-white/5 hover:text-white'
=======
                active ? 'bg-white/10 text-white' : 'text-emerald-100/70 hover:bg-white/5 hover:text-white'
>>>>>>> 2f1bedcbebf1a926966a427450cf34238219935a
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-5 py-4 border-t border-white/10">
<<<<<<< HEAD
          <p className="text-[11px] text-[#f8e7b0]/55 italic leading-snug">
=======
          <p className="text-[11px] text-emerald-200/50 italic leading-snug">
>>>>>>> 2f1bedcbebf1a926966a427450cf34238219935a
            Less waste today.<br />More resources tomorrow.
          </p>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
<<<<<<< HEAD
        className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-white border border-[#E2E8E4] text-[#2b1d08] flex items-center justify-center shadow-md hover:bg-[#f8e7b0] transition-colors"
=======
        className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-white border border-[#E2E8E4] text-[#123D26] flex items-center justify-center shadow-md hover:bg-emerald-50 transition-colors"
>>>>>>> 2f1bedcbebf1a926966a427450cf34238219935a
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>
    </aside>
  );
}
