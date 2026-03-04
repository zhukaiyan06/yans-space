"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket, Heart } from "lucide-react";

export default function About() {
  const sections = [
    {
      icon: Lightbulb,
      title: "我是谁",
      content: [
        "产品思维驱动者",
        "UI/UX设计实践者",
        "Vibe-coding爱好者",
        "Python开发者",
        "创新探索者",
      ],
    },
    {
      icon: Code,
      title: "我在做什么",
      content: [
        "在香港中文大学（深圳）学习全球研究",
        "构思并实践产品想法",
        "开源项目贡献与实验",
        "持续提升设计与技术能力",
      ],
    },
    {
      icon: Rocket,
      title: "我的愿景",
      content: [
        "成为连接技术与人文的桥梁",
        "创造有社会价值的产品",
        "用代码和设计改变世界",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-text-primary">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">{item}</span>
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