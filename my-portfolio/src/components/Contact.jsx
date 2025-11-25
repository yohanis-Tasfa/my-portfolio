import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Github, Linkedin, Send, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // REQUIRED: Add access key
    formData.append("access_key", "87e29567-f3dc-4bb0-864b-ae8acf44f584");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully ✔");

      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong");
      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-24 pb-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0018] to-black"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold text-white">
          Get In Touch
        </h1>

        <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
          Ready to bring your ideas to life? Let's collaborate and create
          something amazing together.
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Connect With Me
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always excited to discuss new opportunities and innovative
              projects. Reach out anytime.
            </p>

            <div className="flex gap-5 mt-4">
              <a
                href="https://github.com/yohanis-Tasfa"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Github className="text-gray-300" size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/yohanis-tasfa-93158b374"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Linkedin className="text-sky-400" size={24} />
              </a>

              <a
                href="https://t.me/jo_tesfa"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Send className="text-pink-400" size={24} />
              </a>

              <a
                href="mailto:yohanistesfa457@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Mail className="text-red-400" size={24} />
              </a>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={onSubmit}
            variants={container}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-lg"
          >
            <input
              type="hidden"
              name="from_name"
              value="Portfolio Contact Form"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 text-sm">Name </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-gray-200"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Email </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-gray-200"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-300 text-sm">Subject </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Project inquiry, collaboration, etc."
                className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-gray-200"
              />
            </div>

            <div className="mt-6">
              <label className="text-gray-300 text-sm">Message </label>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Tell me about your project or idea..."
                className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-gray-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition text-white p-3 rounded-xl font-semibold"
            >
              {result ? result : "Send Message"}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
