import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The research insights were a game-changer for our product roadmap. We finally understood why users were struggling with our onboarding process, and the recommendations were spot-on.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "FinTech Startup",
  },
  {
    quote: "Working together on accessibility was eye-opening. Not only did we become WCAG compliant, but we gained a much deeper appreciation for inclusive design principles.",
    author: "Michael Rodriguez",
    role: "Design Lead",
    company: "Healthcare Platform",
  },
  {
    quote: "The usability testing sessions revealed issues we never would have found internally. The actionable recommendations paid for themselves within the first quarter.",
    author: "Emily Thompson",
    role: "VP of Product",
    company: "E-commerce Company",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What clients say
          </h2>
          <p className="text-xl text-slate-600">
            Research that makes a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-200 transition-all hover:shadow-lg"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-4 opacity-50" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-slate-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-slate-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
