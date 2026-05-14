import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { SectionFrame } from "./Shared";
import { Send, Loader2 } from "lucide-react";
import { splitTextAnimation } from "../utils/gsapAnimation";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
ScrollTrigger.clearScrollMemory();

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory();

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const keepRef = useRef(null);
  const touchRef = useRef(null);

  useEffect(() => {
    if (keepRef.current && touchRef.current && sectionRef.current) {
      splitTextAnimation(keepRef.current, touchRef.current, sectionRef.current, {
        start: "top 60%",
        scrub: 1.2,
      });
      
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, []);

  const update = (k) => (e) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);

    try {
      await axios.post(`${API}/contact`, form);

      toast.success("Message sent! I'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      const detail = err?.response?.data?.detail;

      toast.error(
        typeof detail === "string"
          ? detail
          : "Couldn't send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy.");
    }
  };

  return (
    <SectionFrame
      theme="cream"
      id="contact"
      dataTestId="section-contact"
      ref={sectionRef}
    >
      <div className="font-display text-[20vw] sm:text-[15vw] lg:text-[12rem] xl:text-[14rem] leading-[0.85] uppercase text-[var(--olive)] flex flex-wrap gap-4">
        <span
          ref={keepRef}
          data-testid="contact-title-keep"
        >
          Keep
        </span>
        <span
          ref={touchRef}
          data-testid="contact-title-touch"
        >
          In Touch
        </span>
      </div>

      <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-12">

          {/* FORM */}
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="flex flex-col gap-4 max-w-lg"
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={update("name")}
              disabled={submitting}
              className="px-4 py-3 rounded-lg bg-[var(--olive)]/10 border border-[var(--olive)]/30 text-[var(--olive)] placeholder-[var(--olive)]/50 focus:outline-none focus:border-[var(--olive)]/60 disabled:opacity-60 transition-colors"
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={update("email")}
              disabled={submitting}
              className="px-4 py-3 rounded-lg bg-[var(--olive)]/10 border border-[var(--olive)]/30 text-[var(--olive)] placeholder-[var(--olive)]/50 focus:outline-none focus:border-[var(--olive)]/60 disabled:opacity-60 transition-colors"
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={update("subject")}
              disabled={submitting}
              className="px-4 py-3 rounded-lg bg-[var(--olive)]/10 border border-[var(--olive)]/30 text-[var(--olive)] placeholder-[var(--olive)]/50 focus:outline-none focus:border-[var(--olive)]/60 disabled:opacity-60 transition-colors"
            />

            <textarea
              placeholder="Message"
              rows="6"
              value={form.message}
              onChange={update("message")}
              disabled={submitting}
              className="px-4 py-3 rounded-lg bg-[var(--olive)]/10 border border-[var(--olive)]/30 text-[var(--olive)] placeholder-[var(--olive)]/50 focus:outline-none focus:border-[var(--olive)]/60 disabled:opacity-60 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--olive)] text-[var(--cream)] font-medium hover:bg-[var(--olive-dark)] disabled:opacity-60 transition-colors"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* CONTACT LINKS */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div>
              <p className="text-xl font-bold text-[var(--olive)]/70">
                Email
              </p>

              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <a
                  href="mailto:imanishnegi8000@gmail.com"
                  className="text-[var(--olive)] font-semibold break-all hover:underline"
                  onClick={() =>
                    copyToClipboard(
                      "imanishnegi8000@gmail.com"
                    )}
                >
                  imanishnegi8000@gmail.com
                </a>
              </div>
            </div>

            {/* LINKEDIN */}
            <div>
              <p className="text-xl font-bold text-[var(--olive)]/70">
                LinkedIn
              </p>

              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/manish-negi-627401255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--olive)] font-semibold break-all hover:underline"
                  onClick={() =>
                    copyToClipboard(
                      "https://linkedin.com/in/manish-negi-627401255"
                    )
                  }
                >
                  linkedin.com/in/manishnegi
                </a>
              </div>
            </div>

            {/* GITHUB */}
            <div>
              <p className="text-xl font-bold text-[var(--olive)]/70">
                Github
              </p>

              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <a
                  href="https://github.com/manishnegii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--olive)] font-semibold break-all hover:underline"
                  onClick={() =>
                    copyToClipboard(
                      "https://github.com/manishnegii"
                    )
                  }
                >
                  github.com/manishnegi
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex flex-col gap-6">

          <div data-testid="contact-info-block">
            <h3 className="font-bold text-xl sm:text-2xl text-[var(--olive)]">
              Let's Connect
            </h3>

            <p className="mt-3 text-[var(--olive)]/80 leading-relaxed">
              Whether you have a project in mind, want to discuss
              architecture patterns, or just want to chat about Java
              and distributed systems — I'd love to hear from you.
              Drop me a message and I'll get back within 24 hours.
            </p>
          </div>

          <div data-testid="response-time-block">
            <h4 className="font-semibold text-[var(--olive)]">
              Response Time
            </h4>

            <p className="mt-2 text-[var(--olive)]/80">
              Typically within 24 hours during weekdays.
            </p>
          </div>

        </div>
      </div>
      <div className="mt-[2rem] border-t border-[var(--cream)]/10 text-center">
  <p className="text-sm tracking-wide text-[var(--cream)]/55 font-bold">
    © {new Date().getFullYear()} Manish Negi — Built with React, GSAP & Spring Boot
  </p>
</div>
    </SectionFrame>
  );
};

export default Contact;