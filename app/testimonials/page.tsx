"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
  subject?: string;
  date?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Wilson",
    role: "Parent of 9th Grader",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "My son's grades have improved significantly since starting with EduVibe. The personalized attention he receives is something that was missing in his regular school classes. His math teacher is patient and explains complex concepts in simple terms. I highly recommend their services to any parent looking for quality tutoring.",
    subject: "Mathematics",
    date: "March 2023",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "11th Grade Student",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "The 1-on-1 classes have been a game-changer for my SAT preparation. I can ask questions without feeling embarrassed, and my teacher adapts the pace to my understanding. I've seen a 200-point improvement in my practice tests in just two months. The flexible scheduling has been perfect for my busy sports schedule.",
    subject: "SAT Prep",
    date: "January 2023",
    rating: 4,
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "Parent of 7th Grader",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "The flexibility of scheduling classes around our busy family calendar has been incredible. The quality of teaching is outstanding and my daughter actually looks forward to her math lessons now! Her teacher makes learning fun and engaging, and the progress reports help us track her improvement.",
    subject: "Science",
    date: "November 2022",
    rating: 5,
  },
  {
    id: 4,
    name: "Jessica Thompson",
    role: "10th Grade Student",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "Before joining EduVibe, I was struggling with Physics and was close to giving up. My teacher not only helped me understand the concepts but also built my confidence. The way he connects theoretical knowledge to real-world examples makes learning so much more interesting. I'm now one of the top performers in my class.",
    subject: "Physics",
    date: "February 2023",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Davis",
    role: "Parent of 12th Grader",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "We enrolled our son for AP Calculus preparation, and the results have been outstanding. His teacher is not only knowledgeable but also dedicated to ensuring he understands every concept thoroughly. The personalized approach has helped him gain confidence, and he's now considering majoring in Mathematics in college.",
    subject: "AP Calculus",
    date: "December 2022",
    rating: 5,
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "College Student",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "As a college student struggling with advanced statistics, I needed specialized help. My EduVibe teacher has been instrumental in helping me grasp complex statistical concepts and improve my grades. The online platform is user-friendly, and the screen sharing feature makes it easy to work through problems together.",
    subject: "Statistics",
    date: "April 2023",
    rating: 5,
  },

  {
    id: 7,
    name: "Daniel Kim",
    role: "8th Grade Student",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "Learning English as my second language was challenging, but my EduVibe teacher made it fun and interesting. We read books together, discuss them, and work on my writing skills. My vocabulary and confidence in speaking have improved dramatically. I'm now comfortable participating in class discussions at school.",
    subject: "English",
    date: "January 2023",
    rating: 5,
  },
  {
    id: 8,
    name: "Sarah Wright",
    role: "Parent of 6th Grader",
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "My daughter had gaps in her math knowledge due to changing schools frequently. Her EduVibe teacher identified these gaps and created a personalized plan to address them. Within three months, she caught up with her peers and is now performing above grade level. The regular progress reports have been very helpful.",
    subject: "Mathematics",
    date: "March 2023",
    rating: 5,
  },
  {
    id: 9,
    name: "Thomas Garcia",
    role: "Parent of 11th Grader",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "Our experience with EduVibe's Chemistry tutoring has been exceptional. The teacher's expertise and ability to explain complex chemical reactions through visual aids and experiments have helped my son develop a genuine interest in the subject. His grades have improved, but more importantly, he now enjoys studying Chemistry.",
    subject: "Chemistry",
    date: "February 2023",
    rating: 5,
  },
];

const statsAndFacts = [
  { value: "95%", label: "Student Satisfaction" },
  { value: "89%", label: "Grade Improvement" },
  { value: "97%", label: "Would Recommend" },
  { value: "4.8/5", label: "Average Rating" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif font-medium text-edu-black mb-6"
            >
              What Our <span className="text-edu-blue">Students Say</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Real stories from students and parents who have experienced the
              EduVibe difference.
            </motion.p>{" "}
            {/* Added closing tag */}
          </div>

          {/* Featured Testimonial */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-16"
          >
            <div className="relative glass-card rounded-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 text-edu-blue/5">
                <Quote size={96} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative z-10">
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-edu-blue/5 rounded-lg transform rotate-3"></div>
                    <img
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Student Success Story"
                      className="relative z-10 rounded-lg shadow-lg object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-edu-black text-lg font-medium italic mb-6">
                    "EduVibe has completely transformed my daughter's
                    educational journey. Her confidence has soared, and her
                    grades have improved dramatically. The personalized approach
                    makes all the difference—her teacher truly understands how
                    she learns and adapts accordingly."
                  </p>{" "}
                  {/* Added closing tag */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3"
                        alt="Karen Wilson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-edu-black font-medium">
                        Karen Wilson
                      </h3>
                      <p className="text-edu-gray text-sm">
                        Parent of 8th Grader
                      </p>
                    </div>{" "}
                    {/* Added closing tag */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {statsAndFacts.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-serif font-bold text-edu-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-edu-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Video <span className="text-edu-blue">Success Stories</span>
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Hear directly from our students about their transformative
              learning experiences.
            </motion.p>{" "}
            {/* Added closing tag */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-edu-blue/90 flex items-center justify-center cursor-pointer hover:bg-edu-blue transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                    {
                      [
                        "From Struggling to Excelling",
                        "My SAT Success Story",
                        "How EduVibe Changed My Approach",
                      ][index]
                    }
                  </h3>{" "}
                  {/* Added closing tag */}
                  <p className="text-edu-gray text-sm mb-4">
                    {
                      [
                        "John shares how personalized math tutoring turned his grades around.",
                        "Emily explains how she improved her SAT score by 250 points.",
                        "Michael discusses his journey from hating to loving Physics.",
                      ][index]
                    }
                  </p>{" "}
                  {/* Added closing tag */}
                  {/* ... rest of the video card content ... */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
