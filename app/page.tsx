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
import { teachers } from "./teachers/page";

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
    name: "James Wilson",
    role: "Parent of 9th Grader",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "My son's grades have improved significantly since starting with EduVibe. The personalized attention he receives is something that was missing in his regular school classes.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "11th Grade Student",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "The 1-on-1 classes have been a game-changer for my SAT preparation. I can ask questions without feeling embarrassed, and my teacher adapts the pace to my understanding.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "Parent of 7th Grader",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    testimonial:
      "The flexibility of scheduling classes around our busy family calendar has been incredible. The quality of teaching is outstanding and my daughter actually looks forward to her math lessons now!",
    rating: 4,
  },
];

const stats = [
  { value: "500+", label: "Happy Students" },
  { value: "50+", label: "Expert Teachers" },
  { value: "20+", label: "Subjects Covered" },
  { value: "10K+", label: "Classes Delivered" },
];

const subjectCategories = [
  {
    title: "Mathematics",
    subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
    icon: BarChart,
  },
  {
    title: "Sciences",
    subjects: ["Physics", "Chemistry", "Biology", "Computer Science"],
    icon: BookIcon,
  },
  {
    title: "Languages",
    subjects: ["English", "Spanish", "French", "German"],
    icon: Book,
  },
  {
    title: "Test Prep",
    subjects: ["SAT", "ACT", "AP Exams", "IB Exams"],
    icon: GraduationCap,
  },
];

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
              Why Choose <span className="text-edu-blue">EduVibe</span>?
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-edu-blue/10 flex items-center justify-center mb-5 group-hover:bg-edu-blue/20 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-edu-blue group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-edu-black mb-4 group-hover:text-edu-blue transition-colors duration-300">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-edu-blue group-hover:bg-edu-blue-dark transition-colors duration-300"></div>
                        <span className="text-edu-gray text-sm group-hover:text-edu-black transition-colors duration-300">
                          {subject}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-3 border-t border-gray-100 group-hover:border-edu-blue/30 transition-colors duration-300">
                    <button className="text-edu-blue text-sm font-medium flex items-center gap-1 group">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
                Ready to Experience the EduVibe Difference?
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
                className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
              >
                What Our <span className="text-edu-blue">Students Say</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-edu-gray max-w-2xl"
              >
                Hear success stories from students and parents who have
                experienced the EduVibe difference.
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
                  className="mt-5 md:mt-0 border-edu-gray/30 text-edu-gray hover:bg-gray-100 rounded-lg"
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
