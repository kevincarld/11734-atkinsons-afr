import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Road() {

  return (
    <Container pt={{base: '28px', lg: '68px'}}>
      <Grid
        p={{base: '70px 20px 0px'}}
        templateColumns={{lg: '1fr 1fr', }}
        gap={{lg: '40px'}}
      >
        <GridItem>
          <Flex pt={{d: '30px'}} flexDir='column' alignItems={{base: 'center', lg: 'flex-start'}} maxW={{lg: '509px'}}>
            <PreLine as='h2' {...texts.heading}>
              {`The road to
              reconciliation`}
            </PreLine>

            <Box as='hr' borderColor='primary' w='full' maxW={{base: '320px', d:'none'}} m={{base: '21px 0 68px', d: '38px 0 76px'}} mx={{base:'auto', lg:0}}  />


            <Flex>
              <Text textStyle={'body'} {...texts.big} as='span'>B</Text>
              <PreLine mb='0!important' display={{base: 'block', d:'none'}} textStyle={'body'}>
                {`y the time of James Atkinson’s
                  death in 1853,  his company was
                  on the cusp of becoming one `}
              </PreLine>
              <PreLine display={{base: 'none', d:'block'}} textStyle={'body'}>
                {`y the time of James Atkinson’s death in 1853,
                  his company was on the cusp of becoming one
                  of the biggest fragrance brands in the world, a `}
              </PreLine>
            </Flex>
            <Text display={{base: 'block', d:'none'}} textStyle={'body'} maxW={{base: '332px'}}>of the biggest fragrance brands in the world, a legacy built on flouting tradition and doing things differently.</Text>
            <Text display={{base: 'none', d:'block'}} textStyle={'body'} maxW={{base: '503px'}}>legacy built on flouting tradition and doing things differently.</Text>
          </Flex>
        </GridItem>

        <Figure order={{lg: -1}} maxW={{base: '260px', lg: '375px'}} mx='auto' mr={{d:'0'}} ml={{d:'108px'}}>
          <Img w='full' dimension='375x538' src='./images/road-1.png' alt='box of atkinsons james' />
        </Figure>

      </Grid>
    </Container>
  )
}

// font styles
const texts = {
  heading: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    fontSize: {base: '42px', d: '50px'},
    letterSpacing: {base: '1px'},
    lineHeight: {base: '52px', d:'60px'},
  },
  big: {
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '80px', sm: '100px', d: '120px'},
    lineHeight: {base: '75px', sm: '85px'},
    letterSpacing: {base: '4px', sm: '7px'},
    ml: {base: '-10px', sm: '-6px'}
  }
}


