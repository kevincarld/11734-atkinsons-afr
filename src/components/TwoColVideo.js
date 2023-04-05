import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import BrightCoveVideo from './util/BrightCoveVideo'

export default function TwoColVideo() {

  return (
    <Container>
      <Grid templateColumns={{lg: '1fr 1fr'}} gap={{lg: '40px', d:'104px'}}>
        <GridItem order={{lg: 1}} pos='relative' mb={{base: '116px'}}
          sx={{
            '&:before': {
              content: '""',
              bg: 'orange',
              pos: 'absolute',
              inset: {base: '-40px -40px -40px 50%', lg: '-75px -270px -75px 40%'},
            }
          }}
        >
          <Box pos='relative' px={{base: '20px'}} mr={{wide: '-100px'}}>
            <Box w='full' maxW='648px' >
              <BrightCoveVideo
                script={'https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js'}
                dataPlayer={'wIpGq2Kd0p'}
                dataVideoId={'6323983357112'}
                square={true}
                playerOptions={{
                  loop:true,
                  mute:true,
                  autoplay:true,
                  // controls: true,
                }}

              />
            </Box>
          </Box>
        </GridItem>

        <GridItem px={{base: '20px', wide:'0'}} display='flex' alignItems='center'>
          <Box maxW={{lg: '503px'}}>
            <Text textStyle='body'>He knew his recipes for pomades, balms and fine fragrances were worthy of attention but he needed to spark the imagination of Regency-era London society who flocked into town for the season. And so Atkinson turned to his faithful travelling companion, who’d accompanied him on the journey down from Cumberland.</Text>
            <Text textStyle='body'>Here comes the twist in this story, for Atkinson’s “companion” was none other than his pet bear. </Text>
            <Text textStyle='body'>Travelling circuses were all the rage and the bear became an instant hit with the fashionable and famously fickle customers of London, who daringly visited Atkinson’s Soho boutique for a glimpse of the animal.</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

// font styles
const texts = {
  xx: {

  }
}

