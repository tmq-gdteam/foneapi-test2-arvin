import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Reach"
        highlight="Us"
        subtitle="Let Us Know What We Can Do for You."
      />
      
      <section className="py-[clamp(60px,8vw,120px)] bg-navy-50 text-navy-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="bg-white p-[clamp(24px,4vw,48px)] rounded-[32px] shadow-sm border border-slate-200">
              <div className="mb-8">
                <h2 className="text-3xl font-black tracking-tight text-navy-900 mb-4">Send us a message</h2>
                <p className="text-navy-600 text-lg">
                  There are various ways to get in touch with us. Please do tell us so we can answer your inquiries: Fill the form below and let us know how we can help:
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="contactus-name" className="block text-sm font-bold text-navy-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="contactus-name"
                    name="contactus-name"
                    placeholder="Your full name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="contactus-email" className="block text-sm font-bold text-navy-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="contactus-email"
                    name="contactus-email"
                    placeholder="Your work email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="contactus-message" className="block text-sm font-bold text-navy-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="contactus-message"
                    name="contactus-message"
                    rows={6}
                    placeholder="Your message"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  SUBMIT <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Details Section */}
            <div className="flex flex-col gap-8 lg:py-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Visit Our Office</h3>
                <p className="text-navy-600 mb-4">Visit us or schedule a time to meet with our team in person.</p>
                <address className="not-italic text-navy-800 font-semibold">
                  2001 Clayton Road, 2nd Floor<br />
                  Concord, CA 94520
                </address>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Get Support</h3>
                <p className="text-navy-600 mb-6">We've got your back. Find immediate solutions 24/7. Call or Text:</p>
                
                <ul className="space-y-4">
                  <li>
                    <a href="tel:8669952898" className="inline-flex items-center gap-3 text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      (866) 995-2898
                    </a>
                  </li>
                  <li>
                    <a href="tel:5717891040" className="inline-flex items-center gap-3 text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      (571) 789-1040
                    </a>
                  </li>
                  <li>
                    <a href="tel:5104790721" className="inline-flex items-center gap-3 text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      (510) 479-0721
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-navy-900 to-blue-900 p-8 rounded-2xl text-white shadow-md">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Us</h3>
                <p className="text-blue-100 mb-4">Prefer to email instead? We're quick to reply to all inquiries.</p>
                <a href="mailto:support@foneapi.com" className="text-lg font-bold hover:text-blue-300 transition-colors">
                  support@foneapi.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us | foneAPI",
          "description": "Reach Us. Let Us Know What We Can Do for You.",
          "mainEntity": {
            "@type": "Organization",
            "name": "foneAPI",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-866-995-2898",
                "contactType": "customer service"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-571-789-1040",
                "contactType": "customer service"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-510-479-0721",
                "contactType": "customer service"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2001 Clayton Road, 2nd Floor",
              "addressLocality": "Concord",
              "addressRegion": "CA",
              "postalCode": "94520",
              "addressCountry": "US"
            }
          }
        })}
      </script>
    </>
  )
}
