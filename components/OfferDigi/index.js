import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OfferDigi() {
  return (
    <>
      <Box display={'flex'} flexDirection='column' mb={4}>
        <Typography variant='h4' mb={4}>
          پیشنهاد دیجی‌کالا
        </Typography>
        <Box sx={{
          height: '350px',
          border: '1px solid #e0e0e2',
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
              [1, 2, 3, 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 14, 23,232,23,2].map((ele, index) => {
                return (
                  <SwiperSlide key={index} style={{borderLeft: '1px solid #e0e0e2'}}>

                    <Box display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'space-between'} height={'100%'} width={'100%'} >
                      <Box height={'49%'} >
                        <div style={{  width:'80px' ,background: "#f0f0f1", borderRadius: '50%', padding: '20px' }}>
                          <img width={'100%'} height={'80px'} src={'https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60'} />
                        </div>

                        <Typography>
                          گوشی موبایل
                        </Typography>
                      </Box>
                      <Divider color='#e0e0e2' style={{
                          width:'100%'
                      }} />
                      <Box display={'flex'} flexDirection='column' justifyContent={'space-between'} height={'49%'}>
                      <div style={{  width:'80px' ,background: "#f0f0f1", borderRadius: '50%', padding: '20px' }}>
                            <img width={'100%'} height={'80px'} src={'https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60'} />
                        </div>

                        <Typography>
                          گوشی موبایل
                        </Typography>
                      </Box>
                    </Box>

                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </Box>
      </Box>
    </>
  )
}
