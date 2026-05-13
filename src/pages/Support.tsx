import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'

export default function Support() {
  useEffect(() => {
    document.title = 'Contact Support | foneAPI'
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requestType: '',
    subject: '',
    message: '',
    smsAuth: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <PageHero
        title="Contact"
        highlight="Support"
        subtitle="Our team is here to help you resolve issues quickly and efficiently."
        accentColor="linear-gradient(90deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"
      />
      <section className="py-[clamp(60px,8vw,120px)] bg-slate-50 text-navy-900 relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm p-[clamp(24px,5vw,48px)]">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Fill the form below and let us know how we can help:</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-navy-900">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Your work email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <p className="text-xs text-slate-500 mt-1">If provided, we may contact you regarding your request.</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-navy-900">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="requestType" className="block text-sm font-semibold text-navy-900">
                  Request Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="requestType"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 appearance-none"
                    value={formData.requestType}
                    onChange={(e) => setFormData({...formData, requestType: e.target.value})}
                  >
                    <option value="">Select a request type</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Account Access">Account Access</option>
                    <option value="API Support">API Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-navy-900">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Brief description of your issue"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-y"
                  placeholder="Please describe your issue in detail"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                <p className="font-semibold text-navy-900 text-sm">SMS Communication Authorization (Optional)</p>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      id="smsAuth"
                      className="peer sr-only"
                      checked={formData.smsAuth}
                      onChange={(e) => setFormData({...formData, smsAuth: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 peer-focus-visible:ring-offset-2 transition-all duration-200"></div>
                    <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed select-none">
                    <p className="mb-2">
                      By providing my phone number and checking this box, I agree to receive SMS messages from <em className="not-italic font-semibold text-navy-900">foneAPI</em> for account updates, alerts, and support.
                    </p>
                    <p className="text-xs text-slate-500">
                      Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel or HELP for help.
                    </p>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-navy-900 text-white font-bold tracking-wide hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 w-full md:w-auto min-w-[200px]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
