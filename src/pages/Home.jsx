import { motion } from "framer-motion";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import About from "../components/About";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <FeatureCards />
      <About />

      {/* Footer */}
      <footer className="border-t border-cyber-border/40 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-neon-green/50 rotate-45" />
            <span className="font-display font-bold tracking-widest text-white">
              SENTINEL<span className="text-neon-green">-X</span>
            </span>
          </div>
          <p className="font-mono text-xs text-slate-600">
            IndiaNext Hackathon 2026 · K.E.S. Shroff College, Mumbai
          </p>
          <p className="font-mono text-xs text-slate-700">
            Build something that matters. Outthink the algorithm.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
