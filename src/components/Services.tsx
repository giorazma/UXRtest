import {
    Search,
    Eye,
    Accessibility,
    Lightbulb,
    GitBranch,
    BarChart3
  } from 'lucide-react';
  
  const services = [
    {
      icon: Search,
      title: 'UX Research & Usability Testing',
      description: 'Discover how users interact with your product through moderated sessions, remote testing, and user interviews. Identify pain points and opportunities before they impact your bottom line.',
      color: 'blue',
    },
    {
      icon: Accessibility,
      title: 'Accessibility Audits & WCAG Compliance',
      description: 'Ensure your digital products are inclusive and compliant with WCAG standards. Reach a wider audience while reducing legal risks and demonstrating social responsibility.',
      color: 'purple',
    },
    {
      icon: Lightbulb,
      title: 'Concept & Prototype Testing',
      description: 'Validate ideas early and often. Test concepts, wireframes, and prototypes with real users to refine your vision before investing in full development.',
      color: 'green',
    },
    {
      icon: Eye,
      title: 'UX Strategy & User Journey Analysis',
      description: 'Map the complete user experience from awareness to advocacy. Identify friction points and optimize touchpoints to create seamless, delightful journeys.',
      color: 'orange',
    },
    {
      icon: GitBranch,
      title: 'Card Sorting & Tree Testing',
      description: 'Optimize information architecture and navigation structures. Help users find what they need quickly with research-backed site structures.',
      color: 'cyan',
    },
    {
      icon: BarChart3,
      title: 'A/B Testing & Funnel Analysis',
      description: 'Make data-driven decisions with quantitative research. Identify conversion blockers and optimize user flows to maximize business outcomes.',
      color: 'pink',
    },
  ];
  
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-100 group-hover:bg-blue-100',
    purple: 'bg-purple-50 border-purple-100 group-hover:bg-purple-100',
    green: 'bg-green-50 border-green-100 group-hover:bg-green-100',
    orange: 'bg-orange-50 border-orange-100 group-hover:bg-orange-100',
    cyan: 'bg-cyan-50 border-cyan-100 group-hover:bg-cyan-100',
    pink: 'bg-pink-50 border-pink-100 group-hover:bg-pink-100',
  };
  
  const iconColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    cyan: 'text-cyan-600',
    pink: 'text-pink-600',
  };
  
  export default function Services() {
    return (
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Services that drive results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial research to actionable insights, I provide comprehensive UX research
              services tailored to your product's unique needs.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`inline-flex p-3 rounded-xl mb-4 border transition-colors ${colorClasses[service.color]}`}>
                    <Icon className={`w-6 h-6 ${iconColorClasses[service.color]}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  