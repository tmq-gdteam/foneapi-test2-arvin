import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TalkToSales() {
  useEffect(() => {
    document.title = 'Talk to Sales | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Talk to"
        highlight="Sales"
        subtitle="Connect with us for general sales inquiries, and we’ll get back to you within 24 hours."
      />
      
      <section className="py-[clamp(60px,8vw,120px)] bg-navy-50 text-navy-900 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[60%] h-[80%] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Context & Additional Help Section */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-black text-navy-900 mb-4">Existing Customer?</h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  If you're an existing customer with a technical issue, problem accessing your account, or a problem processing payment, please file a support ticket for assistance.
                </p>
                <div className="flex flex-col gap-4">
                  <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link to="/support" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Contact Product Support <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-900 to-navy-800 p-8 rounded-[24px] text-white shadow-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-300 mb-6 relative z-10">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">Need Help?</h3>
                <h4 className="text-lg font-semibold text-blue-200 mb-4 relative z-10">Contact Our Support Team</h4>
                <p className="text-navy-200 mb-8 relative z-10 leading-relaxed">
                  foneAPI is always here for you. foneAPI support can help access your account, resolve account payment issues, or assist in technical issues.
                </p>
                <Link to="/support" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors relative z-10 w-full sm:w-auto">
                  Contact SUPPORT
                </Link>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7">
              <div className="bg-white p-[clamp(24px,4vw,48px)] rounded-[32px] shadow-lg shadow-blue-900/5 border border-slate-100">
                <h2 className="text-3xl font-black text-navy-900 mb-8">Tell us about your needs</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="talktosale-firstname" className="block text-sm font-bold text-navy-900 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="talktosale-firstname"
                        name="talktosale-firstname"
                        placeholder="First Name" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="talktosale-lastname" className="block text-sm font-bold text-navy-900 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="talktosale-lastname"
                        name="talktosale-lastname"
                        placeholder="Last Name" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="talktosale-email" className="block text-sm font-bold text-navy-900 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="talktosale-email"
                      name="talktosale-email"
                      placeholder="Email address" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="talktosale-company" className="block text-sm font-bold text-navy-900 mb-2">Company</label>
                      <input 
                        type="text" 
                        id="talktosale-company"
                        name="talktosale-company"
                        placeholder="Company name" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="talktosale-title" className="block text-sm font-bold text-navy-900 mb-2">Title</label>
                      <input 
                        type="text" 
                        id="talktosale-title"
                        name="talktosale-title"
                        placeholder="Job title" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="talktosale-phonenum" className="block text-sm font-bold text-navy-900 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="talktosale-phonenum"
                        name="talktosale-phonenum"
                        placeholder="Phone Number" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="talktosale-country" className="block text-sm font-bold text-navy-900 mb-2">Country</label>
                      <select 
                        id="talktosale-country"
                        name="talktosale-country"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="">Select one...</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="talktosale-product" className="block text-sm font-bold text-navy-900 mb-2">Products of Interest</label>
                    <select 
                      id="talktosale-product"
                      name="talktosale-product"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="">Select product...</option>
                      <option value="Voice">Voice API</option>
                      <option value="Messaging">Messaging API</option>
                      <option value="Video">Video API</option>
                      <option value="Authentication">Authentication</option>
                      <option value="Multiple">Multiple Products</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-6">
                    <label className="flex gap-3 cursor-pointer items-start">
                      <div className="pt-1 flex-shrink-0">
                        <input 
                          type="checkbox" 
                          id="sms-auth-checkbox"
                          name="sms-auth-checkbox"
                          className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-navy-900 mb-1">
                          SMS Communication Authorization (Optional)
                        </span>
                        <span className="block text-xs text-navy-600 leading-relaxed mb-2">
                          By providing my phone number and checking this box, I agree to receive SMS messages from <em>foneAPI</em> for account updates, alerts, and support.
                        </span>
                        <span className="block text-[11px] text-slate-500">
                          Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel or HELP for help.
                        </span>
                      </div>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 mt-8 text-lg"
                  >
                    LET'S TALK <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
            We're ready to see what you can build!
          </h2>
          <Link to="/sign-up" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-10 rounded-full text-lg transition-all hover:shadow-xl hover:-translate-y-1">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
