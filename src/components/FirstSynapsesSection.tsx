
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Trophy, HandHeart, Shield, Brain } from "lucide-react";

const NODES = [
  {
    id: "momentum",
    icon: Rocket,
    color: "from-cyan-400 to-blue-500",
    border: "border-cyan-400/60",
    title: "🚀 Early Momentum",
    subtitle: "Growth Acceleration Synapses",
    bullets: [
      "Founded: January 2024 (6 months of pure momentum)",
      "Client Base: 8 active projects across 5 industries",
      "Growth Rate: 200% quarter-over-quarter client acquisition",
      "Retention: 100% client retention (every client expanded)",
      "Revenue Growth: 150% month-over-month since launch",
    ],
    quote: "In startup time, we're already thinking at enterprise speed.",
    position: { x: 50, y: 10 }, // top center
  },
  {
    id: "recognition",
    icon: Trophy,
    color: "from-yellow-400 to-amber-600",
    border: "border-yellow-300/60",
    title: "💡 Innovation Recognition",
    subtitle: "Market Validation Synapses",
    bullets: [
      "Featured: TechCrunch Startup Spotlight (March 2024)",
      'Winner: "Most Innovative AI Integration" - Regional Startup Awards',
      "Speaking: Invited presenter at Future of Work Conference 2024",
      'Press: Quoted in Forbes article on "AI-Human Collaboration"',
      "Recognition: Selected for TechStars Accelerator shortlist",
    ],
    quote: "When you're solving real problems, the recognition follows.",
    position: { x: 90, y: 50 }, // right center
  },
  {
    id: "validation",
    icon: HandHeart,
    color: "from-green-300 to-emerald-500",
    border: "border-green-400/60",
    title: "🤝 Market Validation",
    subtitle: "Trust Network Synapses",
    bullets: [
      "Healthcare: Reduced patient data processing time by 70%",
      "E-commerce: Increased conversion rates by 45% through predictive UX",
      "Manufacturing: Cut operational inefficiencies by 60% via AI automation",
      "FinTech: Achieved regulatory compliance 3x faster than industry avg",
      "Consulting: 24/7 AI assistant, 95% accuracy client support",
    ],
    quote: "Our clients don't just recommend us—they become case studies.",
    position: { x: 50, y: 90 }, // bottom center
  },
  {
    id: "technical",
    icon: Shield,
    color: "from-pink-400 to-purple-500",
    border: "border-pink-400/60",
    title: "⚡ Technical Credibility",
    subtitle: "Infrastructure Trust Synapses",
    bullets: [
      "Security: SOC 2 Type II compliance in progress",
      "Reliability: 99.97% uptime across all deployed systems",
      "Speed: Avg. implementation 60% faster than industry standard",
      "Quality: Zero critical bugs in production (6 months running)",
      "Partnerships: Certified with AWS, Google Cloud, Microsoft Azure",
    ],
    quote:
      "We built enterprise-grade systems while keeping startup agility.",
    position: { x: 10, y: 50 }, // left center
  },
];

// Connections indicate traversal between nodes (make a loop)
const CONNECTIONS = [
  { from: 0, to: 1, gradient: "stroke-cyan-400", label: "Excellence" },
  { from: 1, to: 2, gradient: "stroke-yellow-400", label: "Trust" },
  { from: 2, to: 3, gradient: "stroke-green-400", label: "Foundation" },
  { from: 3, to: 0, gradient: "stroke-pink-400", label: "Innovation" },
];

function getPoint(percentage: { x: number; y: number }, w: number, h: number) {
  return {
    x: (percentage.x / 100) * w,
    y: (percentage.y / 100) * h,
  };
}

