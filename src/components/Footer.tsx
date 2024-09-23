export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Daniel Rud Callesen. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}