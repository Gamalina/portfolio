import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-5 flex justify-between items-center bg-gray-800">
      <div className="text-2xl font-bold text-yellow-500">DC</div>
      <nav className="space-x-4">
        <Link href="#about" className="hover:text-yellow-500 transition-colors">
          About
        </Link>
        <Link
          href="#portfolio"
          className="hover:text-yellow-500 transition-colors"
        >
          Portfolio
        </Link>
        <Link
          href="#contact"
          className="hover:text-yellow-500 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}