"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: [
      "123 Education Avenue",
      "Learning District",
      "Knowledgeville, 54321",
    ],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["(123) 456-7890", "Mon - Fri: 9AM - 6PM"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@Alphaprep.com", "support@Alphaprep.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 9AM - 1PM"],
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    description:
      "Get instant answers to your questions through our live chat available during business hours.",
  },
  {
    icon: Users,
    title: "Parent-Teacher Meetings",
    description:
      "Schedule a virtual meeting with our teachers to discuss your child's progress and learning goals.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Having trouble with our online platform? Our tech team is ready to help you resolve any issues.",
  },
];

const faqs = [
  {
    question: "How do the 1-on-1 classes work?",
    answer:
      "Our 1-on-1 classes are conducted live via Zoom. Each session is tailored to the student's learning needs and pace. Students can ask questions, share their screen, and interact directly with the teacher for a personalized learning experience.",
  },
  {
    question: "How long is each class session?",
    answer:
      "Our standard class sessions are 1 hour long. This duration allows for comprehensive coverage of material while maintaining student engagement and focus. For younger students, we may recommend shorter 45-minute sessions.",
  },
  {
    question: "What subjects do you offer?",
    answer:
      "We offer a wide range of subjects including Mathematics, Sciences (Physics, Chemistry, Biology), Languages (English, Spanish, French), Humanities (History, Geography), Test Preparation (SAT, ACT, AP Exams), and more. Contact us if you need a subject not listed.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Our pricing varies based on the subject, grade level, and frequency of classes. We offer flexible packages to suit different needs and budgets. Please contact us for a personalized quote or book a free demo class to learn more.",
  },
  {
    question: "Can I change my teacher if I'm not satisfied?",
    answer:
      "Yes, absolutely. Our priority is your satisfaction and learning outcomes. If you feel your current teacher isn't the right fit, please contact us and we'll arrange a different teacher who better matches your learning style and needs.",
  },
  {
    question: "How do I book a free demo class?",
    answer:
      "You can book a free demo class by visiting our 'Book Demo' page, selecting your preferred subject, date, and time slot. Fill in your basic details, and we'll confirm your booking via email with a Zoom link for the session.",
  },
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif font-medium text-edu-black mb-6"
            >
              Connect With <span className="text-edu-blue">Us</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Have questions about our programs or want to start your
              educational journey? We're here to provide the guidance and
              support you need.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeIn}
                      className="glass-card rounded-xl p-6 flex gap-4 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <Icon size={20} className="text-edu-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-medium text-edu-black mb-2">
                          {item.title}
                        </h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-edu-gray">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-orange-100 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              How We Can <span className="text-edu-blue">Help You</span>
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              We offer multiple ways to get the support you need throughout your
              learning journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-8 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                    <Icon size={28} className="text-edu-blue" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-edu-black mb-3">
                    {option.title}
                  </h3>
                  <p className="text-edu-gray">{option.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-medium text-edu-black mb-4"
            >
              Frequently Asked <span className="text-edu-blue">Questions</span>
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-edu-gray max-w-2xl mx-auto"
            >
              Find answers to commonly asked questions about our services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-serif font-medium text-edu-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-edu-gray">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-medium mb-4"
              >
                Ready to Experience Our Teaching?
              </motion.h2>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/80 max-w-2xl mb-6"
              >
                Book your free 1-hour demo class today and see how our
                personalized approach can transform your learning experience.
              </motion.p>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/book-demo">
                  <button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 py-3 h-auto flex items-center gap-2 transition-colors">
                    Book a Free Demo Class
                    <Calendar size={18} />
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:block text-black">
              <div className="glass-card rounded-xl p-6 h-full bg-white/10">
                <h3 className="text-xl font-serif font-medium mb-6">
                  Why Students Love Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
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
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">
                        Personalized Attention
                      </h4>
                      <p className="text-sm text-black">
                        Individualized learning plans tailored to each student's
                        needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
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
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Flexible Scheduling</h4>
                      <p className="text-sm text-black">
                        Choose class times that work around your busy schedule
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
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
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Expert Teachers</h4>
                      <p className="text-sm text-black">
                        Learn from qualified educators with proven track records
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

export default Contact;
