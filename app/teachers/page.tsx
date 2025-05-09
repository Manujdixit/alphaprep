"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, ArrowRight, Filter, X } from "lucide-react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TeacherCard from "@/components/TeacherCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Teacher } from "@/data/teachers";

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Er. Animesh Singh",
    position: "Founder & CEO, Chemistry Expert",
    image: "/animesh.png",
    education: "B. Tech.",
    experience: "3+ Years",
    rating: 4.9,
    available: true,
  },
  {
    id: 2,
    name: "Er. Dhirendra Singh",
    position: "Chemistry Expert",
    image: "/dheerendra.png",
    education: "B. Tech.",
    experience: "3+ Years",
    rating: 4.8,
    available: true,
  },
  {
    id: 3,
    name: "Dr. Shashikant Chaurasiya",
    position: "Mathematics Specialist",
    image: "/shashikant.png",
    education: "PHD Maths",
    experience: "4+ Years",
    rating: 4.9,
    available: true,
  },
  {
    id: 4,
    name: "Jai Prakash Maurya ",
    position: "Biology Expert",
    image: "/jai.png",
    education: "M. Science",
    experience: "4+ Years",
    rating: 5.0,
    available: true,
  },
  {
    id: 5,
    name: "Er. Indresh Maurya",
    position: "Physics Expert",
    image: "/indresh.png",
    education: "M. Tech.",
    experience: "9+ Years",
    rating: 4.7,
    available: true,
  },

  {
    id: 6,
    name: "Er. Dhananjay Swarnkar",
    position: "Mathematics Expert",
    image: "/dhananjay.png",
    education: "B. Tech.",
    experience: "4+ Years",
    rating: 4.8,
    available: true,
  },

  {
    id: 7,
    name: "Manuj Dixit",
    position: "Coding Expert",
    image: "/manuj.png",
    education: "B. Tech.",
    experience: "2+ Years",
    rating: 4.5,
    available: true,
  },
];

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Literature",
  "History",
  "Geography",
  "Computer Science",
  "Economics",
  "Art",
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

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const toggleSubject = (subject: string) => {
  //   if (selectedSubjects.includes(subject)) {
  //     setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
  //   } else {
  //     setSelectedSubjects([...selectedSubjects, subject]);
  //   }
  // };

  // const resetFilters = () => {
  //   setSelectedSubjects([]);
  //   setAvailableOnly(false);
  //   setSearchTerm("");
  // };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-medium text-edu-black mb-6"
            >
              Our <span className="text-edu-blue">Expert Teachers</span>
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Meet our team of dedicated educators, each bringing years of
              experience and passion to every class.
            </motion.p>
          </div>

          {/* Search and Filter Section */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-10"
          >
            <div className="glass-card rounded-xl overflow-hidden">
              {/* <div className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-full md:w-2/3 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-edu-gray/50 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search by name or subject..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex gap-2">
                    <Button
                      variant="outline"
                      className={`w-full md:w-auto ${
                        showFilters ? "border-edu-blue text-edu-blue" : ""
                      }`}
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter size={16} className="mr-2" />
                      Filters
                      {selectedSubjects.length > 0 && (
                        <span className="ml-2 bg-edu-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {selectedSubjects.length}
                        </span>
                      )}
                    </Button>
                    {(selectedSubjects.length > 0 || availableOnly) && (
                      <Button
                        variant="ghost"
                        className="w-full md:w-auto text-red-500 hover:text-red-700"
                        onClick={resetFilters}
                      >
                        <X size={16} className="mr-2" />
                        Reset
                      </Button>
                    )}
                  </div>
                </div>

                {showFilters && (
                  <div className="mt-6 border-t border-gray-100 pt-6">
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-edu-black mb-3">
                        Subjects
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {subjects.map((subject) => (
                          <Badge
                            key={subject}
                            variant={
                              selectedSubjects.includes(subject)
                                ? "default"
                                : "outline"
                            }
                            className={`cursor-pointer ${
                              selectedSubjects.includes(subject)
                                ? "bg-edu-blue text-white hover:bg-edu-blue/90"
                                : "text-edu-gray hover:bg-gray-100"
                            }`}
                            onClick={() => toggleSubject(subject)}
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={availableOnly}
                          onChange={() => setAvailableOnly(!availableOnly)}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-edu-blue"></div>
                        <span className="ms-3 text-sm font-medium text-edu-gray">
                          Show only available teachers
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          </motion.div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <div key={teacher.id} className="relative">
                  {!teacher.available && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-600 border-red-200"
                      >
                        Fully Booked
                      </Badge>
                    </div>
                  )}
                  <Link href={`/teachers/${teacher.id}`}>
                    <TeacherCard
                      name={teacher.name}
                      position={teacher.position}
                      image={teacher.image}
                      education={teacher.education}
                      experience={teacher.experience}
                      index={index}
                    />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Search size={24} className="text-edu-gray" />
                </div>
                <h3 className="text-xl font-serif font-medium text-edu-black mb-2">
                  No teachers found
                </h3>
                <p className="text-edu-gray text-center mb-6">
                  Please try adjusting your search or filters
                </p>
                {/* <Button
                  variant="outline"
                  className="border-edu-gray/30 text-edu-gray"
                  onClick={resetFilters}
                >
                  Clear all filters
                </Button> */}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-medium mb-4"
              >
                Want to Experience Our Teaching?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/80 max-w-2xl mb-6"
              >
                Book your free 1-hour demo class today and experience our
                personalized teaching approach firsthand.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
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
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <div className="glass-card rounded-xl p-6 h-full bg-white/10">
                <h3 className="text-xl text-black font-serif font-medium mb-4">
                  Teacher Qualifications
                </h3>
                <div className="space-y-4 text-black">
                  <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Advanced Degrees</h4>
                      <p className="text-sm text-black/70">
                        All our teachers hold at least Master's degrees in their
                        respective fields
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="8" r="5"></circle>
                        <path d="M20 21a8 8 0 0 0-16 0"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Extensive Experience</h4>
                      <p className="text-sm text-black/70">
                        Minimum 5 years of teaching experience and rigorous
                        selection process
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 11 3 3L22 4"></path>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Continuous Training</h4>
                      <p className="text-sm text-black/70">
                        Regular professional development to stay updated with
                        latest teaching methods
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;
