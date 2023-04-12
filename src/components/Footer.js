import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import FeatureFooter from './util/FeatureFooter'
export default function Footer() {

  return (
    <Box pos='relative'>
      <Container px={{base:'20px', wide: 0}}>
        <Box as='hr' borderColor='primary' w='full'  />

        <Text maxW='584px' mx='auto' p={{base: '80px 0 220px', lg: '124px 0 275px'}} {...texts.content}>
          Atkinsons James 100ml EDP is available from Myer Sydney and Melbourne City stores and at
          <NineLink color='white' href='https://www.myer.com.au/p/atkinsons-london-1799-james-edp-100ml' _hover={{textDecor: 'underline'}}> myer.com.au</NineLink>
        </Text>

      </Container>

      <FeatureFooter href='https://www.myer.com.au/p/atkinsons-london-1799-james-edp-100ml'/>
    </Box>
  )
}

// font styles
const texts = {
  content: {
    color: 'primary',
    textAlign: 'center',
    fontFamily: 'heading',
    fontSize: {base: '16px', sm: '18px', lg:'24px'},
    letterSpacing: {base: '0.18px'},
    lineHeight: {base: '24px', sm: '26px', lg:'36px'},
  }
}

