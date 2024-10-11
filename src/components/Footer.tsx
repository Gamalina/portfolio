'use client'

import Button from "./BackToTopButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Daniel Rud Callesen. All rights
          reserved.
        </p>
        <Button onClick={scrollToTop}>Back to Top </Button>
      </div>
    </footer>
  );
}