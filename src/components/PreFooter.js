import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import Mover from './util/Mover'

export default function PreFooter() {

  return (
    <Container pb={{base: '63px', lg: '200px', d:'250px'}}>
      <Grid
        templateColumns={{lg: '5fr 7fr', }}
        gap={{lg: '40px'}}
      >
        <GridItem>
          <Box px={{base: '20px'}} pt={{base: '52px', lg:'100px'}} pl={{d: '46px'}} pr={{d:0}} maxW={{d: '549px'}}>
            <Text textStyle='body'>The new James EDP acknowledges this visionary spirit with an equally bold and uncompromising scent. From its lively opening refrain — aromatic sage, the tang of finger lime and enlivening pink peppercorn — it commands attention. Like the distinctly English eau de cologne that first caught the eye (and the nose) of King George IV almost a century ago, there’s a richness to this composition that becomes even more pronounced with its elegant woody and spicy drydown.</Text>
            <Text textStyle='body'>James is the creation of renowned perfumers Olivier Pescheux and Yann Vasnier, the “noses” behind more than 220 fragrances between them. Where Pescheux is known for his craftsmanship in perfumery, Vasnier has a reputation for pushing boundaries; together they’ve created an adventurous fragrance that’s meticulous in its execution, using the very finest ingredients. </Text>
            <Text textStyle='body'>Packaged in a smouldering matte bottle the gunmetal-grey of London fog, it’s a fitting tribute to the unique entrepreneurial legacy of James Atkinson. </Text>
          </Box>
        </GridItem>


        <Figure  mx='auto' >
          <Mover y={[15,-10]}>
            <Img w='full' dimension='784x847' src='./images/prefooter-1.png' alt='jar of atkinsons james with flowers in the background' />
          </Mover>
        </Figure>

      </Grid>
    </Container>
  )
}

