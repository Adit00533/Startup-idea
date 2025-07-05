export default function Contact() {
  return (
    <section
      className="bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-900 flex flex-col justify-center min-h-screen w-full py-24 px-6"
      style={{ width: "100vw" }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-tight drop-shadow-sm">
          Contact Us
        </h2>
        <p className="text-xl mb-16 text-center max-w-xl mx-auto text-indigo-700 leading-relaxed">
          Interested in transforming your hiring, project management, or HR workflows? 
          Please fill out the form below, and our team will get back to you by email to schedule 
          a personalized demo.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-3xl shadow-xl p-12 max-w-2xl mx-auto space-y-8"
        >
          <div>
            <label className="block text-lg font-semibold mb-3" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-indigo-300 rounded-xl px-5 py-4 text-lg placeholder-indigo-400
                         focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 transition"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-indigo-300 rounded-xl px-5 py-4 text-lg placeholder-indigo-400
                         focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-indigo-300 rounded-xl px-5 py-4 text-lg placeholder-indigo-400 resize-none
                         focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-600 transition"
              placeholder="Tell us about your requirements"
              rows={6}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-extrabold text-xl py-4 rounded-3xl shadow-lg
                       hover:bg-indigo-800 active:scale-95 transition-transform duration-150"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
