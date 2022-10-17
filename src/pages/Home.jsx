import React from 'react'
import Benifit from '../components/Elements/Benifit'
import Exclusive from '../components/Elements/Exclusive'
import Features from '../components/Elements/Features'
import FriendPovo from '../components/Elements/FriendPovo'
import Hero from '../components/Elements/Hero'
import Mission from '../components/Elements/Mission'
import Platform from '../components/Elements/Platform'
import Presale from '../components/Elements/Presale'
import Protect from '../components/Elements/Protect'
import Roadmap from '../components/Elements/Roadmap'
import Tokenomics from '../components/Elements/Tokenomics'
import Vision from '../components/Elements/Vision'
import Work from '../components/Elements/Work'
import Faqs from '../components/Utils/Faqs'

const Home = () => {
  return (
    <>
      <Hero/>
      <Platform/>
      <Exclusive/>
      <Features/>
      <Work/>
      <Benifit/>
      <Presale/>
      <Mission/>
      <Vision/>
      <Tokenomics/>
      <Roadmap/>
      <Protect/>
      <Faqs/>
      <FriendPovo/>
    </>
  )
}

export default Home