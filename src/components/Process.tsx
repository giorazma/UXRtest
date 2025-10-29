import { MessageSquare, Users, PlayCircle, BarChart, FileText } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Understanding the Problem',
    description: 'We start with a deep dive into your business goals, user challenges, and research questions. This ensures we are solving the right problems.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Recruiting Participants',
    description: 'I identify and recruit participants who match your target audience. Quality participants lead to quality insights.',
  },
  {
    icon: PlayCircle,
    number: '03',
    title: 'Running Tests & Interviews',
    description: 'Through moderated sessions, surveys, or remote testing, I gather rich qualitative and quantitative data about user behavior.',
  },
  {
    icon: BarChart,
    number: '04',
    title: 'Analyzing Data',
    description: 'I synthesize findings, identify patterns, and extract meaningful insights that answer your key research questions.',
  },
  {
    icon: FileText,
    number: '05',
    title: 'Reporting & Recommendations',
    description: 'You receive a clear, actionable report with prioritized recommendations and next steps for immediate implementation.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My research process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A clear, collaborative approach that delivers insights you can act on immediately.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-sm font-bold text-blue-600">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-50"></div>

                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
