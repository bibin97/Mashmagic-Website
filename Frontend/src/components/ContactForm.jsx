import { useState } from "react";

export default function ContactForm({ onClose = () => {}, isModal = false }) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzu0JKNl0QXFqOud3oVczYhda6pZs84Q1n5cIf9y311E-I1QREmk8WCoHtwjo_IpKiu/exec";

  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    whatsapp: "",
    grade: "",
    subject: "",
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
        params.append(key, formData[key]);
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
        parentName: "",
        studentName: "",
        email: "",
        phone: "",
        whatsapp: "",
        grade: "",
        subject: "",
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
    <div className="flex flex-col w-full bg-transparent relative font-sans">
      {/* Decorative blurred background glowing blobs */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#008080]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#f8ba2b]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* CLOSE BUTTON (Fallback if rendered standalone) */}
      {isModal && (
        <button
          onClick={onClose}
          className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      <div className="text-center mb-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#008080]">Registration</h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2 font-medium">Join the Mash Magic learning community</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Student Name</label>
            <input
              name="studentName"
              type="text"
              placeholder="Full Name"
              value={formData.studentName}
              required
              onChange={handleChange}
              className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
            />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Parent Name</label>
            <input
              name="parentName"
              type="text"
              placeholder="Guardian Name"
              value={formData.parentName}
              required
              onChange={handleChange}
              className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
            />
          </div>
        </div>

        <div>
          <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formData.email}
            required
            onChange={handleChange}
            className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="Call Number"
              value={formData.phone}
              required
              onChange={handleChange}
              className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
            />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">WhatsApp Number</label>
            <input
              name="whatsapp"
              type="tel"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              required
              onChange={handleChange}
              className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Grade / Class</label>
            <select
              name="grade"
              value={formData.grade}
              required
              onChange={handleChange}
              className="w-full px-4.5 py-3.5 rounded-2xl border border-gray-200/80 bg-gray-50/70 text-gray-800 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
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
          <div>
            <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Interested Course</label>
            <input
              name="subject"
              type="text"
              placeholder="e.g. NEET, JEE, Tuitions"
              value={formData.subject}
              required
              onChange={handleChange}
              className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
            />
          </div>
        </div>

        <div>
          <label className="text-xs sm:text-sm font-bold text-gray-700 ml-1 block mb-1.5 tracking-wide uppercase">Location</label>
          <input
            name="location"
            type="text"
            placeholder="City / Area"
            value={formData.location}
            required
            onChange={handleChange}
            className="w-full px-4.5 py-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 text-gray-800 placeholder-gray-400 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-all duration-300 outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gray-300"
          />
        </div>

        <button 
          disabled={loading}
          className={`w-full py-4.5 rounded-2xl text-base font-extrabold text-black bg-gradient-to-r from-[#f8ba2b] via-[#f9c950] to-[#f8ba2b] hover:from-[#e0a624] hover:to-[#f8ba2b] shadow-[0_10px_30px_rgba(248,186,43,0.3)] hover:shadow-[0_15px_35px_rgba(248,186,43,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 tracking-wider uppercase mt-3 ${
            loading ? "bg-gray-400 cursor-not-allowed text-white shadow-none hover:translate-y-0" : ""
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : "Register Now"}
        </button>
      </form>

      {success && (
        <div className="mt-6 p-4 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 shadow-sm relative z-10">
          <span className="text-green-600 font-bold animate-bounce text-center text-sm sm:text-base">
            ✔ Registration Successful! We will contact you soon.
          </span>
        </div>
      )}
    </div>
  );
}
