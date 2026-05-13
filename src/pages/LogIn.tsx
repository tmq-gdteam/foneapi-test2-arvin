import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  useEffect(() => {
    document.title = 'Log In | foneAPI'
  }, [])

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login submission
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-slate-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-slate-100/50 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-navy-900 tracking-tight">Welcome to foneAPI</h1>
          <p className="text-slate-500 mt-2 text-lg">Log in to your account to continue.</p>
        </div>

        <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 p-[clamp(24px,5vw,40px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                type="text"
                id="username"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="sr-only">Password</label>
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <input
                    type="checkbox"
                    id="remember"
                    className="peer sr-only"
                    checked={formData.remember}
                    onChange={(e) => setFormData({...formData, remember: e.target.checked})}
                  />
                  <div className="w-5 h-5 rounded border-2 border-slate-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 peer-focus-visible:ring-offset-2 transition-all duration-200"></div>
                  <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600 select-none group-hover:text-navy-900 transition-colors">Remember Me</span>
              </label>

              <Link to="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center h-14 rounded-xl bg-navy-900 text-white font-bold tracking-wide hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
            <p className="text-slate-600 font-medium">
              Need an Account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-bold hover:underline underline-offset-4 transition-all">
                Sign up
              </Link>
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
              <Link to="/privacy-policy" className="hover:text-navy-900 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
