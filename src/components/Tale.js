import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

// swiper
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar,  } from "swiper";

export default function Tale() {
  const slider1Ref = React.useRef(null);

  // initialize sliders
  React.useEffect(() => {
    // Slider 1 options (cover)
    const slider1 = new Swiper(slider1Ref.current, {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 0,
      centeredSlides: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        dragSize: 18,
        snapOnRelease: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 1.5,
          centeredSlides: false,

        },
        1600: {
          slidesPerView: 2.4,
          centeredSlides: true,
        },
      },
      modules: [Autoplay, Navigation, Scrollbar, ]
    });

    return () => {
      slider1.destroy();
    };
  }, [])

  return (
    <Box pos='relative' mb={{base: '120px', wide:'220px'}} borderLeft={{base: '10px solid #E9531E', d: '200px solid #E9531E'}} bg='#0D0D0D'
      sx={{
        '&:before': {
          display: {base: 'none', d:'block'},
          content: '""',
          pos:'absolute',
          bg: 'linear-gradient(to right, black 0%, transparent 100%)',
          w: {d:'103px', wide: '140px'},
          inset: {d: '0 auto 0 0'},
          zIndex: 123,
        },
        '&:after': {
          display: {base: 'none', wide:'block'},
          content: '""',
          pos:'absolute',
          bg: 'linear-gradient(to left, black 0%, transparent 100%)',
          w: {wide: '240px'},
          inset: {d: '0 0 0 auto'},
          zIndex: 123,
        }
      }}
    >
      <Box p={{base: '80px 20px 30px', d:'120px 0px  60px 190px'}}>
        <Text as='h2' display='inline-block' {...texts.title} borderBottom='1px solid #DA532A' pb={{base: '10px'}} mb={{base: '20px'}} w='full' maxW='560px'>A fragrant tale</Text>
        <Text {...texts.subtitle} maxW='702px'>To better understand what makes James such a fitting accolade to its company founder, take a journey through Atkinsons’ first 100 years.</Text>
      </Box>

        <Box px={{base: '10px', d:0}} >
          <Box ref={slider1Ref} className="swiper-container slider1"  overflow='hidden' pl={{d:'100px', wide:0}}>
            <Box className="swiper-wrapper" _hover={{cursor: 'grab'}}
              sx={{
                '&:before': {
                  content: '""',
                  pos:'absolute',
                  w: '99999px',
                  h: '1px',
                  bg: 'primary',
                  top: {base: '175px', d: '220px'},
                  left: '40px',
                }
              }}
            >

              <Box as={SwiperSlide} className='swiper-slide' flexBasis={{d:'690px'}}>
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="278x205" fit='contain' mock='slider-1' src='./images/mslider-1.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="383x242" fit='contain' mock='slider-1' src='./images/slider-1.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}} ml={{base: '40px', d:'210px'}}>A 17-year-old James Atkinson leaves his home in England’s north for London, setting up shop at 44 Gerard Street in Soho. His companion, a pet bear, becomes a mascot for the business. </Text>
                </Grid>
              </Box>

              <SwiperSlide className='swiper-slide' >
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="247x172" fit='contain' mock='slider-1' src='./images/mslider-2.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="276x220" fit='contain' mock='slider-1' src='./images/slider-2.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'100px'}}>Atkinson cements his reputation with a new “English” eau de cologne. The bold, woody composition is positioned as a more daring version of the lighter, citrus-based Italian colognes that were popular at the time. </Text>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide' >
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="219x172" fit='contain' mock='slider-1' src='./images/mslider-3.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="269x220" fit='contain' mock='slider-1' src='./images/slider-3.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'120px'}}>The Duke of Wellington defeats Napoleon at Waterloo — but off the battlefield, the two adversaries share a common love of Atkinsons fragrances. Other well-heeled Atkinsons aficionados include members of the Russian and Italian royal families, and the famous dandy Beau Brummell. </Text>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide' >
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="266x217" fit='contain' mock='slider-1' src='./images/mslider-4.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="295x276" fit='contain' mock='slider-1' src='./images/slider-4.png' />
                  </Figure>

                  <Text pt={{base:"10px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'120px'}}>Having become the toast of fragrant society, Atkinsons’ reputation finally reaches the young King George IV, who proclaims the company the Official Perfumer to the Royal Court of England.</Text>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide' >
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="220x171" fit='contain' mock='slider-1' src='./images/mslider-5.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="263x238" fit='contain' mock='slider-1' src='./images/slider-5.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'120px'}}>James’ brother Edward joins the business, renaming it J. & E. Atkinsons and designing a logo featuring — what else? — a bear. The company moves to the larger and more prestigious Mayfair address of 24 Old Bond Street. </Text>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide' >
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="220x171" fit='contain' mock='slider-1' src='./images/mslider-6.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="283x220" fit='contain' mock='slider-1' src='./images/slider-6.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'120px'}}>Edward’s son James (named after his trailblazing uncle) takes the company reins and, together with his business manager Eugene Barrett, sets his sights on global expansion.</Text>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide' >
                <Grid>
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="226x172" fit='contain' mock='slider-1' src='./images/mslider-7.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="283x220" fit='contain' mock='slider-1' src='./images/slider-7.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'120px'}}>Atkinsons comes to Australia with an appearance at the Victorian Intercolonial Exhibition in Melbourne. It’s one of many world trade shows and expos that the company participated in between 1860 and 1890.</Text>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide' >
                <Grid >
                  <Figure pos='relative'>
                    <Img display={{base: 'block', d: 'none'}} dimension="230x173" fit='contain' mock='slider-1' src='./images/mslider-8.png' />
                    <Img display={{base: 'none', d: 'block'}} dimension="283x220" fit='contain' mock='slider-1' src='./images/slider-8.png' />
                  </Figure>

                  <Text pt={{base:"25px"}} {...texts.content} maxW={{base:'256px', d:'352'}}  ml={{base: '30px', d:'120px'}}>Atkinsons receives another royal warrant, this time from King Edward VII</Text>
                </Grid>
              </SwiperSlide>


            </Box>
          </Box>

          <Box pos='relative' p={{base: '40px 0 100px'}}
            sx={{
              maxW: {md: '367px'},
              mx: {base:'40px', md:'auto'},
              '.swiper-scrollbar.swiper-scrollbar-horizontal': {
                h: '18px',
                bg: 'transparent',
                bottom: 'auto',

                '&:before': {
                  content: '""',
                  pos:'absolute',
                  h: '1px',
                  w: 'full',
                  top: '51%',
                  left: 0,
                  borderTop: '1px solid #DA532A',
                  transform: 'translateY(-50%)',
                },

                '.swiper-scrollbar-drag': {
                  _hover: {
                    cursor: 'grab',
                  },
                  bg: 'primary',

                  '&:before': {
                    content: '""',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 900,
                    background: 'url(./images/drag.png) no-repeat right center',
                    backgroundSize: 'cover',
                    pr: '15px',
                    pos: 'absolute',
                    bottom:' -25px',
                    left: '-25px',
                    h: '17px',
                    w:'56px'
                  },
                }
              }
            }}
          >
            <Box className="swiper-scrollbar" />
          </Box>
        </Box>

    </Box>
  )
}

// font styles
const texts = {
  title: {
    fontWeight: 'bold',
    fontFamily: 'canela',
    letterSpacing: '0.42px',
    fontSize: {base: '36px', sm: '42px', d:'50px'},
    lineHeight: {base: '42px', sm: '42px', d:'60px'},
  },
  subtitle: {
    fontWeight: 'medium',
    fontFamily: 'canela',
    letterSpacing: '0.42px',
    fontSize: {base: '16px', sm: '18px', d:'22px'},
    lineHeight: {base: '22px', sm: '26px', d: '36px'},
  },
  content: {
    fontFamily: 'fact',
    fontSize: {base: '14px', d:'16px'},
    lineHeight: {base: '20px', d:'26px'},
  },
}

