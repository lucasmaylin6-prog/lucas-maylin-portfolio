"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, Music, BookOpen, Folder, ArrowUpRight } from "lucide-react"
import { siteContent, type ArchiveItem } from "@/lib/content"

const iconMap: Record<string, typeof FileText> = {
  Research: BookOpen,
  Scores: Music,
  Writings: FileText,
  Projects: Folder,
}

export function Archive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? siteContent.archive.items 
    : siteContent.archive.items.filter(item => item.category === activeCategory)

  return (
    <section id="archive" className="py-24 md:py-40 section-dark bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-16">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50">
                {siteContent.archive.sectionLabel}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-primary-foreground leading-tight">
                {siteContent.archive.headline}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 lg:flex lg:items-end lg:justify-end"
            >
              <p className="text-primary-foreground/60 leading-relaxed max-w-md">
                {siteContent.archive.description}
              </p>
            </motion.div>
          </div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 mb-12 border-b border-primary-foreground/10 pb-6"
          >
            {siteContent.archive.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-wide transition-colors ${
                  activeCategory === cat 
                    ? "text-primary-foreground" 
                    : "text-primary-foreground/40 hover:text-primary-foreground/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Archive Items */}
          <div className="space-y-0">
            {filteredItems.map((item: ArchiveItem, index: number) => {
              const Icon = iconMap[item.category] || FileText
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group border-b border-primary-foreground/10 py-8 cursor-pointer"
                >
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                    {/* Type & Icon */}
                    <div className="md:col-span-2 flex items-center gap-3">
                      <Icon className="w-4 h-4 text-primary-foreground/40" />
                      <span className="text-xs text-primary-foreground/50 tracking-wide uppercase">
                        {item.type}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-5">
                      <h3 className="font-serif text-xl md:text-2xl text-primary-foreground group-hover:text-accent transition-colors flex items-center gap-3">
                        {item.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4">
                      <p className="text-sm text-primary-foreground/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Year */}
                    <div className="md:col-span-1 md:text-right">
                      <span className="text-xs text-primary-foreground/40">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
