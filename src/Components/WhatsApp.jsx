import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = encodeURIComponent(
      `Hello Tanmayshukla 👋,%0A%0AI am ${name}.%0AEmail: ${email}%0AMessage: ${message}`
    );

    const phoneNumber = "918000540298";

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 text-white flex flex-col items-center justify-center relative overflow-hidden"
     
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute top-20 left-10 w-72 h-72  rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg "
      >
        <h2 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
          Get in Touch
        </h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          Let's create something amazing together
        </p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col gap-5 bg-gradient-to-r from-[#0f172a]  to-[#334155] p-10 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="relative">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 pl-12 rounded-xl bg-white border border-purple-500/20 focus:border-purple-400/50 focus:bg-white/10 outline-none transition-all duration-300 text-white placeholder-gray-500"
            />
            <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
          </div>

          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 pl-12 rounded-xl bg-white border border-purple-500/20 focus:border-purple-400/50 focus:bg-white/10 outline-none transition-all duration-300 text-white placeholder-gray-500"
            />
            <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 pl-12 rounded-xl bg-white border border-purple-500/20 focus:border-purple-400/50 focus:bg-white/10 outline-none resize-none transition-all duration-300 text-white placeholder-gray-500"
            ></textarea>
            <i className="fas fa-comment-dots absolute left-4 top-5 text-purple-400"></i>
          </div>

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-2 py-4 px-8 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <i className="fas fa-paper-plane relative z-10" />
            <span className="relative z-10">Send Message</span>
          </motion.button>
        </motion.form>

        {/* Social links or additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-gray-400"
        >
          <p className="text-sm">or reach out directly via WhatsApp</p>
        </motion.div>
      </motion.div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
}