import React, { useMemo } from 'react';

const FAQSection = () => {
  const faqs = useMemo(
    () => [
      {
        q: 'What are your spa timings and do you take walk-ins?',
        a: 'We operate daily from 10:00 AM to 10:00 PM. Walk-ins are welcome, but we recommend advance booking to secure your preferred slot.'
      },
      {
        q: 'How can I book an appointment?',
        a: 'You can book via WhatsApp using the Book Now buttons on our website or call us directly. We will confirm your time and therapist preference.'
      },
      {
        q: 'What massage services do you offer and what is the duration?',
        a: 'We offer deep tissue, hot stone, Swedish full body, Thai massage, hot Oil Massage, and foot reflexology. Sessions typically range from 30 to 90 minutes depending on the service.'
      },

      {
        q: 'Do you have couple massage rooms?',
        a: 'Yes, we provide couple’s spa experiences subject to availability. Please mention “couple massage” while booking so we can reserve the room.'
      },
      {
        q: 'What oils and products do you use? Can I choose the pressure?',
        a: 'We use premium-grade, skin-safe oils and aromatherapy blends. Pressure and technique are fully customizable—please inform your therapist of your preferences.'
      },
      {
        q: 'Are your therapists certified? Can I request a female therapist?',
        a: 'All therapists are trained professionals. You may request a female therapist while booking and we will do our best to accommodate.'
      },
      {
        q: 'What about hygiene and safety?',
        a: 'Hygiene is our priority. Linens are changed after every session, rooms and equipment are sanitized regularly, and disposable items are used wherever appropriate.'
      },
      {
        q: 'Where are you located? Is parking available?',
        a: 'We are located in Nagpur, Madhay Pradesh. Nearby street and paid parking options are typically available; message us for exact directions.'
      },
      {
        q: 'Do you offer gift vouchers and premium plans?',
        a: 'Yes. We offer digital and physical gift vouchers, plus premium membership plans (e.g., Silver, Gold, Platinum) with bundled sessions, priority booking, and exclusive discounts. Message us on WhatsApp to see current plan options and benefits.'
      },

    ],
    []
  );

  const jsonLd = useMemo(() => {
    const mainEntity = faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity,
    };
  }, [faqs]);

  const handleWhatsApp = () => {
    const message = 'Hello, I want to book a spa appointment at Austin Spa Banglore .';
    window.open(`https://wa.me/918976846040?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="w-full px-6 lg:px-12 mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Answers to common booking and service queries from our guests.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="group border border-gray-200 rounded-2xl bg-gray-50 p-5 open:bg-white open:shadow-md transition-all">
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.q}
                </h3>
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#465991] text-white text-sm transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="pt-3 text-gray-700 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={handleWhatsApp} className="bg-[#465991] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:bg-[#380b40] transition-all duration-300 transform hover:scale-105">
            Book on WhatsApp
          </button>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  );
};

export default FAQSection;


