import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../data/blogs";
import Footer from "./Footer";
import PremiumCard from "./PremiumCard";

export default function BlogList() {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen bg-[#f9fafb] text-black px-4 sm:px-6 py-20 overflow-hidden">

        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="w-fit px-5 py-2 rounded-full bg-[#f8ba2b] text-black text-sm font-medium transition-all duration-300 hover:bg-[#e0a624]"
          >
            Back to Home
          </button>

          <span className="hidden sm:block text-sm text-gray-500">
            Insights • Learning • Mentoring
          </span>
        </div>

        {/* HEADING */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
            Our <span className="text-[#008080]">Insights & Blogs</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Deep insights on modern learning, mentoring, parenting, and education in 2026.
          </p>
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="h-full flex"
            >
              <PremiumCard className="w-full h-full p-0 overflow-hidden group flex flex-col">
                {/* IMAGE */}
                <div
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="cursor-pointer relative overflow-hidden h-72 w-full"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* CONTENT OVER IMAGE */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug mb-4">
                      {blog.title}
                    </h3>

                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/blog/${blog.id}`); }}
                      className="w-fit px-5 py-2 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-[#f8ba2b]"
                    >
                      View More →
                    </button>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
