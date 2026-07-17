import { useState } from "react";
import { X, User, Users, Mail, Phone, MessageSquare, GraduationCap, BookOpen, MapPin, Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm({ onClose = () => {}, isModal = false }) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxPLQ81TmmQF3JH2w65egeBMCFIg8caCGoSrk-XQh1lnC9CxnCWkfD3Bl0NOI_LfuRC/exec";

  const [formData, setFormData] = useState({
    studentName: "",
    whatsapp: "",
    grade: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams();
      for (const key in formData) {
        if (key === 'whatsapp') {
          params.append('whatsapp number', formData[key]);
        } else {
          params.append(key, formData[key]);
        }
      }

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      setSuccess(true);
      setFormData({
        studentName: "",
        whatsapp: "",
        grade: "",
        location: "",
      });
      
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);

    } catch (error) {
      console.error("Error!", error.message);
      alert("Something went wrong! Please try again.");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`flex flex-col w-full relative font-sans bg-white ${isModal ? '' : 'rounded-3xl overflow-hidden shadow-2xl border border-slate-100'}`}>
      
      {/* Header Section (Yellow) */}
      <div className="bg-[#f8ba2b] p-6 pb-8 text-center relative">
        {isModal && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-black/10 hover:bg-black/20 rounded-full text-black transition-colors"
          >
            <X size={20} />
          </button>
        )}
        <h2 className="text-2xl sm:text-3xl font-black text-black mb-2 tracking-tight">Registration</h2>
        <p className="text-slate-800 font-medium text-sm">Join the Mash Magic learning community</p>
      </div>

      <div className="p-6">
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide">Student Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <User size={18} />
                </div>
                <input
                  name="studentName"
                  type="text"
                  placeholder="Full Name"
                  value={formData.studentName}
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-sm shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide">WhatsApp Number</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <MessageSquare size={18} />
                </div>
                <input
                  name="whatsapp"
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-sm shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide">Grade / Class</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <GraduationCap size={18} />
                </div>
                <select
                  name="grade"
                  value={formData.grade}
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm shadow-sm appearance-none"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="">Select Grade</option>
                  <option value="below-8">Below 8th</option>
                  <option value="8th">8th Grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                  <option value="repeater">Repeater / Drop</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide">Location</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <MapPin size={18} />
                </div>
                <input
                  name="location"
                  type="text"
                  placeholder="City / Area"
                  value={formData.location}
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-sm shadow-sm"
                />
              </div>
            </div>

            <div className="mt-6 pt-2">
              <button 
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#008080]/20 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Processing...
                  </>
                ) : "Register Now"}
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-3 leading-tight">
                By submitting, you agree to our Privacy Policy and allow us to contact you.
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <CheckCircle size={32} strokeWidth={3} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Registration Successful!</h3>
            <p className="text-slate-500 text-sm">
              We have received your details. Our academic counselor will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
