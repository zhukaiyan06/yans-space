"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Knowledge from "@/components/Knowledge";
import Contact from "@/components/Contact";
import RainbowCursor from "@/components/RainbowCursor";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 彩虹拖尾鼠标动画 */}
      <RainbowCursor />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.div>
      
      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Projects />
      </motion.div>
      
      {/* Knowledge Space */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Knowledge />
      </motion.div>
      
      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
      
      {/* Footer */}
      <footer className="py-8 text-center text-text-muted text-sm border-t border-gray-100">
        <p>© {new Date().getFullYear()} Yan's Space. Built with ❤️ and ☕</p>
      </footer>
    </main>
  );
}