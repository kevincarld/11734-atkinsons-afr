import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import BrightCoveVideo from './util/BrightCoveVideo'

export default function Video() {

  return (
    <Box px='20px'>
      <Box pos='relative' maxW='1478px' mx='auto' borderTop='1px solid #E9531E' borderBottom='1px solid #E9531E'
          sx={{
            '&:before': {
              content: '""',
              bg: 'orange',
              pos: 'absolute',
              inset: {base: '-40px -40px -40px 50%', lg: '65px -270px -65px 40%'},
            }
          }}
        >
          <Box pos='relative' >
            <BrightCoveVideo
              script={'https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js'}
              dataPlayer={'wIpGq2Kd0p'}
              dataVideoId={'6323982484112'}
              playerOptions={{
                loop:true,
                mute:true,
                controls: true,
                autoplay:true,

              }}
            />
          </Box>
        </Box>


    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

