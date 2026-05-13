import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function AppointmentReminders() {
  useEffect(() => {
    document.title = 'Appointment Reminders | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Appointment Reminders."
        subtitle="Reduce no-shows and lost revenue by sending automated, interactive reminders via SMS or Voice."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📉', title: 'Reduce No-Shows', desc: 'Decrease missed appointments by up to 40% with timely alerts.' },
            { icon: '💬', title: 'Two-Way Confirmations', desc: 'Allow patients or clients to reply "Y" to confirm or "N" to cancel.' },
            { icon: '📅', title: 'Calendar Integration', desc: 'Easily trigger messages directly from your CRM or booking system.' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
             <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>How it works</h2>
             <ol style={{ paddingLeft: 20, color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 16 }}>
               <li>Your scheduling software detects an upcoming appointment.</li>
               <li>It triggers an API call to foneAPI.</li>
               <li>foneAPI sends an SMS: "Reply YES to confirm your appt tomorrow at 2PM."</li>
               <li>Customer replies, and your system updates the calendar status via webhook.</li>
             </ol>
          </div>
          <CodeSnippet 
            language="PHP" 
            code={`$message = $client->messages->create(\n    $patientNumber,\n    [\n        'from' => $clinicNumber,\n        'body' => 'Reminder: Dental appt tomorrow at 2PM. Reply YES to confirm.'\n    ]\n);`}
          />
        </div>
      </section>
      <CTABand />
    </>
  )
}
