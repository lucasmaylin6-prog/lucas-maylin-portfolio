"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { siteContent } from "@/lib/content"

const aspectRatios = ["landscape", "portrait", "square", "landscape", "portrait", "square"]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? siteContent.gallery.images.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === siteContent.gallery.images.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <>
      <section id="gallery" className="py-24 md:py-40 bg-background">
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
                {siteContent.gallery.sectionLabel}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground leading-tight">
                {siteContent.gallery.headline}
              </h2>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {siteContent.gallery.images.map((image, index) => {
                const aspect = aspectRatios[index % aspectRatios.length]
                return (
                  <motion.button
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative overflow-hidden bg-muted group cursor-pointer ${
                      aspect === "portrait" ? "row-span-2" : ""
                    } ${aspect === "landscape" ? "col-span-2 md:col-span-1" : ""}`}
                    style={{
                      aspectRatio: aspect === "portrait" ? "3/4" : aspect === "landscape" ? "4/3" : "1/1",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full mx-6 relative"
              style={{ aspectRatio: "16/10" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={siteContent.gallery.images[selectedIndex]?.src}
                alt={siteContent.gallery.images[selectedIndex]?.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/40 text-sm">
              {selectedIndex + 1} / {siteContent.gallery.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
