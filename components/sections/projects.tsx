"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { siteContent } from "@/lib/content"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 md:py-40 bg-background">
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
              {siteContent.projects.sectionLabel}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground leading-tight">
              {siteContent.projects.headline}
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {siteContent.projects.items.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-muted mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-sm">
                    {project.tags[0]}
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground tracking-wide">
                      {project.tags.join(" / ")} / {project.year}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mt-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-6" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
