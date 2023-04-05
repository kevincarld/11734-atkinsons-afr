
import Layout from "components/util/Layout"
// chakra
import Hero from "components/Hero"
import Intro from "components/Intro"
import Almost from "components/Almost"
import TwoColVideo from "components/TwoColVideo"
import Jar from "components/Jar"
import Tale from "components/Tale"
import Video from "components/Video"
import Road from "components/Road"
import PreFooter from "components/PreFooter"
import Footer from "components/Footer"

import { Box } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Box bg='black' color='white' overflow='hidden'>
        {/* <Hero /> */}
        <Intro />
        <Almost />
        <TwoColVideo />
        <Jar />
        {/* <Tale /> */}

        <Video />
        <Road />
        <PreFooter />
        <Footer />
      </Box>
    </Layout>
  )
}
