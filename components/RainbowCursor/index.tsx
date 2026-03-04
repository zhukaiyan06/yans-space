"use client";

import { useEffect, useRef } from "react";

export default function RainbowCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{
    x: number;
    y: number;
    color: string;
    life: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 彩虹颜色
    const colors = [
      "#FF6B6B", // 红
      "#FF8E53", // 橙
      "#FFD93D", // 黄
      "#6BCF7F", // 绿
      "#4ECDC4", // 青
      "#45B7D1", // 蓝
      "#9F7AEA", // 紫
    ];

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let lastMoveTime = 0;

    // 鼠标移动事件
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      lastMoveTime = Date.now();

      // 创建新粒子
      const particleCount = 3;
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.current.push({
          x: mouseX + (Math.random() - 0.5) * 10,
          y: mouseY + (Math.random() - 0.5) * 10,
          color,
          life: 1,
        });
      }
    };

    // 动画循环
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新和绘制粒子
      particles.current = particles.current.filter((particle) => {
        particle.life -= 0.02;
        particle.x += (Math.random() - 0.5) * 2;
        particle.y += (Math.random() - 0.5) * 2;

        if (particle.life <= 0) return false;

        const size = particle.life * 8;
        const alpha = particle.life;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // 添加发光效果
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;

        return true;
      });

      // 限制粒子数量
      if (particles.current.length > 100) {
        particles.current = particles.current.slice(-100);
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      particles.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rainbow-trail"
      style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999 }}
    />
  );
}