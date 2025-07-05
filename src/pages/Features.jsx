import { motion } from "framer-motion";
import { Briefcase, Users, ClipboardCheck, BarChart, MessageSquare } from "lucide-react";

export default function Features() {
  const featureList = [
    {
      title: "AI-Powered Hiring",
      icon: <Briefcase className="w-12 h-12 text-indigo-600" />,
      description: `
        Automate your entire recruitment flow with AI-generated job descriptions,
        resume parsing, skills scoring, and trust scores. Speed up shortlisting
        with WhatsApp-native interviews and human approvals where needed,
        designed for Indian cultural and compliance needs.`,
    },
    {
      title: "Employee Management",
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      description: `
        Integrated attendance with QR, selfie, or location capture;
        festival and cultural leave handling; UPI and cash payroll;
        compliance-friendly policy templates, all streamlined with a modern
        HR dashboard.`,
    },
    {
      title: "Project & Client Tracking",
      icon: <ClipboardCheck className="w-12 h-12 text-indigo-600" />,
      description: `
        Kanban boards, milestone tracking, budgeting, time tracking,
        and even client invoices built right into WorkZen.
        Stay on top of projects without the need for extra tools,
        all synced through WhatsApp or web.`,
    },
    {
      title: "Performance & Onboarding",
      icon: <BarChart className="w-12 h-12 text-indigo-600" />,
      description: `
        Micro-learning LMS for onboarding, performance reviews,
        skill tests, and smart reminders to ensure a growing, skilled workforce
        from day one.`,
    },
    {
      title: "WhatsApp-Integrated Workflows",
      icon: <MessageSquare className="w-12 h-12 text-indigo-600" />,
      description: `
        From leave requests to approvals, attendance selfies to
        project updates, WorkZen is designed to be WhatsApp-native,
        reducing training time and working seamlessly with your team's
        favorite messaging app.`,
    },
  ];

  return (
    <section
      className="py-20 bg-white w-full overflow-x-hidden"
      style={{ width: "100vw" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-extrabold text-indigo-700 mb-16 tracking-tight">
          WorkZen Features
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-indigo-50 rounded-3xl p-10 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-3xl font-semibold text-indigo-700 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-indigo-700 whitespace-pre-line text-lg leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
