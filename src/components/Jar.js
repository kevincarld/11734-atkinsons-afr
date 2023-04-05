import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Jar() {

  return (
    <Container>
      <Grid
        p={{base: '70px 20px 76px'}}
        templateColumns={{lg: '1fr 1fr', }}
        gap={{lg: '40px'}}
      >
        <Figure maxW={{base: '260px', lg: '440px'}} mx='auto' mr={{d:'0'}} ml={{d:'108px'}}>
          <Img w='full' dimension='279x513' src='./images/jar-1.png' alt='jar of atkinsons james' />
        </Figure>

        <GridItem>
          <Box pt={{base: '52px'}} pl={{d: '46px'}} maxW={{d: '549px'}}>
            <Text textStyle='body'>They inevitably left with a memento — a jar of Atkinson’s signature rose-scented pomade or a bottle of fragrant lavender water — and his reputation as a perfumer was sealed. (As for any would-be rivals who contemplated stealing those exquisite recipes, the bear doubled as a firm deterrent.)</Text>
            <Text textStyle='body'>This would be the first of many trailblazing moves by the erudite businessman, who is now being celebrated with a spirited new fragrance named in his honour. James Eau de Parfum by Atkinsons is perhaps the type of fragrance the young James Atkinson would have crafted were he alive today. Strong in character, James is charming, elegant, and powerful with zesty top notes of clary sage, finger lime and pink peppercorn mellowing into a woody dry-down of vetiver and patchouli.</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

