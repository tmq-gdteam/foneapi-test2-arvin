import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DocsLayout from './layouts/DocsLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import WhyUs from './pages/WhyUs'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import TalkToSales from './pages/TalkToSales'

import Voice from './pages/products/Voice'
import Video from './pages/products/Video'
import Messaging from './pages/products/Messaging'
import Email from './pages/products/Email'
import Fax from './pages/products/Fax'
import Security from './pages/products/Security'
import SocialNetwork from './pages/products/SocialNetwork'
import CognitiveAutomation from './pages/products/CognitiveAutomation'

import ClickToCall from './pages/solutions/ClickToCall'
import CallMonitoring from './pages/solutions/CallMonitoring'
import LeadAlerts from './pages/solutions/LeadAlerts'
import AppointmentReminders from './pages/solutions/AppointmentReminders'
import ProtectNumbers from './pages/solutions/ProtectNumbers'
import Verification from './pages/solutions/Verification'
import Industry from './pages/solutions/Industry'
import Integrations from './pages/solutions/Integrations'
import CPaaS from './pages/solutions/CPaaS'
import VoiceInsight from './pages/solutions/VoiceInsight'
import WebRTC from './pages/solutions/WebRTC'
import SIPTrunking from './pages/solutions/SIPTrunking'
import FoneInterconnect from './pages/solutions/FoneInterconnect'

import VoiceApiDocs from './pages/docs/VoiceApiDocs'
import SMSApiDocs from './pages/docs/SMSApiDocs'
import SMSPricing from './pages/docs/SMSPricing'
import VoicePrograms from './pages/docs/VoicePrograms'

import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Support from './pages/Support'
import FAQs from './pages/FAQs'

import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'solutions', element: <Solutions /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'why-us', element: <WhyUs /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact-sales', element: <TalkToSales /> },
      { path: 'contact', element: <ContactUs /> },
      
      // Products
      { path: 'products/voice', element: <Voice /> },
      { path: 'products/video', element: <Video /> },
      { path: 'products/messaging', element: <Messaging /> },
      { path: 'products/email', element: <Email /> },
      { path: 'products/fax', element: <Fax /> },
      { path: 'products/security', element: <Security /> },
      { path: 'products/social-network', element: <SocialNetwork /> },
      { path: 'products/cognitive-automation', element: <CognitiveAutomation /> },

      // Solutions
      { path: 'solutions/click-to-call', element: <ClickToCall /> },
      { path: 'solutions/call-monitoring', element: <CallMonitoring /> },
      { path: 'solutions/lead-alerts', element: <LeadAlerts /> },
      { path: 'solutions/appointment-reminders', element: <AppointmentReminders /> },
      { path: 'solutions/protect-numbers', element: <ProtectNumbers /> },
      { path: 'solutions/verification', element: <Verification /> },
      { path: 'solutions/industry', element: <Industry /> },
      { path: 'solutions/integrations', element: <Integrations /> },
      { path: 'solutions/cpaas', element: <CPaaS /> },
      { path: 'solutions/voice-insight', element: <VoiceInsight /> },
      { path: 'solutions/web-rtc', element: <WebRTC /> },
      { path: 'solutions/sip-trunking', element: <SIPTrunking /> },
      { path: 'solutions/fone-interconnect', element: <FoneInterconnect /> },

      // Content
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'support', element: <Support /> },
      { path: 'faqs', element: <FAQs /> },

      // Legal & Auth
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      { path: 'cookies', element: <CookiePolicy /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'login', element: <LogIn /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: '*', element: <NotFound /> },
    ]
  },
  {
    path: '/',
    element: <DocsLayout />,
    children: [
      { path: 'products/voice/voice-api', element: <VoiceApiDocs /> },
      { path: 'products/messaging/sms-api', element: <SMSApiDocs /> },
      { path: 'products/messaging/sms-pricing', element: <SMSPricing /> },
      { path: 'products/voice/voice-programs', element: <VoicePrograms /> },
    ]
  }
])
