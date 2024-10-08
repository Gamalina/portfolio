'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Header() {
  const pathname = usePathname()
  useSmoothScroll()

  const isActive = (path:string) => pathname === path
  return (
    <header className="p-5 flex justify-between items-center bg-gray-800">
      <div className="text-2xl font-bold text-yellow-500">DC</div>
      <nav className="flex-grow flex justify-end space-x-8">
        <Link href="#workexperience" className={`hover:text-yellow-500 transition-colors pb-1 ${isActive('#about') ? 'border-b-2 border-yellow-500' : ''}`}>
          Experience
        </Link>
        <Link href="#skills" className={`hover:text-yellow-500 transition-colors pb-1 ${isActive('#about') ? 'border-b-2 border-yellow-500' : ''}`}>
          Skills
        </Link>
        <Link
          href="#portfolio"
          className={`hover:text-yellow-500 transition-colors pb-1 ${isActive('#portfolio') ? 'border-b-2 border-yellow-500' : ''}`}
        >
          Portfolio
        </Link>
        <Link
          href="#contact"
          className={`hover:text-yellow-500 transition-colors pb-1 ${isActive('#contact') ? 'border-b-2 border-yellow-500' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}