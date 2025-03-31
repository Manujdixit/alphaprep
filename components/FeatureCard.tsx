"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Book,
  Users,
  Award,
  Clock,
  Calendar,
  Quote,
  LucideIcon,
} from "lucide-react";
import { MagicCard } from "./ui/magic-card";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  variant?: "default" | "highlight";
}

const FeatureCard = ({
  Icon,
  title,
  description,
  index,
  variant = "default",
}: FeatureCardProps) => {
  return (
    <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl p-10"
        gradientColor={ "#0F52BA"}
      >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-5",
          variant === "default" ? "bg-edu-blue/10" : "bg-edu-blue"
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6",
            "text-edu-blue"
          )}
        />
      </div>
      <h3 className="text-xl font-serif font-medium text-edu-black mb-3">
        {title}
      </h3>
      <p className="text-edu-gray text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <div className="mt-auto pt-3 flex flex-row items-center">
        <button className="text-edu-blue text-sm font-medium flex items-center gap-1 link-underline">
          Learn more
        </button>
        <svg
          className="link-underline"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
      </MagicCard>
   
  );
};

export default FeatureCard;
