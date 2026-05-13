import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  useEffect(() => {
    document.title = 'Sign Up | foneAPI'
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    retypePassword: '',
    smsAuth: false,
    terms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup submission
    console.log('Signup attempt:', formData)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-slate-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-slate-100/50 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-navy-900 tracking-tight">Create Your Account for FREE</h1>
          <p className="text-slate-500 mt-2 text-lg">Join foneAPI and start building your communication tools.</p>
        </div>

        <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 p-[clamp(24px,5vw,48px)]">
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-sm font-semibold text-navy-900">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-navy-900">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="retypePassword" className="block text-sm font-semibold text-navy-900">
                  Re-type Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="retypePassword"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="Password"
                  value={formData.retypePassword}
                  onChange={(e) => setFormData({...formData, retypePassword: e.target.value})}
                />
              </div>
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

            <div className="flex items-start gap-3">
              <label className="flex items-center gap-3 cursor-pointer group mt-1">
                <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="peer sr-only"
                    checked={formData.terms}
                    onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                  />
                  <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 peer-focus-visible:ring-offset-2 transition-all duration-200"></div>
                  <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 select-none font-medium">
                  I have viewed and accept foneAPI's <Link to="/terms-of-service" className="text-blue-600 hover:text-blue-700 underline underline-offset-4 transition-colors">Terms of Service</Link>
                </span>
              </label>
            </div>

            <div className="pt-2 flex justify-center w-full">
              <button
                type="submit"
                className="w-full md:w-auto min-w-[240px] flex items-center justify-center h-14 px-10 rounded-full bg-navy-900 text-white font-bold tracking-wide hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
              >
                SIGN UP
              </button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
            <p className="text-slate-600 font-medium">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-bold hover:underline underline-offset-4 transition-all">
                Log In
              </Link>
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-400 mt-2">
              <Link to="/terms-of-service" className="hover:text-navy-900 transition-colors">Terms of Use</Link>
              <span>•</span>
              <Link to="/support" className="hover:text-navy-900 transition-colors">Help</Link>
              <span>•</span>
              <Link to="/privacy-policy" className="hover:text-navy-900 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
