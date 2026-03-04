"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-2">
            Yan's Space
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* 头像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <Image
              src="https://avatars.githubusercontent.com/u/234352008?v=4"
              alt="朱开颜"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* 姓名和身份 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            朱开颜
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary">
            香港中文大学（深圳）· 全球研究专业
          </p>
          <p className="text-base text-text-muted mt-2">深圳</p>
        </motion.div>

        {/* 一句话简介 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-text-primary font-medium mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          探索代码与人文的交叉点，寻找未来的所有可能
        </motion.p>

        {/* 能力标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["产品思维", "UI/UX设计", "Vibe-coding", "Python", "创新"].map((tag, index) => (
            <span
              key={index}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* PC端提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-text-muted"
        >
          ⚡ PC端体验最佳动效
        </motion.div>

        {/* 向下滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            y: { repeat: Infinity, duration: 2 }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}