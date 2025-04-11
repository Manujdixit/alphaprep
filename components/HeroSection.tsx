import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 sm:pt-12 md:pt-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-3 sm:px-6 py-16 sm:py-8 md:py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1 space-y-4 sm:space-y-6">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-block text-black rounded-full px-3 sm:px-4 py-1 text-sm font-medium bg-white "
            >
              Personalized Education Journey
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-edu-black leading-tight"
            >
              Transform Your Learning With 1-on-1{" "}
              <span className="text-edu-blue">Live Classes</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-edu-gray text-base sm:text-lg max-w-xl"
            >
              Experience personalized education tailored to your unique learning
              style. Our expert teachers provide individualized attention to
              help you excel in your studies.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/book-demo">
                <Button className="w-full sm:w-auto bg-edu-blue hover:bg-edu-blue/90 text-black bg-white rounded-lg px-4 sm:px-6 py-4 sm:py-6 h-auto">
                  Book a Free Demo Class
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-lg border-edu-gray/30 hover:bg-gray-100 hover:text-black text-edu-gray px-4 sm:px-6 py-4 sm:py-6 h-auto"
                >
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div>
                <p className="text-edu-black font-medium text-sm sm:text-base">
                  Join our 500+ satisfied students
                </p>
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="sm:w-4 sm:h-4"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div
            className="order-2 lg:order-2 relative w-full"
            animate={floatingAnimation}
          >
            <div className="relative w-full max-w-md sm:max-w-lg mx-auto text-black">
              <div className="absolute inset-0 bg-edu-blue/5 rounded-2xl transform rotate-3"></div>
              <div className="glass-card rounded-2xl overflow-hidden shadow-lg relative z-10 border-t border-l border-white/50">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 sm:p-4 md:p-6 text-center w-full">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-edu-blue/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-edu-blue sm:w-6 sm:h-6"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-edu-black mb-1 sm:mb-2">
                        Video-Based Learning
                      </h3>
                      <p className="text-edu-gray text-xs sm:text-sm mb-3 sm:mb-6">
                        Enjoy seamless video-based classes with our expert
                        teachers on Zoom
                      </p>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-6">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                          <div className="font-bold text-lg sm:text-2xl">
                            500+
                          </div>
                          <div className="text-xs text-edu-gray">Students</div>
                        </div>
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                          <div className="font-bold text-lg sm:text-2xl text-edu-blue">
                            50+
                          </div>
                          <div className="text-xs text-edu-gray">
                            Expert Teachers
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                          <div className="font-bold text-lg sm:text-2xl text-edu-blue">
                            20+
                          </div>
                          <div className="text-xs text-edu-gray">Subjects</div>
                        </div>
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                          <div className="font-bold text-lg sm:text-2xl text-edu-blue">
                            10K+
                          </div>
                          <div className="text-xs text-edu-gray">
                            Classes Delivered
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
