import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { Plus, Minus } from 'lucide-react'

export default function FAQs() {
  useEffect(() => {
    document.title = 'Frequently Asked Questions | foneAPI'
  }, [])

  const faqs = [
    { 
      q: 'What is foneAPI?', 
      a: 'foneAPI is a cloud communications platform that provides APIs for Voice, Video, Messaging, and Verification. We enable businesses and developers to embed real-time communication capabilities directly into their applications without managing telecom infrastructure.' 
    },
    { 
      q: 'What services does foneAPI offer?', 
      a: 'foneAPI provides:\n\n• Voice API (programmable calling, call routing, call control)\n• Video API\n• SMS & MMS Messaging\n• International message delivery\n• Two-factor authentication (2FA)\n• Phone number provisioning\n• Click-to-call\n• Call monitoring\n• Appointment reminders\n• Lead alerts\n• Global voice call forwarding' 
    },
    { 
      q: 'Who is foneAPI built for?', 
      a: 'foneAPI is designed for:\n\n• SaaS platforms\n• Startups\n• Enterprises\n• Marketplaces\n• Fintech\n• Healthcare platforms\n• E-commerce brands\n• Developers building communication-enabled applications' 
    },
    { 
      q: 'How is foneAPI different from traditional telecom providers?', 
      a: 'Traditional telecom requires carrier contracts, infrastructure setup, and complex integrations.\n\nfoneAPI:\n• Provides instant API access\n• Requires no carrier negotiation\n• Offers pay-as-you-scale pricing\n• Handles global routing and infrastructure\n• Delivers high availability and redundancy' 
    },
    { 
      q: 'Is foneAPI developer-friendly?', 
      a: 'Yes. foneAPI is built API-first. We provide:\n\n• REST APIs\n• SDKs\n• Quickstart guides\n• Code libraries\n• Documentation\n• Tutorials\n• API gateway access\n• Monitoring & logs\n\nDevelopers can go live in minutes.' 
    },
    { 
      q: 'How long does integration take?', 
      a: 'Most teams can integrate core messaging or voice functionality within a few hours using our documentation and SDKs. More complex implementations (custom routing, automation flows) typically take a few days.' 
    },
    { 
      q: 'Do you offer SDKs?', 
      a: 'Yes. We provide SDKs and libraries to simplify integration across multiple programming environments.' 
    },
    { 
      q: 'Can I test before going live?', 
      a: 'Yes. You can create an account, access the API, test functionality, and scale when ready.' 
    },
    { 
      q: 'Does foneAPI support international SMS delivery?', 
      a: 'Yes. We deliver SMS and MMS globally through direct carrier connections and optimized routing.' 
    },
    { 
      q: 'What is your message delivery rate?', 
      a: 'Our messaging platform is built for high deliverability through intelligent routing, global carrier partnerships, and real-time monitoring.' 
    },
    { 
      q: 'Can I send bulk SMS?', 
      a: 'Yes. foneAPI supports high-volume SMS campaigns with scalability and performance optimization.' 
    },
    { 
      q: 'Do you support two-way messaging?', 
      a: 'Yes. You can both send and receive SMS through our APIs.' 
    },
    { 
      q: 'What voice features are available?', 
      a: 'foneAPI Voice API supports:\n\n• Outbound & inbound calls\n• Call routing\n• Click-to-call\n• Call monitoring\n• Call forwarding\n• Call control logic\n• Programmable voice workflows' 
    },
    { 
      q: 'Can I buy phone numbers?', 
      a: 'Yes. We provide phone number provisioning across multiple countries.' 
    },
    { 
      q: 'Do you offer call forwarding?', 
      a: 'Yes. We support global voice call forwarding, including long-code number forwarding.' 
    },
    { 
      q: 'Does foneAPI support 2FA and OTP?', 
      a: 'Yes. We provide secure 2-step verification via SMS and voice.' 
    },
    { 
      q: 'How secure is the platform?', 
      a: 'We use:\n\n• Encrypted communication\n• Secure API authentication\n• Data protection mechanisms\n• Global infrastructure redundancy\n• 99.9% uptime architecture' 
    },
    { 
      q: 'Do you offer encryption?', 
      a: 'Yes. Data protection and encryption are built into our communications infrastructure.' 
    },
    { 
      q: 'What is the foneAPI Cloud Communications Platform?', 
      a: 'It is a distributed cloud-based telecommunications infrastructure that enables businesses to connect globally via programmable APIs.' 
    },
    { 
      q: 'What uptime do you guarantee?', 
      a: 'We offer 99.9% uptime, powered by distributed infrastructure and redundant network connections.' 
    },
    { 
      q: 'How many countries do you support?', 
      a: 'Our messaging network spans 200+ countries through global carrier partnerships.' 
    },
    { 
      q: 'Is your infrastructure scalable?', 
      a: 'Yes. Our platform is built for enterprise scalability, supporting startups to high-volume enterprise traffic.' 
    },
    { 
      q: 'How does pricing work?', 
      a: 'foneAPI operates on a usage-based pricing model. You only pay for what you use and can scale as your business grows.' 
    },
    { 
      q: 'Are there long-term contracts?', 
      a: 'No long-term contracts are required. You can scale usage based on your needs.' 
    },
    { 
      q: 'Do you offer enterprise plans?', 
      a: 'Yes. We offer customized enterprise solutions based on volume, infrastructure needs, and compliance requirements.' 
    },
    { 
      q: 'Do you provide monitoring and logs?', 
      a: 'Yes. Our platform includes monitoring tools and logs for real-time visibility into communications performance.' 
    },
    { 
      q: 'Can I track delivery reports?', 
      a: 'Yes. Delivery tracking and reporting are available via API and dashboard access.' 
    },
    { 
      q: 'Do you provide analytics?', 
      a: 'Yes. We offer analytics and reporting tools to monitor performance, engagement, and reliability.' 
    },
    { 
      q: 'What kind of support do you provide?', 
      a: 'We provide:\n\n• 24/7 technical support\n• Documentation & tutorials\n• Developer resources\n• Enterprise-level assistance' 
    },
    { 
      q: 'How do I get started?', 
      a: 'Create an account, access the API, review the documentation, and begin integrating immediately.' 
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Everything you need to know about foneAPI."
        accentColor="linear-gradient(90deg, #31f1f4, #4577ff)"
      />
      <section className="py-[clamp(60px,8vw,120px)] bg-slate-50 text-navy-900 relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[20px] border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                  aria-expanded={openIndex === i}
                >
                  <h3 className="text-[1.15rem] font-bold text-navy-900 leading-snug">{faq.q}</h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${openIndex === i ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-400 bg-slate-50'}`}>
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 pt-2">
                      <div className="text-navy-600 leading-relaxed whitespace-pre-wrap">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })}
      </script>
    </>
  )
}
