import { Briefcase, TrendingUp, CheckCircle2, Target, Calendar, BarChart3 } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: Briefcase,
      title: "Organize Applications",
      description:
        "Create custom boards and columns to track your job applications at every stage of the process.",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Monitor your application status from applied → interview → offer with clear visual boards.",
    },
    {
      icon: CheckCircle2,
      title: "Stay Organized",
      description:
        "Keep all your job search information, notes, and documents in one centralized place.",
    },
    {
      icon: Target,
      title: "Set Goals & Targets",
      description:
        "Define weekly application goals and track your momentum toward landing the right role.",
    },
    {
      icon: Calendar,
      title: "Schedule & Prepare",
      description:
        "Integrated calendar with reminders, follow-up prompts, and interview prep checklists.",
    },
    {
      icon: BarChart3,
      title: "Get Insights",
      description:
        "See application stats, response rates, and trends to refine your job search strategy.",
    },
  ];

  return (
    <section className="border-t bg-muted/30 py-20 md:py-28">
      {/* Optional very subtle background grid – comment out if you want plain */}
      <div
        className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))] -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Cpath d="M0 0h20v20H0V0zm20 20h20v20H20V20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to run
            <br className="hidden sm:block" />
            <span className="text-indigo-600">a serious job search</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Clean, focused tools designed to help you apply smarter, stay on top of every opportunity, and move faster toward better offers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                <feature.icon className="h-7 w-7" strokeWidth={2} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional trust line at bottom */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Built for job seekers who treat the search like a real project — because it is.
          </p>
        </div>
      </div>
    </section>
  );
}