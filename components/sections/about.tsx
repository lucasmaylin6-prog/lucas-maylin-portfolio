"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { siteContent } from "@/lib/content"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                <Image
                  src={siteContent.about.imageSrc}
                  alt={siteContent.about.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              >
                {siteContent.about.sectionLabel}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-10 text-foreground leading-tight"
              >
                {siteContent.about.headline}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-muted-foreground leading-relaxed"
              >
                {siteContent.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex gap-12 mt-14 pt-10 border-t border-border"
              >
                {siteContent.about.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="font-serif text-3xl md:text-4xl text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
