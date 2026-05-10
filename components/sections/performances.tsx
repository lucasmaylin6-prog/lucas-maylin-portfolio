"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { siteContent } from "@/lib/content"

export function Performances() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="performances" className="py-24 md:py-40 bg-secondary">
      <div className="container mx-auto px-6 lg:px-16">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {siteContent.performances.sectionLabel}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground leading-tight">
              {siteContent.performances.upcomingLabel}
            </h2>
          </motion.div>

          {/* Events List */}
          <div className="space-y-0">
            {siteContent.performances.upcoming.map((event, index) => (
              <motion.a
                key={event.title}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group flex items-center gap-6 md:gap-12 py-6 border-b border-border cursor-pointer"
              >
                {/* Date */}
                <div className="w-16 flex-shrink-0 text-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {event.date}
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-foreground">
                    {event.year}
                  </div>
                </div>

                {/* Event Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-accent transition-colors truncate">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {event.venue}, {event.location}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all flex-shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Past Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
              {siteContent.performances.pastLabel}
            </h3>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {siteContent.performances.past.map((event) => (
                <span
                  key={event.title}
                  className="text-muted-foreground"
                >
                  {event.title} ({event.location}, {event.year})
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
