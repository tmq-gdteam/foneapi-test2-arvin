import { useEffect } from 'react'

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | foneAPI'
  }, [])

  return (
    <div className="bg-slate-50 text-navy-900 min-h-screen py-[clamp(80px,10vw,160px)]">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-[clamp(32px,5vw,64px)] shadow-sm border border-slate-200">
          <div className="mb-12 border-b border-slate-100 pb-12">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-navy-900 leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-lg font-medium text-slate-500 mb-6">Effective Date: March 2, 2026</p>
            <p className="text-xl text-navy-600 leading-relaxed max-w-3xl">
              These Terms of Service ("Terms") govern your access to and use of the services, platform, products, applications, websites, and APIs provided by Streamline VA Corporation ("we", "us", "our") at <a href="https://foneapi.com/" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">https://foneapi.com/</a> (the "Site") and associated services (collectively, the "Services"). By accessing or using the Site or Services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-navy-600 prose-p:leading-relaxed prose-li:text-navy-600 prose-li:marker:text-blue-500 prose-strong:text-navy-900">
            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old and legally capable of entering into a binding agreement to use the Services. If you are using the Services on behalf of a company or organization, you represent you have authority to bind that entity.</p>

            <h2>2. Account Registration</h2>
            <p>To access certain features (free trial, dashboard, APIs), you must create an account with accurate information. You are responsible for safeguarding your login credentials.</p>
            <p>You agree not to share accounts or allow unauthorized access.</p>

            <h2>3. Use of Services</h2>
            <h3><em>Permitted Use</em></h3>
            <p>The Services are provided to help businesses communicate, automate workflows, integrate channels (messaging, voice, video, social), and streamline operations.</p>
            <p>You agree to use the Services only for lawful and authorized purposes.</p>

            <h3><em>Prohibited Use</em></h3>
            <p>You shall not:</p>
            <ul>
              <li>Use Services for illegal, abusive, spam, or unsolicited messaging.</li>
              <li>Attempt to reverse engineer, alter, or disrupt the Service.</li>
              <li>Interfere with others' use of the Services.</li>
            </ul>

            <h2>4. Payment and Billing</h2>
            <p>Paid subscriptions are offered under separate pricing terms. You agree to pay all fees in invoices when due.</p>
            <p>We may use third-party billing processors. You are responsible for payment processor fees.</p>

            <h2>5. Intellectual Property Rights</h2>
            <p>All intellectual property, including the Streamline platform, software, content, logos, and trademarks, belong to Streamline or its licensors.</p>
            <p>You receive a limited, non-exclusive license to use the Services for your business only.</p>

            <h2>6. User Content</h2>
            <p>You retain ownership of content you input (e.g., chat messages, campaign content), but grant Streamline a license to store, process, and display.</p>
            <p>You warrant that you have the rights to use and upload any content.</p>

            <h2>7. Third-Party Tools and Integrations</h2>
            <p>Services may integrate with third-party apps. Your use of them may be subject to separate terms.</p>

            <h2>8. SMS and Communications Consent</h2>
            <p>By providing your phone number and opting in, you consent to receive SMS, calls, or messages about your account, notifications, offers, status updates, or marketing, in accordance with applicable laws, including TCPA. You can opt out anytime via SMS STOP. You acknowledge that consent is not a condition of purchase. <strong>Separate SMS consent is required at point of signup.</strong></p>
            <p><em>This clause is critical for toll-free SMS compliance.</em></p>

            <h2>9. Termination</h2>
            <p>We may suspend or terminate your access if you violate these Terms or applicable laws.</p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>The Services are provided "AS IS" without warranty of any kind.</p>

            <h2>11. Limitation of Liability</h2>
            <p>To the maximum extent allowed by law, Streamline is not liable for consequential, indirect, or special damages.</p>

            <h2>12. Governing Law and Venue</h2>
            <p>These Terms are governed by the laws of the State of Virginia. Any disputes will be resolved in state or federal court located in Virginia.</p>

            <h2>13. Changes</h2>
            <p>We may revise these Terms; we will post updates on the Site. Your continued use constitutes acceptance of changes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
