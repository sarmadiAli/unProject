import { Box } from '@mui/material'
import React from 'react'

export default function TwoImage() {
    return (
        <>
            <Box display={'flex'} width={'100%'} justifyContent='space-evenly' overflow='hidden'>
                <Box sx={{ width: '49%' }}>
                    <img width={'100%'} src={'https://dkstatics-public.digikala.com/digikala-adservice-banners/e52b0963db3d94e63b0d05b0af8c62076fc3f77e_1656482391.jpg?x-oss-process=image/quality,q_95'} />
                </Box>
                <Box sx={{ width: '49%' }}>
                    <img width={'100%'} src={'https://dkstatics-public.digikala.com/digikala-adservice-banners/9d6c4e390cda39ed481cae52d429e701c6d1819a_1656410218.jpg?x-oss-process=image/quality,q_95'} />
                </Box>
            </Box>
        </>
    )
}
