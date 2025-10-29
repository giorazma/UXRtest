import { TrendingUp, Accessibility, Target, CheckCircle } from 'lucide-react';

const cases = [
  {
    icon: TrendingUp,
    metric: '30%',
    title: 'Improved Mobile Banking Onboarding',
    description: 'Through usability testing and iterative design improvements, we increased onboarding completion rates and reduced drop-off by identifying key friction points in the sign-up flow.',
    color: 'blue',
    tags: ['Usability Testing', 'Mobile UX', 'Banking'],
  },
  {
    icon: Accessibility,
    metric: '95%',
    title: 'Enhanced Accessibility Compliance',
    description: 'Comprehensive WCAG audit and remediation increased accessibility score from 68% to 95%, opening the platform to thousands of new users with diverse abilities.',
    color: 'purple',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
  },
  {
    icon: Target,
    metric: '45%',
    title: 'Optimized E-commerce Checkout Flow',
    description: 'Card sorting and user journey mapping revealed confusion in the checkout process. Redesign led to higher conversion and reduced cart abandonment.',
    color: 'green',
    tags: ['User Journey', 'Conversion', 'E-commerce'],
  },
  {
    icon: CheckCircle,
    metric: '2.5x',
    title: 'Increased Feature Adoption',
    description: 'Concept testing and prototype validation helped prioritize features users actually wanted, resulting in higher engagement and feature utilization.',
    color: 'orange',
    tags: ['Prototype Testing', 'Feature Discovery', 'Product Strategy'],
  },
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
};

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Research that delivers results
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real examples of how user research drives measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.title}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${colorClasses[study.color]} p-8 text-white`}>
                  <Icon className="w-10 h-10 mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{study.metric}</div>
                  <div className="text-white/90 font-medium">Impact</div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
