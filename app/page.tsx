"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  Users,
  Award,
  Clock,
  ArrowRight,
  GraduationCap,
  BarChart,
  Book as BookIcon,
  Calendar,
} from "lucide-react";

import NavBar from "@/components/NavBar copy";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TeacherCard from "@/components/TeacherCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import NavBarHome from "@/components/NavBar copy";
import { teachers } from "@/data/teachers";
import Marquee from "react-fast-marquee";

const features = [
  {
    icon: Book,
    title: "Personalized Curriculum",
    description:
      "Customized learning plans designed to match your learning style, pace, and goals for maximum effectiveness.",
  },
  {
    icon: Users,
    title: "1-on-1 Live Classes",
    description:
      "Direct interaction with expert teachers in real-time Zoom sessions for personalized attention and feedback.",
  },
  {
    icon: Award,
    title: "Expert Teachers",
    description:
      "Learn from qualified educators with proven track records in helping students achieve academic excellence.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose class times that fit your schedule with convenient afternoon and evening slots available.",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Parent of 9th Grader",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "My son's performance in school has improved dramatically since joining Alphaprep. The individual attention he gets here was missing in his regular classroom environment.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "11th Grade Student",
    image:
      "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "The personalized JEE preparation classes have transformed my understanding of difficult concepts. I can clarify doubts freely, and my mentor adjusts the teaching according to my learning pace.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Parent of 7th Grader",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "The ability to schedule classes around our family's busy routine has been wonderful. The teaching quality is excellent, and my daughter now enjoys her science lessons!",
    rating: 4,
  },
];

const stats = [
  { value: "500+", label: "Happy Students" },
  { value: "50+", label: "Expert Teachers" },
  { value: "20+", label: "Subjects Covered" },
  { value: "10K+", label: "Classes Delivered" },
];

const subjects = [
  {
    id: 1,
    title: "IIT/JEE Entrance (11th/12th)",
    description: "Comprehensive preparation for engineering entrance exams",
    icon: "🧪",
    color: "bg-purple-600",
  },
  {
    id: 2,
    title: "Medical Entrance",
    description: "NEET and other medical entrance exam preparation",
    icon: "🩺",
    color: "bg-red-600",
  },
  {
    id: 3,
    title: "National Defence Academy",
    description: "Preparation for NDA and defense service exams",
    icon: "🎖️",
    color: "bg-green-600",
  },
  {
    id: 4,
    title: "9th/10th Foundation",
    description: "Strong foundation for competitive exams",
    icon: "📚",
    color: "bg-blue-600",
  },
  {
    id: 5,
    title: "JEE Mains & Advanced",
    description: "Specialized courses for JEE aspirants",
    icon: "⚛️",
    color: "bg-indigo-600",
  },
  {
    id: 6,
    title: "National Science Olympiad",
    description: "Preparation for NSO and other olympiads",
    icon: "🔭",
    color: "bg-yellow-600",
  },
  {
    id: 7,
    title: "International Science Olympiad",
    description: "Training for international level competitions",
    icon: "🌍",
    color: "bg-teal-600",
  },
  {
    id: 8,
    title: "International Math Olympiad",
    description: "Advanced mathematical problem solving",
    icon: "🧮",
    color: "bg-pink-600",
  },
  {
    id: 9,
    title: "NSTSE Preparation",
    description: "National Level Science Talent Search Exam",
    icon: "🔬",
    color: "bg-orange-600",
  },
  {
    id: 10,
    title: "Skill Development",
    description: "Coding, robotics, and 21st century skills",
    icon: "💻",
    color: "bg-cyan-600",
  },
  {
    id: 11,
    title: "6th-8th Standard Subjects",
    description: "Comprehensive school curriculum support",
    icon: "📝",
    color: "bg-lime-600",
  },
];

const duplicatedSubjects = [...subjects, ...subjects];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBarHome />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section-padding bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Why Choose <span className="text-edu-blue">Alphaprep</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              We provide a superior educational experience focused on individual
              growth and success through our personalized approach.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                variant={index === 1 ? "highlight" : "default"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="section-padding bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Programs We <span className="text-edu-blue">Cover</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Our comprehensive curriculum covers a wide range of subjects to
              support your academic journey.
            </motion.p>
          </div>

          <Marquee
            autoFill={true}
            pauseOnHover={true}
            speed={40}
            gradient={true}
            gradientColor="rgb(243, 244, 246)" // Fixed: Now passing a string
            gradientWidth={100}
            className="py-4"
          >
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className={`mx-4 flex h-48 w-72 flex-col justify-between rounded-xl ${subject.color} p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="text-4xl">{subject.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{subject.title}</h3>
                  <p className="mt-2 text-sm opacity-90">
                    {subject.description}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-medium mb-4"
              >
                Ready to Experience the Alphaprep Difference?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/80 max-w-2xl mb-6"
              >
                Book your free 1-hour demo class today and see how our
                personalized approach can transform your learning experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4 text-center justify-center"
              >
                <Link href="/book-demo">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 rounded-lg px-6 py-6 h-auto"
                  >
                    Book a Free Demo Class
                    <Calendar size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/teachers">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 rounded-lg px-6 py-6 h-auto"
                  >
                    Meet Our Teachers
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="section-padding bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
              >
                Meet Our <span className="text-edu-blue">Expert Teachers</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-edu-gray max-w-2xl"
              >
                Our passionate educators bring years of experience and a
                commitment to excellence in education.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/teachers">
                <Button
                  variant="outline"
                  className="mt-5 md:mt-0 border-edu-gray/30 text-edu-gray hover:bg-gray-100 rounded-lg"
                >
                  View All Teachers
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.slice(0, 4).map((teacher, index) => (
              <TeacherCard
                key={teacher.name}
                name={teacher.name}
                position={teacher.position}
                image={teacher.image}
                education={teacher.education}
                experience={teacher.experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-medium text-white mb-4"
              >
                What Our <span className="text-edu-blue">Students Say</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white max-w-2xl"
              >
                Hear success stories from students and parents who have
                experienced the Alphaprep difference.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/testimonials">
                <Button
                  variant="outline"
                  className="mt-5 md:mt-0 border-edu-gray/30 text-black bg-white  hover:bg-gray-100 rounded-lg"
                >
                  View All Testimonials
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
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

      {/* Final CTA Section */}
      <section className="section-padding bg-white py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
          >
            Ready to Elevate Your Educational Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-edu-gray mb-8"
          >
            Join hundreds of satisfied students who have transformed their
            learning experience with our personalized 1-on-1 classes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/book-demo">
              <Button
                variant={"outline"}
                size="lg"
                className="bg-edu-blue hover:bg-edu-blue/90 text-black rounded-lg px-6 py-6 h-auto w-full sm:w-auto"
              >
                Book Your Free Demo Class
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-edu-gray/30 text-edu-gray hover:bg-gray-100 rounded-lg px-6 py-6 h-auto w-full sm:w-auto"
              >
                Contact Us for More Info
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