export default function FirstSynapsesSection() {
  // Responsive SVG width/height
  const width = 800, height = 600;
  // For mobile: Reduce width/height & node spread
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;

  return (
    <section className="relative min-h-[900px] py-28 px-2 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Animated background lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 top-1/3 left-1/4 bg-gradient-to-br from-cyan-400/30 to-purple-400/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute w-72 h-72 bottom-[20%] left-2/3 bg-gradient-to-br from-pink-400/20 to-indigo-400/10 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute w-52 h-52 top-2/3 right-10 bg-gradient-to-br from-yellow-300/30 to-purple-400/30 blur-2xl rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 animate-text-glow">
            Neural Momentum
          </h2>
          <h3 className="text-2xl md:text-4xl font-light mb-4 text-white/90">
            Proving Our Synapses Fire
          </h3>
          <p className="text-xl text-cyan-300 max-w-4xl mx-auto leading-relaxed mb-1">
            From Idea to Impact: Our First Neural Connections
          </p>
          <p className="text-base text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every breakthrough begins with a single synapse. Here's proof our network is growing stronger every day.
          </p>
        </motion.div>

        {/* SVG: all connections between nodes */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width={width}
          height={height}
          style={{ zIndex: 2 }}
        >
          {/* Draw curved paths between nodes */}
          {CONNECTIONS.map((conn, i) => {
            const A = getPoint(NODES[conn.from].position, width, height);
            const B = getPoint(NODES[conn.to].position, width, height);
            // Calculate control points for bezier curve (arcs around center)
            const C = {
              x: (A.x + B.x) / 2 + (width / 2 - (A.x + B.x) / 2) * 0.29,
              y: (A.y + B.y) / 2 + (height / 2 - (A.y + B.y) / 2) * 0.29,
            };
            return (
              <g key={i}>
                <path
                  d={`M${A.x},${A.y} Q${C.x},${C.y} ${B.x},${B.y}`}
                  strokeWidth={6}
                  className={`transition-all duration-300 ${conn.gradient}`}
                  strokeLinecap="round"
                  fill="none"
                  opacity={0.23}
                  style={{
                    filter: "drop-shadow(0px 2px 23px #40e0ff89)"
                  }}
                />
                {/* Animated spark */}
                <circle>
                  <animateMotion
                    dur="2.2s"
                    repeatCount="indefinite"
                    keyPoints="0;1"
                  >
                    <mpath xlinkHref={`#path${i}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Glass Nodes */}
        {NODES.map((node, idx) => {
          const Icon = node.icon;
          // Convert % position to pixel (centered in parent relative to width/height)
          const left = `calc(${node.position.x}% - 160px)`; // node card width: 320px
          const top = `calc(${node.position.y}% - 100px)`;

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 + idx * 0.1 }}
              viewport={{ once: true }}
              className="absolute z-20"
              style={{ left, top, width: 320, minHeight: 200 }}
            >
              <div
                className={`
                  group relative shadow-2xl overflow-hidden
                  rounded-2xl border ${node.border}
                  bg-white/10 backdrop-blur-xl
                  px-6 pt-6 pb-5 flex flex-col
                  hover:scale-105 transition-all duration-400
                `}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-2 rounded-full mx-auto border-2 flex items-center justify-center
                    bg-gradient-to-br ${node.color}
                    shadow-lg shadow-cyan-400/10
                    border-white/25`}
                >
                  <Icon size={36} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white text-center mb-1 leading-none">{node.title}</h4>
                <div className="text-sm text-purple-200 text-center mb-4 italic">{node.subtitle}</div>
                {/* Bullets */}
                <ul className="mb-5 text-sm text-white/90 space-y-1">
                  {node.bullets.map((t, i) => (
                    <li key={i} className="pl-3 relative">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-cyan-300/80" />
                      {t}
                    </li>
                  ))}
                </ul>
                <blockquote className="text-cyan-300 italic text-center text-sm border-l-2 border-cyan-400/40 pl-3">
                  “{node.quote}”
                </blockquote>
                {/* Ripple Pulse */}
                <span
                  className={`pointer-events-none
                    absolute -inset-2 rounded-2xl
                    border-2 ${node.border} opacity-30
                    animate-pulse`}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Center Neural Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 z-30"
          style={{
            transform: "translate(-50%, -50%)"
          }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center relative animate-pulse">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center backdrop-blur-md">
              <Brain className="w-12 h-12 text-white" />
            </div>
            {/* Spinning rings */}
            {[1, 2].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border-2 border-cyan-400/30 animate-spin"
                style={{
                  width: `${180 + ring * 24}px`,
                  height: `${180 + ring * 24}px`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  animationDuration: `${20 + ring * 7}s`,
                  animationDirection: ring % 2 === 0 ? "reverse" : "normal",
                }}
              />
            ))}
          </div>
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-center">
            <span className="text-2xl font-bold text-cyan-400 bg-slate-900/80 px-6 py-2 rounded-full border border-cyan-400/20 backdrop-blur-sm">
              🧠 Validation Core
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
