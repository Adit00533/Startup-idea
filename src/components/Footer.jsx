export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold text-white">WorkZen</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
