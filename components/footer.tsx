"use client"

import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

export function Footer() {
  return (
    <footer className="py-8 bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-sm tracking-wide uppercase"
            >
              {siteContent.name}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xs text-primary-foreground/40"
            >
              {siteContent.footer.copyright}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
