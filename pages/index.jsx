import React from 'react'
import { AppBar, Box, Grid, TextField, Toolbar, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import BaseImage from './../components/BaseImg'
import Main from '../components/main';
import Header from '../components/header';
import Footer from './../components/footer'
import OfferDigi from './../components/OfferDigi'
import TwoImage from './../components/TwoImag'
import Category from '../components/Category';


const listDigi = [
  {
    name: 'دیجی کالا جت'
    , url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png'
  },
  { name: 'تخفیف‌های ساعت', url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1655015296.png' },
  { name: 'دیجی پی', url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1648897095.png' },
  { name: 'دیجی کالا مهر', url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/17bb6daa07ae2ec11867fb7320ed6f79b26f1f4b_1648897081.png' },
  { name: 'ماموریت ها', url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png' },
  { name: 'دیجی کلاب', url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png' },
  { name: 'س', url: 'https://dkstatics-public.digikala.com/digikala-bellatrix/44f0cf40d5aa1c433866d47976cc0c6e82c86823_1648896970.png' },
]
const listImage = [
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/3221eccf26ec31f9a7565e1e04a77b05dd88e281_1656499736.jpg?x-oss-process=image/quality,q_95'
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/c42e945fafe645b1a5d592a19ac1e12d7cf54853_1656603238.jpg?x-oss-process=image/quality,q_95'
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b2df93c4e2fcef142c88c1ef949e226e8feef812_1656915641.jpg?x-oss-process=image/quality,q_95'
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b2df93c4e2fcef142c88c1ef949e226e8feef812_1656915641.jpg?x-oss-process=image/quality,q_95'
  }
]


const sliderBar = [
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/0eb1b134bbdb7029f1203f8f23413c50aced776b_1657028115.jpg?x-oss-process=image/quality,q_95',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/09befe43354738b178cc3bf8a9cc7d4fee960077_1656909820.jpg?x-oss-process=image/quality,q_95',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/af974289b667cb95539feb6bf13748e10963e177_1657025366.jpg?x-oss-process=image/quality,q_95',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/2a8c31bd3f8dc510022b304215d06d7ec14180b3_1656844752.jpg?x-oss-process=image/quality,q_95',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/8034ae78e2545378b329d9b8729b3c966eb64f65_1657122359.jpg?x-oss-process=image/quality,q_95',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/6b798d58eb42b8f6fbd3696ccfe738231d436454_1649507140.jpg?x-oss-process=image/quality,q_95',

]

const sliderBar2 = [
  'https://www.digikala.com/statics/img/png/specialCarousel/General.png',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
  'https://dkstatics-public.digikala.com/digikala-products/1191442cdce3a1783015aa4adcbc1a2b7fbd7084_1652276793.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',

]


export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 5 }}>
        <div
          style={{
            height: '400px',
            background: 'red'
          }}
        >
          <Swiper pagination={{
            clickable: true,
          }} modules={[Pagination]} className="mySwiper">
            {
              sliderBar.map((ele, key) => ((
                <SwiperSlide key={key}>
                  <img width={'100%'} src={ele} />
                </SwiperSlide>

              )))
            }
          </Swiper>


        </div>

      </Box>
      <Box display={'flex'} justifyContent='space-evenly' my={3}>
        {
          listDigi.map((item, key) => ((
            <Box display={'flex'} flexDirection={'column'} alignItems='center' key={key}>
              <Box sx={{ width: '50px', height: '50px ' }}>
                <BaseImage src={item.url} />
              </Box>
              <div>
                {item.name}
              </div>
            </Box>
          )))
        }
      </Box>
      <Box sx={{
        height: '350px',
        background: 'red',
        width: '99%',
        borderRadius: '20px',
        margin: 'auto'
      }}>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          style={{
            padding: '20px'
          }}
        >

          {
            sliderBar2.map((ele, index) => {
              return (
                <SwiperSlide style={index == 0 ? { background: 'transparent', } : {}} key={index}>

                  <>
                    <Box display={'flex'} flexDirection='column' justifyContent={'space-between'} height={'100%'}>
                      <Box>
                        <img width={'100%'} height={'80px'} src={ele} />
                      </Box>
                      {
                        index != 0 && (
                          <Box>
                            <Box justifyContent={'space-evenly'} display={'flex'}>
                              <span style={{ background: 'red', borderRadius: '10px', width: '40px', height: '20px', textAlign: 'center' }}>
                                ۶%
                              </span>
                              <Typography>
                                ۱۴,۰۰۰,۰۰۰
                              </Typography>
                            </Box>
                            <Box sx={{
                              color: '#c0c2c5',
                              textDecoration: 'line-through'
                            }}>
                              ۲,۰۰۰,۰۰۰
                            </Box>
                          </Box>
                        )
                      }
                    </Box>
                  </>

                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </Box>
      <Box display={'flex'} justifyContent='space-evenly'  >
        {listImage.map((ele, key) => ((
          <Box display={'flex'} alignItems='center' key={key} >
            <Box sx={{ width: '314px', borderRadius: '10px', overflow: 'hidden' }}>
              <BaseImage src={ele.url} />
            </Box>
          </Box>
        )))}
      </Box>
      <Category />
      <TwoImage />
      <OfferDigi />
      <Footer />
    </>
  )
}
