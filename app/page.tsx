import About from '@/components/about-section/About'
import LandingSection from '@/components/landing-section/LandingSection'
import ServicesSection from '@/components/services-section/ServicesSection'
import TeamSection from '@/components/team-section/TeamSection'

export default function Home() {
  return (
    <main className={`min-h-[100vh]`}>
      <LandingSection />
      <About />
      <TeamSection />
      <ServicesSection />
    </main>
  )
}
