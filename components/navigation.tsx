"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navBackground, setNavBackground] = useState("transparent")

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.querySelector("section")?.offsetHeight || 0;
      if (window.scrollY > heroSectionHeight) {
        setNavBackground("transparent");
      } else {
        setNavBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-${navBackground} ${navBackground === 'white' ? 'text-gray-700' : 'text-grey-200'} backdrop-blur-md`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className=" font-bold text-xl text-[#5362D0]">Vikas Gupta</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="hover:text-[#5362D0] transition-all">
              Courses
            </a>
            <a href="#testimonials" className="hover:text-[#5362D0] transition-all">
              Success Stories
            </a>
            <a href="#about-us" className="hover:text-[#5362D0] transition-all">
              About Us
            </a>
            <a href="#contact" className="hover:text-[#5362D0] transition-all">
              Contact
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#5362D0] border-t border-[#5362D0]">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#courses"
              className="block text-white hover:text-[#5362D0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#testimonials"
              className="block text-white hover:text-[#5362D0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            <a
              href="#about-us"
              className="block text-white hover:text-[#5362D0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-teal-100 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
