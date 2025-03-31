"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NoSSR = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <>{children}</>;
};

interface TeacherCardProps {
  name: string;
  position: string;
  image: string;
  education: string;
  experience: string;
  index: number;
}

const TeacherCard = ({
  name,
  position,
  image,
  education,
  experience,
  index,
}: TeacherCardProps) => {
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
      className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative aspect-[1/1] bg-edu-light-gray overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-lg font-serif font-medium mb-1">
            {name}
          </h3>
          <p className="text-white/80 text-xs">{position}</p>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between mb-3">
          <div>
            <p className="text-edu-gray text-xs">{education}</p>
          </div>
          <div>
            <p className="text-edu-gray text-xs">{experience}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherCard;
