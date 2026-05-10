"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { siteContent } from "@/lib/content"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md" : ""
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <a href="#" className="font-serif text-lg tracking-tight text-foreground uppercase">
              {siteContent.name}
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/10 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-50 md:hidden"
            >
              <div className="flex items-center justify-between p-6">
                <span className="font-serif text-sm uppercase tracking-wide">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="px-6 py-8">
                <ul className="space-y-8">
                  {siteContent.navigation.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
