import LandingSection from '@/components/landing-section/LandingSection'
import TeamSection from '@/components/team-section/TeamSection'

export default function Home() {
  return (
    <main className={`min-h-[100vh]`}>
      <LandingSection />
      <TeamSection />
    </main>
  )
}
