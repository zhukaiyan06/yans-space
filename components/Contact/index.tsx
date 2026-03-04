"use client";

import { motion } from "framer-motion";
import { Github, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Github,
      label: "GitHub",
      value: "@zhukaiyan06",
      url: "https://github.com/zhukaiyan06",
      color: "hover:text-gray-900",
    },
    {
      icon: MessageCircle,
      label: "QQ",
      value: "1472990642",
      url: null,
      color: "hover:text-blue-500",
    },
    {
      icon: Phone,
      label: "WeChat",
      value: "zhukaiyan11111",
      url: null,
      color: "hover:text-green-500",
    },
  ];

  const communicationPrinciples = [
    "请直接说明来意",
    "欢迎技术交流与产品探讨",
    "不接受无关推销",
    "回复时间：工作日 9:00-18:00",
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
            联系我
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            期待与你建立连接，一起创造有价值的事物
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              找到我
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <method.icon className={`w-5 h-5 mr-3 text-text-muted ${method.color}`} />
                    <div>
                      <p className="text-sm text-text-muted">{method.label}</p>
                      {method.url ? (
                        <a
                          href={method.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-primary transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 沟通原则 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              沟通原则
            </h3>
            <ul className="space-y-3">
              {communicationPrinciples.map((principle, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-text-secondary">{principle}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 邮箱 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted">
            📧 商务合作或深度交流，请通过以上方式联系
          </p>
        </motion.div>
      </div>
    </section>
  );
}