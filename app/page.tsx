import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Archive } from "@/components/sections/archive"
import { Projects } from "@/components/sections/projects"
import { Performances } from "@/components/sections/performances"
import { Gallery } from "@/components/sections/gallery"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Archive />
      <Projects />
      <Performances />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
