'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  useSmoothScroll()

  const isActive = (path:string) => pathname === path
  return (
    <header className="p-5 flex justify-between items-center bg-gray-800">
      <div className="text-2xl font-bold text-yellow-500">DC</div>
      <nav className="flex-grow flex justify-center space-x-8">
        <Link href="#about" className={`hover:text-yellow-500 transition-colors pb-1 ${isActive('#about') ? 'border-b-2 border-yellow-500' : ''}`}>
          About
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