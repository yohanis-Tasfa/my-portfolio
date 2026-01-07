import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Github, Linkedin, Send, Mail } from "lucide-react";

const _motion = motion;

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
      <div className="absolute inset-0 bg-transparent"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold">
          Get In Touch
        </h1>

        <p className="text-center text-[color:var(--color-muted)] mt-4 max-w-2xl mx-auto text-lg">
          Ready to bring your ideas to life? Let's collaborate and create
          something amazing together.
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-14">
          {/* center the form across medium+ screens */}
          <div className="md:col-span-2 md:flex md:justify-center">
            {/* FORM */}
            <motion.form
              onSubmit={onSubmit}
              variants={container}
              className="bg-[color:var(--surface)] backdrop-blur-xl border border-[color:var(--border)] p-8 md:p-10 rounded-3xl shadow-lg max-w-2xl w-full"
            >
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Contact Form"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[color:var(--color-muted)] text-sm">
                    Name{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full mt-2 p-3 bg-[color:var(--input-bg)] border border-[color:var(--border)] rounded-xl text-[color:var(--input-text)]"
                  />
                </div>

                <div>
                  <label className="text-[color:var(--color-muted)] text-sm">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full mt-2 p-3 bg-[color:var(--input-bg)] border border-[color:var(--border)] rounded-xl text-[color:var(--input-text)]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-[color:var(--color-muted)] text-sm">
                  Subject{" "}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry, collaboration, etc."
                  className="w-full mt-2 p-3 bg-[color:var(--input-bg)] border border-[color:var(--border)] rounded-xl text-[color:var(--input-text)]"
                />
              </div>

              <div className="mt-6">
                <label className="text-[color:var(--color-muted)] text-sm">
                  Message{" "}
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full mt-2 p-3 bg-[color:var(--input-bg)] border border-[color:var(--border)] rounded-xl text-[color:var(--input-text)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 transition text-black p-3 rounded-xl font-semibold"
              >
                {result ? result : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
