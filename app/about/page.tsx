"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Star,
  Shield,
  BookOpen,
  ArrowRight,
  Calendar,
} from "lucide-react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from curriculum development to teaching methods.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We believe in understanding each student's unique needs and supporting their individual journey.",
  },
  {
    icon: Star,
    title: "Innovation",
    description:
      "We continuously improve our methods, embracing new technologies and pedagogical approaches.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in all our interactions.",
  },
  {
    icon: BookOpen,
    title: "Life-long Learning",
    description:
      "We inspire a passion for continuous learning and intellectual growth beyond the classroom.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "EduVibe was founded with a mission to provide personalized education through 1-on-1 classes.",
  },
  {
    year: "2020",
    title: "Online Expansion",
    description:
      "Shifted to fully online delivery, reaching students across the country through Zoom-based classes.",
  },
  {
    year: "2021",
    title: "Curriculum Development",
    description:
      "Developed comprehensive curriculum across 20+ subjects for students from elementary to high school.",
  },
  {
    year: "2022",
    title: "50+ Expert Teachers",
    description:
      "Expanded our teaching team to over 50 experts across various subjects and specializations.",
  },
  {
    year: "2023",
    title: "500+ Students Milestone",
    description:
      "Celebrated reaching and positively impacting over 500 students through our personalized approach.",
  },
];

const teamMembers = [
  {
    name: "David Parker",
    position: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Former high school principal with 15 years of experience in education. Passionate about transforming learning through personalization.",
  },
  {
    name: "Jennifer Lee",
    position: "Academic Director",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Ph.D. in Education with expertise in curriculum development and personalized learning strategies.",
  },
  {
    name: "Mark Wilson",
    position: "Technology Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Former EdTech developer with a passion for creating seamless digital learning experiences.",
  },
];

const fadeInUp = {
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

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-medium text-edu-black mb-6"
            >
              About <span className="text-edu-blue">EduVibe</span>
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Transforming education through personalized 1-on-1 live classes,
              expert teachers, and a student-centered approach.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-3xl font-serif font-medium text-edu-black mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="space-y-4 text-edu-gray"
              >
                <p>
                  EduVibe was founded in 2019 with a simple yet powerful
                  mission: to transform education by providing truly
                  personalized learning experiences that adapt to each student's
                  unique needs, learning style, and pace.
                </p>
                <p>
                  Our founder, David Parker, a former high school principal,
                  noticed that traditional classroom settings often failed to
                  meet the varied needs of individual students. With a vision to
                  change this, he assembled a team of passionate educators and
                  technology experts to create a platform that could deliver
                  customized 1-on-1 education at scale.
                </p>
                <p>
                  What began as a small startup with just five teachers and
                  twenty students has grown into a thriving educational
                  community with over 50 expert teachers serving more than 500
                  students across the country.
                </p>
                <p>
                  Today, EduVibe continues to pioneer personalized education
                  through our live 1-on-1 Zoom classes, comprehensive
                  curriculum, and commitment to academic excellence. We believe
                  every student deserves an education tailored to their
                  individual needs, and we work tirelessly to make that vision a
                  reality.
                </p>
              </motion.div>
            </div>
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="order-1 lg:order-2 relative mx-auto"
            >
              <div className="relative max-w-md">
                <div className="absolute inset-0 bg-edu-blue/5 rounded-2xl transform -rotate-3"></div>
                <div className="absolute inset-0 bg-edu-light-blue/5 rounded-2xl transform rotate-3"></div>
                <div className="glass-card rounded-2xl overflow-hidden shadow-lg relative z-10">
                  <div className="aspect-[1/1] relative">
                    <img
                      src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="About EduVibe"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-serif font-bold mb-2">
                          Transforming Education
                        </h3>
                        <p className="text-white/80">One student at a time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-edu-blue/5 p-8 rounded-2xl relative overflow-hidden border border-edu-blue"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-edu-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-medium text-edu-blue mb-4">
                  Our Mission
                </h3>
                <p className="text-edu-gray mb-6">
                  To empower students through personalized education that
                  recognizes their unique potential and helps them achieve
                  academic excellence and personal growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-edu-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-edu-blue"></div>
                    </div>
                    <span className="text-edu-gray text-sm">
                      Provide truly personalized learning experiences
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-edu-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-edu-blue"></div>
                    </div>
                    <span className="text-edu-gray text-sm">
                      Foster a love for learning and intellectual curiosity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-edu-blue/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-edu-blue"></div>
                    </div>
                    <span className="text-edu-gray text-sm">
                      Build confidence through academic achievement
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-edu-teal/5 p-8 rounded-2xl relative overflow-hidden border border-edu-teal"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-edu-teal/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-medium text-edu-teal mb-4">
                  Our Vision
                </h3>
                <p className="text-edu-gray mb-6">
                  To be the leading provider of personalized education,
                  revolutionizing how students learn by making quality,
                  customized instruction accessible to all.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-edu-teal/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-edu-teal"></div>
                    </div>
                    <span className="text-edu-gray text-sm">
                      Create a world where education adapts to students
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-edu-teal/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-edu-teal"></div>
                    </div>
                    <span className="text-edu-gray text-sm">
                      Ensure every student reaches their full potential
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-edu-teal/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-edu-teal"></div>
                    </div>
                    <span className="text-edu-gray text-sm">
                      Bridge educational gaps through technology and
                      personalization
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Our <span className="text-edu-blue">Core Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              These principles guide everything we do, from how we teach to how
              we interact with our community.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-edu-blue/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-edu-blue" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-edu-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-edu-gray text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Meet Our <span className="text-edu-blue">Leadership Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              The visionaries who guide our mission and ensure we deliver
              excellence in education.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <div className="aspect-[1/1] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-serif font-medium mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-edu-gray text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-8"
          >
            Ready to Experience the EduVibe Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-edu-gray mb-10 text-lg"
          >
            Join hundreds of students who have transformed their learning
            journey with our personalized approach to education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link href="/book-demo">
              <Button
                variant="outline"
                size="lg"
                className=" bg-edu-blue hover:bg-edu-blue/80 text-black rounded-lg px-8 py-6 h-auto w-full sm:w-auto transition-all duration-300 hover:shadow-lg"
              >
                Book a Free Demo Class
                <Calendar size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/teachers">
              <Button
                variant="outline"
                size="lg"
                className="border-edu-gray/30 text-edu-gray hover:bg-gray-50 rounded-lg px-8 py-6 h-auto w-full sm:w-auto transition-all duration-300 hover:shadow-sm"
              >
                Meet Our Teachers
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
