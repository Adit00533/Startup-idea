import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen w-full overflow-hidden text-white"
      style={{ width: "100vw" }} // full viewport width
    >
      {/* Background Image with Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531497865146-5a486d61ad22?auto=format&fit=crop&w=1600&q=80')",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 flex flex-col items-center py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 w-full"
        >
          Welcome to WorkZen !!!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mb-4 font-medium w-full"
        >
          Your All-in-One Software Solution for Startups & Growing Businesses
          Customized to Match Your Vision
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg mb-8 w-full"
        >
          Simplify operations, hire smarter, and manage people & projects — built for Indian startups & SMBs.
        </motion.p>

        <motion.a
  href="/features"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full shadow-md text-white text-sm md:text-base font-semibold transition"
>
  Explore Features
</motion.a>

      </div>
    </section>
  );
}
