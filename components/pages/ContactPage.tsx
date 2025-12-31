"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, User, MessageSquare } from "lucide-react";

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-brand">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, white 2px, transparent 2px),
                linear-gradient(to bottom, white 2px, transparent 2px)
              `,
              backgroundSize: "60px 60px",
            }}
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with us - We&apos;re here to help and answer any
              questions you may have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        ref={sectionRef}
        className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(var(--color-primary)) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(var(--color-primary)) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Contact Info and Form Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Section 1: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-l-primary"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 bg-gradient-brand rounded-full" />
              </div>

              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                We&apos;d love to hear from you. Whether you have questions
                about admissions, programs, or just want to learn more about
                IMCG Humak, feel free to reach out.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Islamabad Model College, Humak
                      <br />
                      Near DHA Phase 2, Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:051-4493301"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      051-4493301
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:imcghumak@hotmail.com"
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      imcghumak@hotmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 3:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
                  Send a Message
                </h2>
                <div className="w-20 h-1 bg-gradient-brand rounded-full" />
              </div>

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-gray-700"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-gray-700"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-gray-700"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-gray-700"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none text-gray-700"
                      placeholder="Write your message here..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-brand text-white font-semibold py-4 rounded-xl hover:bg-gradient-brand-hover transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>

          {/* Section 3: Google Map - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Find Us on Map
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Near DHA Phase 2, Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps?q=33.542446780136096,73.16064662306793&hl=es;z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IMCG Humak Location"
                className="absolute inset-0"
              />
            </div>

            {/* Map Footer with Directions Link */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
              <a
                href="https://www.google.com/maps?q=33.542446780136096,73.16064662306793"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-pink-600 font-semibold transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions on Google Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
