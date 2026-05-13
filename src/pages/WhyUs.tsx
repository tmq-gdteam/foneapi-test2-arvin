import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import FeatureGrid from '../components/FeatureGrid'
import { ArrowRight, ShieldCheck, Globe, Zap, Clock, Shield, BarChart, Terminal, BookOpen, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WhyUs() {
  useEffect(() => {
    document.title = 'Why Us | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Why"
        highlight="Us?"
        subtitle="foneAPI Communications Solutions is a communications platform that provides Application Programming Interfaces or APIs for Text Messaging, Voice, Video, and Authentication."
      />
      
      {/* Intro Section */}
      <section className="py-[clamp(60px,8vw,120px)] bg-white text-navy-900">
        <div className="container max-w-4xl">
          <div className="prose prose-lg sm:prose-xl text-navy-700 mx-auto" style={{ lineHeight: 1.8 }}>
            <p>
              From day one, our vision has been to remove communication barriers so that any business or individual may communicate regardless of time, distance, and device. foneAPI Communications Solutions is a communication platform that provides Application Programming Interfaces, or APIs, for text messaging, voice, video, and authentication. Our APIs handle the complex task of building and maintaining multifaceted communication frameworks to enable businesses and developers to focus on adding value and creating consumer-friendly applications.
            </p>
            <p className="mt-8">
              Over the years, we have successfully developed a cloud-based communications platform that allows modern businesses to communicate competitively through all relevant channels with easy-to-integrate SDKs. Our services enable businesses to increase their reach, establish their brand, and expand by using advanced digital communication channels to deliver a combination of smart and tactical solutions that communicate with target audiences with the right message, using the ideal channel, at the right moment. We have worked with major clients including WA Waldorf Astoria Hotels & Resorts, Citibank, 7eleven, P.F. CHANG’S, Fortune 500 companies, and more.
            </p>
            <div className="mt-12 text-center bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to get more from your communications solutions?</h3>
              <p className="mb-8">Contact us and discover the easiest way to connect with people around the world.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-[clamp(60px,8vw,120px)] bg-navy-50 text-navy-900">
        <div className="container">
          <SectionHeading title="The foneAPI Advantage" />
          <FeatureGrid features={[
            { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: 'High-End Security Features', desc: 'Secure sensitive data using our high-end security protocols.' },
            { icon: <Globe className="w-8 h-8 text-blue-600" />, title: 'Global Reach', desc: 'Connecting to over 1,600 carriers worldwide for the greatest geographical reach.' },
            { icon: <Zap className="w-8 h-8 text-blue-600" />, title: '99.99% Uptime Guarantee', desc: 'Deploy with ease and confidence 24/7 with our reliable infrastructure.' },
            { icon: <ArrowRight className="w-8 h-8 text-blue-600" />, title: 'Lightning Fast Delivery', desc: 'Receive the best deliverability via our international, direct-to-carrier network.' },
            { icon: <Clock className="w-8 h-8 text-blue-600" />, title: '24/7 Support', desc: 'Find immediate solutions round the clock with our dedicated support team.' },
            { icon: <Zap className="w-8 h-8 text-blue-600" />, title: 'High-Performance Direct Connections', desc: 'Experience 100% throughput for all your communication needs.' }
          ]} />
        </div>
      </section>

      {/* Integrated Communication */}
      <section className="py-[clamp(60px,8vw,120px)] bg-white text-navy-900" id="Integrated-Com-munication">
        <div className="container">
          <SectionHeading 
            eyebrow="Solutions"
            title="Integrated Communication" 
            subtitle="Simple and flexible telecommunication infrastructure, which allows you to communicate with anyone globally."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { title: 'Dynamic Routing', desc: 'Control your call flows with a powerful set of call control features allowing complex voice use cases.' },
              { title: 'Compliance Engine', desc: 'foneAPI\'s platform helps automate sequences or chain of commands, local compliance, as well as sender IDs.' },
              { title: 'Quality Messaging Engine', desc: 'Receive the best deliverability via a rules engine supported by our international, direct-to-carrier network.' },
              { title: 'Global Network', desc: 'Connecting to over 1,600 carriers worldwide, our platform is one with the greatest geographical reach.', link: '/solutions/network-traversal' }
            ].map(item => (
              <div key={item.title} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-navy-600 mb-4">{item.desc}</p>
                {item.link && (
                  <Link to={item.link} className="inline-flex items-center gap-1 text-blue-600 font-bold hover:text-blue-800">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Solutions */}
      <section className="py-[clamp(60px,8vw,120px)] bg-navy-900 text-white" id="Management-Solutions">
        <div className="container">
          <SectionHeading 
            title="Management Solutions" 
            subtitle="Improve your productivity. Do more in less time with these management tools."
            dark
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <BarChart />, title: 'Monitoring & Logs', desc: 'Monitor workflows, evaluate processes, and perform the necessary actions to address problems in real-time.' },
              { icon: <Terminal />, title: 'API Gateway', desc: 'Increase your app\'s efficiency, minimize errors, and lessen coding efforts using our flexible APIs.' },
              { icon: <Zap />, title: 'Reliability and Performance', desc: 'foneAPI ensures 99.99% uptime and 100% throughput to let you deploy with ease and confidence 24/7.' },
              { icon: <Shield />, title: 'Data Protection & Encryption', desc: 'Secure sensitive data using our high-end security protocols that include end-to-end encryption, personal and data passwords, and system-level security.', link: '/security/authentication' },
              { icon: <BarChart />, title: 'Analytics & Reporting', desc: 'Gather all the resources you need to measure productivity and track data performance in a snap.' },
            ].map(item => (
              <div key={item.title} className="bg-navy-800 border border-navy-700 p-8 rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-navy-200 mb-4 leading-relaxed">{item.desc}</p>
                {item.link && (
                  <Link to={item.link} className="inline-flex items-center gap-1 text-blue-400 font-bold hover:text-blue-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-[clamp(60px,8vw,120px)] bg-white text-navy-900" id="Developer-Resources">
        <div className="container">
          <SectionHeading 
            eyebrow="Resources"
            title="Developer Resources" 
            subtitle="Get direct access and learn instructional resources for your own projects. Include API samples and libraries."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <Code2 />, title: 'Libraries', desc: 'foneAPI comes with several libraries in your preferred languages and frameworks. In addition, it lists third-party plugins and libraries to help you to improve the functionality on other platforms.' },
              { icon: <BookOpen />, title: 'Tutorials and Tips', desc: 'Get a wealth of information from our tutorials and resources to create your own amazing tools. Includes videos, how-to’s, and many more free tutorials.' },
              { icon: <Zap />, title: 'Quickstart Guide', desc: 'The quickest way to get started with foneAPI.' },
              { icon: <Terminal />, title: 'Command Line Interface', desc: 'Consistent interface that lets you conveniently manage and interact with all parts of foneAPI.' },
              { icon: <Code2 />, title: 'SDKs', desc: 'Allows developers to develop powerful solutions and create innovative apps.' },
            ].map(item => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Why Us | foneAPI",
          "description": "foneAPI Communications Solutions is a communication platform that provides APIs for text messaging, voice, video, and authentication."
        })}
      </script>
    </>
  )
}
