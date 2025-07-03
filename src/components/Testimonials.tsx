import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AAHAR has revolutionized how we handle surplus food. The QR verification system gives us confidence that our donations reach those in need, and the impact metrics help us demonstrate our sustainability commitment to stakeholders.",
      author: "Maria Rodriguez",
      role: "Sustainability Manager",
      company: "Grand Hotel Group",
    },
    {
      quote: "As an NGO distributing food to vulnerable communities, we've seen a 40% increase in donations since using AAHAR. The platform's verification system has streamlined our operations and built trust with our donors.",
      author: "James Chen",
      role: "Director",
      company: "Community Food Network",
    },
    {
      quote: "The analytics dashboard has been crucial for our ESG reporting. We've saved over €12,000 annually and reduced our carbon footprint significantly by tracking and managing our food waste more effectively.",
      author: "Sarah Johnson",
      role: "Operations Director",
      company: "Fresh Catering Services",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Partners Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear from the organizations making a difference with AAHAR.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-xl bg-white p-6 shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-primary/30">
                  <path d="M10 11h-1c-1 0-2 0-2 2v3h4v-3c0-2-1-2-2-2h-1m14 0h-1c-1 0-2 0-2 2v3h4v-3c0-2-1-2-2-2h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
