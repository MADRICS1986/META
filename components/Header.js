"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-glow">MetaNova</h1>
      <motion.button
        className="p-2 bg-glow text-secondary rounded-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </motion.button>
    </header>
  );
}
