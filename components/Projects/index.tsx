"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  tags: string[];
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "The Alchemist of X 🔮",
      description: "将AI对话转化为魔法体验的沉浸式Web应用，Dark Academia美学 + Elon Musk AI化身",
      github: "https://github.com/zhukaiyan06/the-alchemist-of-x",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "GLM-4"],
      highlights: [
        "三栏布局：对话卷轴 + 动态画像 + 数字法典",
        "情绪驱动UI：实时情感分析影响界面变化",
        "玻璃拟态设计：现代毛玻璃效果 + 金色点缀",
      ],
    },
    {
      title: "HelloAgents智能旅行助手 ✈️",
      description: "AI驱动的智能旅行规划助手，基于HelloAgents框架",
      github: "https://github.com/zhukaiyan06/HelloAgents",
      tags: ["Python", "Vue3", "TypeScript", "MCP", "高德地图"],
      highlights: [
        "智能旅程生成：SimpleAgent自动规划多日行程",
        "实时工具调用：MCP协议接入高德地图服务",
        "全栈能力：后端Agent + 现代化前端",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background-warm">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            项目展示
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            这些项目展示了我在产品思维、技术创新和用户体验设计方面的探索
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-xl"
            >
              {/* 项目标题 */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* 项目简介 */}
              <p className="text-text-secondary mb-4">{project.description}</p>

              {/* 技术标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-text-secondary text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 项目亮点 */}
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}