import { Box } from '@mui/system'
import React from 'react'
import { Pagination, FreeMode, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Main() {
    return (
        <Box sx={{
            height: '400px',
            background:'red'
        }}>

            <Swiper
                slidesPerView={5}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwipe2"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Box>
    )
}
