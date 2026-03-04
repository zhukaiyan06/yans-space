"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

interface KnowledgeBase {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export default function Knowledge() {
  const knowledgeBases: KnowledgeBase[] = [
    {
      title: "产品思考",
      description: "产品设计的思考与方法论",
      url: "https://ucn7wel02bsp.feishu.cn/wiki/YpiPwInv8iD4fkkuT8tcxKlTnBg",
      icon: "💡",
    },
    {
      title: "个人成长",
      description: "学习方法与成长记录",
      url: "https://ucn7wel02bsp.feishu.cn/wiki/M4IvwINwLibZbtkTQymcoDBnnId",
      icon: "🌱",
    },
    {
      title: "技术研究",
      description: "技术探索与实践",
      url: "https://ucn7wel02bsp.feishu.cn/wiki/QencwajdTi28xEkCdF5cJqYWnKh",
      icon: "🔬",
    },
    {
      title: "项目复盘",
      description: "项目经验与反思",
      url: "https://ucn7wel02bsp.feishu.cn/wiki/VejGwLduOiYD1XkS3qicirqbnWd",
      icon: "📝",
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
            知识空间
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            持续学习与知识沉淀，记录成长与思考
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {knowledgeBases.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 提示信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-text-muted text-sm"
        >
          <BookOpen className="w-4 h-4 inline-block mr-1" />
          知识库托管在飞书，持续更新中
        </motion.div>
      </div>
    </section>
  );
}