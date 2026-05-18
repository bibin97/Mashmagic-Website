import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, 
  Send, 
  Calendar, 
  Clock, 
  User as UserIcon, 
  CheckCircle2, 
  History,
  LayoutDashboard,
  MessageSquare
} from "lucide-react";
import { API_URL } from "../../api/config";

export default function StudentDashboard() {
  const [user, setUser] = useState(null);
  const [updateContent, setUpdateContent] = useState("");
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    const userData = localStorage.getItem("studentUser");

    if (!token || !userData) {
      navigate("/student-login");
      return;
    }

    setUser(JSON.parse(userData));
    fetchUpdates(token);
  }, [navigate]);

  const fetchUpdates = async (token) => {
    try {
      const response = await fetch(`${API_URL}/student/my-updates`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setUpdates(data.data);
      }
    } catch (err) {
      console.error("Fetch updates error:", err);
    } finally {
      setFetching(false);
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    if (!updateContent.trim()) return;

    setLoading(true);
    const token = localStorage.getItem("studentToken");

    try {
      const response = await fetch(`${API_URL}/student/daily-update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data_content: updateContent,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setUpdateContent("");
        fetchUpdates(token);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      alert("Failed to submit update. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentUser");
    navigate("/student-login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#008080]/10 flex items-center justify-center p-2">
              <img src="/Logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 hidden sm:block">Mash Magic Dashboard</h2>
              <h2 className="text-lg font-bold text-slate-900 sm:hidden">Portal</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
              <UserIcon size={16} className="text-[#008080]" />
              <span className="text-sm font-semibold text-slate-700">{user.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar / Welcome */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#008080]/5 rounded-bl-full" />
              <h1 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Welcome back! 👋</h1>
              <p className="text-slate-500 text-sm mb-6 relative z-10">
                Submit your daily learning updates here. Your mentor will review them in the mentor panel.
              </p>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#008080]">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Account ID</p>
                    <p className="text-sm font-bold text-slate-700">STU-{user.id.toString().padStart(4, '0')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="hidden lg:block bg-gradient-to-br from-[#008080] to-[#006666] rounded-3xl p-8 text-white shadow-lg shadow-[#008080]/20">
              <h3 className="text-lg font-bold mb-3">Academic Support</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Need help with your subjects or mentor interaction? Contact our academic support team.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold text-sm transition-all border border-white/20">
                GET HELP 📚
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Update Submission Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/40 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Daily Learning Update</h3>
                  <p className="text-sm text-slate-500">What did you study or accomplish today?</p>
                </div>
              </div>

              <form onSubmit={handleSubmitUpdate}>
                <textarea
                  required
                  value={updateContent}
                  onChange={(e) => setUpdateContent(e.target.value)}
                  className="w-full h-40 p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#008080]/10 focus:border-[#008080] transition-all resize-none placeholder:text-slate-400"
                  placeholder="Example: Completed the Quadratic Equations assignment and revised the Science chapter on Human Eye..."
                />
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} />
                    Auto-synced with mentor panel
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading || !updateContent.trim()}
                    className="w-full sm:w-auto bg-[#008080] hover:bg-[#006666] text-white font-bold px-10 py-4 rounded-2xl shadow-lg shadow-[#008080]/20 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        SUBMIT UPDATE
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-100 font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={20} />
                    Update submitted successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Previous Updates History */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <History size={22} className="text-[#008080]" />
                  Update History
                </h3>
                <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {updates.length} TOTAL
                </span>
              </div>

              {fetching ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-white rounded-3xl animate-pulse border border-slate-100" />
                  ))}
                </div>
              ) : updates.length > 0 ? (
                <div className="space-y-4">
                  {updates.map((update, idx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={update.id}
                      className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 group hover:border-[#008080]/30 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full text-xs">
                            <Calendar size={14} className="text-[#008080]" />
                            {update.formatted_date}
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full text-xs">
                            <Clock size={14} className="text-[#008080]" />
                            {update.formatted_time}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#008080] bg-[#008080]/5 px-2 py-0.5 rounded-full uppercase tracking-widest">
                          Reviewed by Mentor
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                        {update.data_content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-300">
                    <History size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">No updates yet</h4>
                  <p className="text-slate-500 text-sm">Your learning journey starts today!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
        &copy; 2026 Mash Magic Learning Ecosystem. All rights reserved.
      </footer>
    </div>
  );
}
