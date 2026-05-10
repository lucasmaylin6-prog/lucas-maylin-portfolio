"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { siteContent } from "@/lib/content"

export function Hero() {
  const nameParts = siteContent.hero.title.split(" ")
  
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2437.JPG-wBBF37ndJi4G1CClZGHM9pStvy4J63.jpeg"
          alt="Lucas Maylin performing"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl">
          {/* Main Title */}
          {nameParts.map((part, index) => (
            <div key={part} className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight text-foreground"
              >
                {part}
              </motion.h1>
            </div>
          ))}

          {/* Bottom row with subtitle and scroll */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed"
            >
              {siteContent.hero.subtitle}
            </motion.p>

            {/* Scroll indicator */}
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="text-xs tracking-widest uppercase">{siteContent.hero.scrollText}</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 lg:right-16 top-24 bottom-24 w-px bg-border origin-top hidden md:block"
      />
    </section>
  )
}
