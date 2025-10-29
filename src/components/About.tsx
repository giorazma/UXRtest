import { Brain, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hi, I'm a UX Researcher who helps products work better for real people
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With extensive experience in banking apps, mobile onboarding, usability testing,
              and accessibility reviews, I bridge the gap between what businesses build and
              what users actually need.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I combine strategic thinking with research psychology and deep user empathy
              to uncover insights that drive meaningful product improvements. My approach
              is collaborative, pragmatic, and focused on delivering actionable recommendations
              that make a real difference.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <Brain className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Research Psychology
              </h3>
              <p className="text-slate-600">
                Understanding human behavior and decision-making to uncover what users
                really think and feel.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <Target className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Strategic Thinking
              </h3>
              <p className="text-slate-600">
                Aligning research with business goals to drive measurable outcomes and ROI.
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
              <Heart className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                User Empathy
              </h3>
              <p className="text-slate-600">
                Advocating for all users, including those with accessibility needs and diverse backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
