"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { teachers } from "@/data/teachers";

const TeacherDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const unwrappedParams = use(params);
  const teacher = teachers.find(
    (teacher) => teacher.id === parseInt(unwrappedParams.id)
  );

  if (!teacher) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/teachers">
              <Button variant="ghost" className="text-edu-gray">
                <ArrowLeft size={16} className="mr-2" />
                Back to Teachers
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img
                      src={`${teacher.image}`}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {!teacher.available && (
                    <div className="text-center">
                      <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
                        Currently Not Available
                      </div>
                    </div>
                  )}

                  <Button
                    size="lg"
                    className="w-full bg-edu-blue hover:bg-edu-blue/90 text-white"
                    disabled={!teacher.available}
                  >
                    Book a Demo
                  </Button>
                </div>

                <div className="w-full md:w-2/3">
                  <h1 className="text-3xl font-serif font-medium text-edu-black mb-2">
                    {teacher.name}
                  </h1>
                  <h2 className="text-xl text-edu-blue mb-4">
                    {teacher.position}
                  </h2>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                      <span className="text-sm font-medium text-edu-gray">
                        {teacher.rating}/5.0
                      </span>
                    </div>
                    <div className="text-sm text-edu-gray">
                      {teacher.experience} Experience
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-edu-black mb-2">
                      Education
                    </h3>
                    <p className="text-edu-gray">{teacher.education}</p>
                  </div>

                  {/* <div className="mb-6">
                    <h3 className="text-sm font-medium text-edu-black mb-2">
                      Subjects Taught
                    </h3>
                  </div> */}

                  <div>
                    <h3 className="text-sm font-medium text-edu-black mb-2">
                      About
                    </h3>
                    <p className="text-edu-gray">
                      {teacher.name} is a dedicated educator with{" "}
                      {teacher.experience.toLowerCase()} of experience in
                      teaching. {teacher.name} holds a {teacher.education} and
                      is passionate about helping students achieve their
                      academic goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeacherDetail;
