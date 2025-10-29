import { TrendingUp, DollarSign, Users, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Decisions',
    description: 'Replace assumptions and opinions with validated user insights. Make confident product decisions backed by real evidence.',
  },
  {
    icon: DollarSign,
    title: 'Lower Development Costs',
    description: 'Catch usability issues early in the design phase. Save time and money by validating before building.',
  },
  {
    icon: Users,
    title: 'Higher Conversion & Retention',
    description: 'Optimize user flows and remove friction points. Increase satisfaction, completion rates, and customer loyalty.',
  },
  {
    icon: ShieldCheck,
    title: 'Better Accessibility',
    description: 'Create inclusive experiences for all users. Expand your market reach while building a more ethical product.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why work with me?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Research isn't just about gathering data—it's about transforming insights
            into competitive advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex gap-6 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-blue-200 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
