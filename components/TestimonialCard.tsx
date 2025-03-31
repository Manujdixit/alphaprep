"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  image,
  testimonial,
  rating,
  index,
}: TestimonialCardProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="glass-card rounded-xl overflow-hidden p-6 md:p-8 h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-edu-black font-medium">{name}</h3>
            <p className="text-edu-gray text-sm">{role}</p>
          </div>
        </div>
        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1"
                className={i < rating ? "text-amber-500" : "text-gray-300"}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
        </div>
      </div>
      <div className="relative">
       
        <p className="text-edu-black text-sm leading-relaxed relative z-10">
          {testimonial}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
