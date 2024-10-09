'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  useSmoothScroll()

  const isActive = (path: string) => pathname === path

  const toggleMenu = () => setIsOpen(!isOpen)

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [isOpen])

  return (
    <header className="p-5 flex justify-between items-center bg-gray-800 relative">
      <div className="text-2xl font-bold text-yellow-500">DC</div>
      <div className="lg:hidden relative">
        <button className="text-white z-10" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <nav className="mobile-menu absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-2 z-20">
            <Link
              href="#about"
              className={`block px-4 py-2 text-sm ${
                isActive('#about') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#currentproject"
              className={`block px-4 py-2 text-sm ${
                isActive('#currentproject') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Current Project
            </Link>
            <Link
              href="#skills"
              className={`block px-4 py-2 text-sm ${
                isActive('#skills') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Skills & Software
            </Link>
            <Link
              href="#portfolio"
              className={`block px-4 py-2 text-sm ${
                isActive('#portfolio') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#experience"
              className={`block px-4 py-2 text-sm ${
                isActive('#experience') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </nav>
        )}
      </div>
      <nav className="hidden lg:flex flex-grow justify-end space-x-8">
        <Link
          href="#about"
          className={`hover:text-yellow-500 transition-colors pb-1 ${
            isActive('#about') ? 'border-b-2 border-yellow-500' : ''
          }`}
        >
          About
        </Link>
        <Link
          href="#currentproject"
          className={`hover:text-yellow-500 transition-colors pb-1 ${
            isActive('#currentproject') ? 'border-b-2 border-yellow-500' : ''
          }`}
        >
          Current Project
        </Link>
        <Link
          href="#skills"
          className={`hover:text-yellow-500 transition-colors pb-1 ${
            isActive('#skills') ? 'border-b-2 border-yellow-500' : ''
          }`}
        >
          Skills & Software
        </Link>
        <Link
          href="#portfolio"
          className={`hover:text-yellow-500 transition-colors pb-1 ${
            isActive('#portfolio') ? 'border-b-2 border-yellow-500' : ''
          }`}
        >
          Portfolio
        </Link>
        <Link
          href="#experience"
          className={`hover:text-yellow-500 transition-colors pb-1 ${
            isActive('#experience') ? 'border-b-2 border-yellow-500' : ''
          }`}
        >
          Experience
        </Link>
      </nav>
    </header>
  )
}