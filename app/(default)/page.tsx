export const metadata = {
  title: 'Side₿et: Elevate Your Gaming Experience',
  description: 'Side₿et revolutionizes gaming by introducing peer-to-peer wagering, enabling seamless integration for developers to infuse betting within games. Dive into an enhanced gaming realm where trust, speed, and low transaction fees are paramount, all powered by Bitcoin and groundbreaking blockchain technologies.',
}

import Hero from '@/components/hero-home'
import Features from '@/components/features-home'
import FeaturesBlocks from '@/components/features-blocks'
import FeaturesWorld from '@/components/features-world'
import News from '@/components/news'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <FeaturesBlocks /> */}
      {/* <FeaturesWorld />
      <News />*/}
      <Cta /> 
    </>
  )
}
