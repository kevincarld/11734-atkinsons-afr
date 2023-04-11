import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Center } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import BrightCoveVideo from './util/BrightCoveVideo'
import FeatureHeader from './util/FeatureHeader'
import Mover from './util/Mover'

export default function Hero() {
  const handleClickScroll = (e) => {
    e.preventDefault()
    function findPosition(obj) {
      var currenttop = 0;
      if (obj.offsetParent) {
        do {
          currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
      }
    }
    const element = document.getElementById('intro');
    if (element) {
      window.scrollTo({
        top: findPosition(document.getElementById("intro")),
        behavior: 'smooth'
      } )
    }
  };
  return (
    <Box pos='relative' pt='54px' mb={{base: '60%', md: '0'}} >
      <FeatureHeader href='https://www.atkinsons1799.com/en_eu' />

      <Box pos='relative' transform={{base: 'scale(3.3)', md: 'none'}} transformOrigin={'center'}>
        <BrightCoveVideo
          script={'https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js'}
          dataPlayer={'wIpGq2Kd0p'}
          dataVideoId={'6323984933112'}
          playerOptions={{
            loop: true,
            mute: true,
            autoplay: true,
          }}
        />

      <Box
        sx={{
          pos: 'absolute',
          inset: 'auto 0 0 0',
          width: '100%',
          height: { base: '40px', md: '80px'},
          bg: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />
      </Box>

      <Center pos='absolute' inset='0' pt={{base: '260px', md: '40px'}}>
        <Box textAlign={{base: 'center', md: 'left'}}>
          <Mover y={[20,-20]}>
            <Text {...texts.scent} mb={{base: '15px!important', d:'25px!important' }}>On the scent:</Text>
            <PreLine display={{base: 'block', md: 'none'}} as='h1' {...texts.title}>
              {`Uncover
              adventure,
              with James `}
            </PreLine>
            <PreLine display={{base: 'none', md: 'block'}} as='h1' {...texts.title}>
              {`Uncover adventure,
              with James `}
            </PreLine>
          </Mover>
        </Box>
      </Center>

      <Center pos='absolute' inset='0' pt={{base: '135%', md: '0'}} pb={{md: '40px'}} alignItems='flex-end'>
        <Box _hover={{cursor: 'pointer'}} textAlign={{base: 'center'}} sx={{ 'svg' : { maxW: {base: '36px', wide: 'none'} }}} onClick={handleClickScroll}>
          <svg width="58" height="58" viewBox="0 0 58 58">
            <g id="Group_5921" data-name="Group 5921" transform="translate(1870 -1376) rotate(90)">
              <g id="Ellipse_82" data-name="Ellipse 82" transform="translate(1376 1812)" fill="none" stroke="#fff" stroke-width="1">
                <circle cx="29" cy="29" r="29" stroke="none"/>
                <circle cx="29" cy="29" r="28.5" fill="none"/>
              </g>
              <path id="Path_3085" data-name="Path 3085" d="M16.738,0V3.515H0v1.89H16.738V8.921L24.574,4.46Z" transform="translate(1393 1837)" fill="#fff"/>
            </g>
          </svg>
        </Box>
      </Center>

    </Box>
  )
}

// font styles
const texts = {
  scent: {
    fontStyle: 'italic',
    fontSize: {base: '19px', sm: '26px', d: '42px'},
    lineHeight: {base: '18px', sm: '26px', d: '42px'},
  },
  title: {
    fontFamily: 'canela',
    fontWeight: 'medium',
    fontSize: {base: '44px', sm: '56px', d: '114px' },
    lineHeight: {base: '46px', sm: '58px', d: '110px' },
  }
}

