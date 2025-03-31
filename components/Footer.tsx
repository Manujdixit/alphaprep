import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <span className="text-xl font-serif font-bold text-edu-blue">
                EduVibe
              </span>
            </Link>
            <p className="text-edu-gray text-sm leading-relaxed mb-6">
              Transforming education through personalized 1-on-1 live classes.
              Join us in creating a new learning experience that adapts to each
              student's unique needs and potential.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-edu-gray hover:text-edu-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-edu-gray hover:text-edu-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-edu-gray hover:text-edu-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-edu-black font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div>
            <h3 className="text-edu-black font-medium mb-5">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Math Mastery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Science Excellence
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Language Arts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Test Preparation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors link-underline"
                >
                  Exam Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-edu-black font-medium mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-edu-blue shrink-0 mt-1" />
                <span className="text-edu-gray text-sm">
                  123 Education Avenue, Learning District, Knowledgeville, 54321
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-edu-blue shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-edu-blue shrink-0" />
                <a
                  href="mailto:info@eduvibe.com"
                  className="text-edu-gray hover:text-edu-blue text-sm transition-colors"
                >
                  info@eduvibe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-edu-gray text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} EduVibe. All rights reserved.
          </p>
          <div className="flex gap-5 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-edu-gray hover:text-edu-blue text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-edu-gray hover:text-edu-blue text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-edu-gray hover:text-edu-blue text-xs transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
