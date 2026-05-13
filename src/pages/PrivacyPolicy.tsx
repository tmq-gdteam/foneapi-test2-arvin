import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | foneAPI'
  }, [])

  return (
    <div className="bg-slate-50 text-navy-900 min-h-screen py-[clamp(80px,10vw,160px)]">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-[clamp(32px,5vw,64px)] shadow-sm border border-slate-200">
          <div className="mb-12 border-b border-slate-100 pb-12">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-navy-900 leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg font-medium text-slate-500 mb-6">Effective Date: March 2, 2026</p>
            <p className="text-xl text-navy-600 leading-relaxed max-w-3xl">
              This Privacy Policy explains how Streamline VA Corporation ("we", "us", "our") collects, uses, discloses, and protects your information when you use our website and Services.
            </p>
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-navy-600 prose-p:leading-relaxed prose-li:text-navy-600 prose-li:marker:text-blue-500">
            <h2>1. Information We Collect</h2>
            
            <h3>a) Information You Provide Directly</h3>
            <ul>
              <li>Contact info (name, email, phone)</li>
              <li>Company name, job title</li>
              <li>Billing information</li>
              <li>Messages, preferences</li>
            </ul>
            <p>This includes data you enter into sign-up forms, demo requests, profile settings, communication preferences, or support tickets.</p>
            
            <h3>b) Automatically Collected Information</h3>
            <ul>
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Usage analytics</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>Provide and improve the Services</li>
              <li>Communicate with you</li>
              <li>Personalize content and offers</li>
              <li>Process payments</li>
              <li>Detect fraud or security issues</li>
            </ul>

            <h2>3. SMS and Communications</h2>
            <p>By providing your phone number and opting into SMS, you consent to receive text messages and calls as described during signup. These may include:</p>
            <ul>
              <li>Transactional messages (account alerts)</li>
              <li>Service notifications</li>
              <li>Marketing messages</li>
            </ul>
            <p>You may withdraw consent at any time by replying STOP, or contacting support. Messaging frequency varies; message/data rates may apply.</p>
            <p>This consent is separate from other agreements. (Compliant with TCPA/CTIA guidelines.)</p>

            <h2>4. Sharing of Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers (hosting, billing)</li>
              <li>Business partners under contract</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>5. Cookies and Tracking</h2>
            <p>We use cookies and tracking technologies to analyze trends, administer the Site, track user movements, and gather demographic information.</p>
            <p>You can disable cookies via your browser settings.</p>

            <h2>6. Data Security</h2>
            <p>We implement reasonable administrative, physical, and technical safeguards to protect personal information.</p>

            <h2>7. International Transfers</h2>
            <p>Data may be transferred to and processed in countries outside your jurisdiction, including the U.S. All data transfers comply with applicable laws.</p>

            <h2>8. Children's Privacy</h2>
            <p>We do not knowingly collect information from persons under 13. If you learn your child's data was provided, contact us so we can delete it.</p>

            <h2>9. Your Rights</h2>
            <p>Subject to applicable laws, you may:</p>
            <ul>
              <li>Access or request deletion of personal info</li>
              <li>Update or correct inaccuracies</li>
              <li>Opt out of marketing</li>
            </ul>
            <p>Residents of certain jurisdictions (e.g., California) have additional privacy rights.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this Policy. We'll post changes at https://hellostreamline.com/privacy-policy.</p>

            <h2>11. Contact Us</h2>
            <p>If you have questions about this Policy, email: <strong>privacy@foneapi.com</strong> (or your official support email).</p>
          </div>
        </div>
      </div>
    </div>
  )
}
