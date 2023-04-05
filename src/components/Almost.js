import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Almost() {

  return (
    <Container>
      <Grid
        p={{base: '70px 20px 76px'}}
        color='white'
        templateColumns={{lg: '1fr 1fr', }}
      >
        <Figure maxW={{base: '200px', lg: '280px'}} mx='auto' mr={{d:'0'}} ml={{d:'165px'}}>
          <Img w='full' dimension='279x513' src='./images/almost-1.png' alt='jar of atkinsons james' />
        </Figure>

        <Flex pt={{base: '80px', lg: '120px'}} flexDir='column' alignItems={{base: 'center', d: 'flex-start'}}>
          <Flex>
            <Text textStyle={'body'} {...texts.big} as='span'>A</Text>
            <PreLine mb='0!important' display={{base: 'block', d:'none'}} textStyle={'body'}>
              {`lmost 200 years before
              fragrance brands began enlisting
              celebrities to front each new`}
            </PreLine>
            <PreLine display={{base: 'none', d:'block'}} textStyle={'body'}>
              {`lmost 200 years before fragrance brands began
               enlisting celebrities to front each new launch,
                London perfumer James Atkinson was turning`}
            </PreLine>
          </Flex>
          <Text display={{base: 'block', d:'none'}} textStyle={'body'} maxW={{base: '332px'}}>launch, London perfumer James Atkinson was turning heads with a far more eccentric mascot. In 1799, the young Atkinson had recently arrived in London’s Soho from England’s northern counties and was keen to make a name for himself. </Text>
          <Text display={{base: 'none', d:'block'}} textStyle={'body'} maxW={{base: '503px'}}>heads with a far more eccentric mascot. In 1799, the young Atkinson had recently arrived in London’s Soho from England’s northern counties and was keen to make a name for himself. </Text>
        </Flex>
      </Grid>
    </Container>
  )
}

// font styles
const texts = {
  big: {
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '80px', sm: '100px', d: '120px'},
    lineHeight: {base: '75px', sm: '85px'},
    letterSpacing: {base: '4px', sm: '7px'},
    ml: {base: '-10px', sm: '-6px'}
  }
}

