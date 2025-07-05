export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-24 bg-gradient-to-br from-indigo-100 via-indigo-50 to-white text-indigo-900"
        style={{ width: "100vw" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-8 tracking-tight drop-shadow-sm">
            About WorkZen
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto text-indigo-800">
            WorkZen is a next-generation Trust + Workforce + Growth OS built for Indian startups and medium
            businesses — blending AI-powered hiring, client/project tracking, and WhatsApp-native workflows
            designed for Indian languages, payments, and affordability.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section
        className="py-24 bg-indigo-50 text-indigo-900"
        style={{ width: "100vw" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold mb-6 border-b-4 border-indigo-600 pb-2">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-indigo-700">
              To empower Indian founders and HR leaders with a culturally intelligent,
              affordable, and AI-enhanced workforce platform that helps them hire smarter,
              manage faster, and grow more sustainably.
            </p>
          </div>

          <div className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold mb-6 border-b-4 border-indigo-600 pb-2">
              What Makes Us Unique
            </h3>
            <ul className="list-disc list-inside space-y-4 text-lg text-indigo-700">
              <li>AI trust-focused hiring, built for India</li>
              <li>WhatsApp-native workflows for HR</li>
              <li>Local language onboarding (Hindi, Tamil, Kannada)</li>
              <li>UPI, cash, and festival bonus support</li>
              <li>Modular, affordable, quick to deploy</li>
              <li>Customized to your needs</li>
              <li>Easy for medium-sized business operations</li>
              <li>100% Made in India</li>
            </ul>
          </div>
        </div>

        {/* Why Now */}
        <div
          className="mt-20 bg-indigo-700 text-white p-14 rounded-3xl text-center shadow-2xl max-w-5xl mx-auto px-6"
          style={{ width: "100vw", maxWidth: "95vw" }}
        >
          <h3 className="text-4xl font-extrabold mb-6 tracking-wide drop-shadow-md">
            Why Now?
          </h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            With over 75,000 startups and 63 million MSMEs in India, combined with WhatsApp and UPI adoption,
            the time is perfect for WorkZen to help local businesses modernize people and project operations.
          </p>
        </div>

        {/* Closing Section */}
        <div
          className="mt-16 text-center max-w-4xl mx-auto px-6"
          style={{ width: "100vw", maxWidth: "90vw" }}
        >
          <h4 className="text-3xl font-bold text-indigo-700 mb-4 tracking-tight">
            Customized for You. Built for India. Priced for Growth.
          </h4>
          <p className="text-lg text-indigo-800 leading-relaxed max-w-3xl mx-auto">
            Whether you're a 10-person startup or growing mid-sized enterprise, WorkZen adapts to your team
            and scales with your business — simply, affordably, and efficiently.
          </p>
        </div>
      </section>
    </>
  );
}
