import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import MagicMentor from "./pages/MagicMentor";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import StudentLogin from "./pages/Student/StudentLogin";
import StudentDashboard from "./pages/Student/StudentDashboard";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="magic-mentor" element={<MagicMentor />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}
