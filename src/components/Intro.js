import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Intro() {

  return (
    <Box bg='black' color='white'>
      <Container>
        <Text
          as='h2'
          textAlign={{base: 'center', d: 'left'}}
          fontFamily={'heading'}
          fontSize={{base: '24px', sm: '28px', lg: '40px'}}
          lineHeight={{base: '34px', sm: '38px', lg: '60px'}}
          p={{base: '139px 40px 127px', wide: '245px 0'}}
          maxW={{base: '1102px', wide: '1022px'}}
          mx='auto'
        >
          Paying tribute to its eponymous founder, the new James EDP from UK fragrance house Atkinsons is a contemporary cologne for those who tread their own path.
        </Text>

        <Box as='hr' borderColor='primary' mx={{base: '40px', wide: '0'}} />
      </Container>
    </Box>
  )
}