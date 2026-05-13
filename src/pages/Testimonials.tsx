import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, HeartPulse, GraduationCap, HardHat, Landmark, ShoppingBag, HeartHandshake } from 'lucide-react'

// Map of categories to specific icons
const categoryIcons: Record<string, React.ReactNode> = {
  Public: <Building2 className="w-6 h-6" />,
  Medical: <HeartPulse className="w-6 h-6" />,
  Educational: <GraduationCap className="w-6 h-6" />,
  Contractors: <HardHat className="w-6 h-6" />,
  Financial: <Landmark className="w-6 h-6" />,
  Retail: <ShoppingBag className="w-6 h-6" />,
  'Non-Profits': <HeartHandshake className="w-6 h-6" />,
}

export default function Testimonials() {
  useEffect(() => {
    document.title = 'Testimonials | foneAPI'
  }, [])

  const testimonials = [
    {
      category: 'Public',
      logo: '/images/69_public-img-logo.svg',
      image: '/images/69_public-img.svg',
      quote: "With text messages, we are able to reach every demographic. Giving them vital resources, appointment notifications as well as real-time local news that could prevent losses and discomfort to the general public.",
      link: "/testimonials/greenville-police-nc",
      company: "Greenville Police N.C."
    },
    {
      category: 'Medical',
      logo: '/images/69_medical-logo.svg',
      image: '/images/69_medical.svg',
      quote: "SMS appointment confirmations and alerts are very helpful in informing the patients if their appointment was set or changed, adding comfort to every transaction. We are also able to maintain continual relationship with patients, that makes it twice as fast for them to heal by giving them moral support and information needed for their fast recovery.",
      link: "/testimonials/montgomery-medical",
      company: "Montgomery Medical"
    },
    {
      category: 'Educational',
      logo: '/images/69_educational-logo.svg',
      image: '/images/69_educational.svg',
      quote: "We are able to send a status update to applicants and give them other pieces of information such as admission deadline and requirements, billing and emergency notifications. We are also able to receive feedbacks that we can immediately answer to address issues and improve our services.",
      link: "/testimonials/george-mason-university",
      company: "George Mason University"
    },
    {
      category: 'Contractors',
      logo: '/images/69_contractors-logo.svg',
      image: '/images/69_contractors.svg',
      quote: "Hourly update received by the customers regarding regarding repairs and dispatches relieves customers of anxiety. Photos sent to phone support makes it easier for us to provide solutions using the knowledge base and to determine that the problem is completely resolved, bringing down escalations and repeat dispatches.",
      link: "/testimonials/select-heating-and-cooling-corp",
      company: "Select Heating and Cooling Corp"
    },
    {
      category: 'Financial',
      logo: '/images/69_financial-logo.svg',
      image: '/images/69_financial.svg',
      quote: "Never before have we experienced such reduction in customer complaints. Automated text messages that are send when a customer withdraws money gives them early detection of fraud, preventing further damages. Customers are able to pay and revew their subscriptions on time by having a record of their due dates in a form of SMS messages saved on their phones. This has led to a 40% overall business growth by decreasing the cost and increasing the revenue.",
      link: "/testimonials/citibank",
      company: "Citibank"
    },
    {
      category: 'Retail',
      logo: '/images/69_retail-logo.svg',
      image: '/images/69_retail.svg',
      quote: "Sending text messages on events, promos and discounts have tripled our revenue. We have more satisfied and loyal customers than ever, thanking us for letting them know that we care and would want to give them the best value for their money.",
      link: "/testimonials/the-home-depot",
      company: "The Home Depot"
    },
    {
      category: 'Non-Profits',
      logo: '/images/69_non-profit-logo.svg',
      image: '/images/69_non-profit.svg',
      quote: "Mass texting enabled us to contact the largest groups of people simultaneously. Informing them of important issues and engage them in a converstaion. This has led to a great increase in donations/contributions and support making it easier to help people and create changes in their lives.",
      link: "/testimonials/united-way",
      company: "United Way"
    }
  ]

  return (
    <>
      <PageHero
        title="Solution That Go Beyond"
        highlight="Satisfaction"
        subtitle="We continue to exceed expectations in every aspect of life"
        accentColor="linear-gradient(90deg, #ff72d0, #ffb36c)"
      />
      <section className="py-[clamp(60px,8vw,120px)] bg-slate-50 text-navy-900 relative">
        <div className="container max-w-7xl mx-auto px-4">
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-lg shadow-navy-900/5 group hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-[240px] overflow-hidden bg-slate-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent z-10" />
                  {/* Using object-cover for full bleed imagery */}
                  <img 
                    src={item.image} 
                    alt={`${item.category} industry illustration`} 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => {
                      // Fallback if specific SVG is not perfectly matching
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=800&h=400';
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-blue-700 flex items-center gap-2 shadow-sm text-sm uppercase tracking-wider">
                    {categoryIcons[item.category]}
                    {item.category}
                  </div>

                  {/* Logo overlay (bottom left of header) */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white rounded-xl p-3 shadow-md border border-slate-100 min-w-[120px] min-h-[60px] flex items-center justify-center">
                     <img src={item.logo} alt={`${item.company} logo`} className="max-h-[32px] max-w-[140px] object-contain" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-blue-500 mb-4 opacity-50">
                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                     </svg>
                  </div>
                  <p className="text-navy-700 text-lg leading-relaxed flex-1 mb-8 italic">
                    "{item.quote}"
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link 
                      to={item.link} 
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group/link"
                    >
                      Click To Explore
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Organization",
            "name": "foneAPI"
          },
          "ratingValue": "4.9",
          "reviewCount": "1200"
        })}
      </script>
    </>
  )
}
