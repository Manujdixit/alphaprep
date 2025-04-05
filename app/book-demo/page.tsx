"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, ArrowRight } from "lucide-react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  "Experience our teaching methodology firsthand",
  "Discuss your learning goals with an expert teacher",
  "Get personalized recommendations for your educational journey",
  "No obligation or commitment required",
  "100% free, with no hidden fees or charges",
];

const subjects = [
  {
    category: "Mathematics",
    subjects: ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry"],
  },
  {
    category: "Sciences",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Environmental Science",
    ],
  },
  {
    category: "Languages",
    subjects: [
      "English Language",
      "English Literature",
      "Spanish",
      "French",
      "German",
    ],
  },
  {
    category: "Humanities",
    subjects: ["History", "Geography", "Economics", "Psychology", "Sociology"],
  },
  {
    category: "Test Preparation",
    subjects: ["SAT", "ACT", "AP Exams", "IB Exams", "GMAT/GRE"],
  },
];

const testimonials = [
  {
    quote:
      "The demo class was incredibly helpful. The teacher quickly identified the areas where my son needed help and provided a clear plan for improvement.",
    name: "Rebecca Wilson",
    role: "Parent",
  },
  {
    quote:
      "I was impressed by how engaged my daughter was during the demo. She's usually shy in new learning environments, but the teacher made her feel comfortable right away.",
    name: "Michael Chang",
    role: "Parent",
  },
  {
    quote:
      "After just one demo class, I knew this was exactly what I needed to boost my confidence in calculus. I signed up for regular sessions immediately.",
    name: "Sarah Johnson",
    role: "11th Grade Student",
  },
];

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

const BookDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif font-medium text-edu-black mb-6"
            >
              Book Your <span className="text-edu-blue">Free Demo Class</span>
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Experience our personalized teaching approach with a complimentary
              1-hour session tailored to your needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-serif font-medium text-edu-black mb-4">
                    What to Expect
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-edu-blue/10 flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-edu-blue" />
                        </div>
                        <span className="text-edu-gray text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-serif font-medium text-edu-black mb-4">
                    How It Works
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-edu-blue/10 flex items-center justify-center font-medium text-edu-blue shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h3 className="text-edu-black font-medium text-sm mb-1">
                          Book Your Slot
                        </h3>
                        <p className="text-edu-gray text-sm">
                          Fill out the form with your details and select a
                          convenient time slot.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-edu-blue/10 flex items-center justify-center font-medium text-edu-blue shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h3 className="text-edu-black font-medium text-sm mb-1">
                          Receive Confirmation
                        </h3>
                        <p className="text-edu-gray text-sm">
                          Get a confirmation email with Zoom link and session
                          details.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-edu-blue/10 flex items-center justify-center font-medium text-edu-blue shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h3 className="text-edu-black font-medium text-sm mb-1">
                          Attend Your Demo
                        </h3>
                        <p className="text-edu-gray text-sm">
                          Join the Zoom session and meet your expert teacher.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-edu-blue/10 flex items-center justify-center font-medium text-edu-blue shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <h3 className="text-edu-black font-medium text-sm mb-1">
                          Follow-Up Discussion
                        </h3>
                        <p className="text-edu-gray text-sm">
                          Get feedback and discuss potential learning plans with
                          no obligation.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-serif font-medium text-edu-black mb-4">
                    What Others Say
                  </h2>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <p className="text-edu-gray text-sm italic mb-3">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <span className="text-xs font-medium text-edu-blue">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-edu-black text-sm font-medium">
                              {testimonial.name}
                            </h4>
                            <p className="text-edu-gray text-xs">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <BookingForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
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
              Available <span className="text-edu-blue">Subjects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Browse our comprehensive selection of subjects available for demo
              classes and regular sessions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-xl font-serif font-medium text-edu-black mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-edu-blue"></div>
                      <span className="text-edu-gray text-sm">{subject}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-edu-blue text-sm font-medium flex items-center gap-1 link-underline">
                    Book a demo in {category.category}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Common <span className="text-edu-blue">Questions</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl divide-y"
          >
            <div className="p-6">
              <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                Is the demo class really free?
              </h3>
              <p className="text-edu-gray text-sm">
                Yes, the demo class is completely free with no obligations. It's
                our way of introducing you to our teaching methodology and
                allowing you to experience our personalized approach before
                making any commitment.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                How long is the demo class?
              </h3>
              <p className="text-edu-gray text-sm">
                Each demo class is 1 hour long, which gives enough time for the
                teacher to understand your learning needs and demonstrate our
                teaching approach.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                Can I book more than one demo class?
              </h3>
              <p className="text-edu-gray text-sm">
                We typically offer one free demo class per subject. If you're
                interested in exploring multiple subjects, please contact our
                team to discuss your specific needs.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                What happens after the demo class?
              </h3>
              <p className="text-edu-gray text-sm">
                After the demo, one of our education consultants will follow up
                to discuss your experience and answer any questions. If you'd
                like to continue, they can help you select the right package and
                schedule regular sessions. There's absolutely no pressure to
                sign up.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                What technology do I need for the class?
              </h3>
              <p className="text-edu-gray text-sm">
                You'll need a device (computer, tablet, or smartphone) with a
                stable internet connection, a microphone, and preferably a
                camera. We use Zoom for our sessions, so having the Zoom app
                installed is helpful but not required as you can join via
                browser.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto mb-10 text-lg"
          >
            Our team is here to help! Get in touch with us to learn more about
            our programs and how we can support your educational journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-xl px-8 py-6 h-auto w-full sm:w-auto transform hover:scale-105 transition-transform duration-300"
              >
                Contact Our Team
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-xl px-8 py-6 h-auto w-full sm:w-auto transform hover:scale-105 transition-transform duration-300"
              >
                Book Another Demo
                <Calendar size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDemo;
