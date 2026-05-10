"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Instagram, Mail, ArrowRight } from "lucide-react"
import { siteContent } from "@/lib/content"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
  }

  return (
    <section id="contact" className="py-24 md:py-40 section-dark bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-16">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50"
              >
                {siteContent.contact.sectionLabel}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-8 text-primary-foreground leading-tight"
              >
                {siteContent.contact.headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-primary-foreground/60 leading-relaxed mb-12 max-w-sm"
              >
                {siteContent.contact.description}
              </motion.p>

              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <a
                  href={`mailto:${siteContent.email}`}
                  className="group flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{siteContent.email}</span>
                </a>

                <a
                  href={siteContent.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@{siteContent.social.instagram.split("/").pop()}</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-primary-foreground/40 mb-3 tracking-wide uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/50 focus:outline-none transition-colors"
                  placeholder={siteContent.contact.form.namePlaceholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-primary-foreground/40 mb-3 tracking-wide uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/50 focus:outline-none transition-colors"
                  placeholder={siteContent.contact.form.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-primary-foreground/40 mb-3 tracking-wide uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/50 focus:outline-none transition-colors resize-none"
                  placeholder={siteContent.contact.form.messagePlaceholder}
                  required
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 text-sm tracking-wide text-primary-foreground hover:text-accent transition-colors pt-4"
              >
                {siteContent.contact.form.submitButton}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
