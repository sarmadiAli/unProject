import { Box, Typography } from '@mui/material'
import React from 'react'
import BaseImage from './BaseImg'

export default function Category() {
    const listCat = [
        { name: 'کالای دیجیتال', url: 'https://dkstatics-public.digikala.com/digikala-categories/41d9c93f460475bd5253a70faa0b689605b083bf_1656160881.png' },
        { name: 'خودرو', url: 'https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png' },
        { name: 'مد و پوشاک', url: 'https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png' },
        { name: 'اسباب بازی', url: 'https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png' },
        { name: 'کالا‌های سوپرمارکتی', url: 'https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png' },
      ]
      const listCat2 = [
        { name: 'زیبایی', url: 'https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png' },
        { name: 'خانه', url: 'https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png' },
        { name: 'کتاب', url: 'https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png' },
        { name: 'ورزش', url: 'https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png' },
        { name: 'محصولات', url: 'https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png' },
      ]
      
    return (
        <>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h4' textAlign={'center'} >
                    دسته‌بندی‌های دیجی کالا
                </Typography>
                <Box display={'flex'} flexDirection='column'>
                    <Box display={'flex'} justifyContent='space-evenly'>

                        {
                            listCat.map((item, key) => ((
                                <Box display={'flex'} flexDirection={'column'} alignItems='center' key={key}>
                                    <Box sx={{ width: '200px', height: '200px ' }}>
                                        <BaseImage src={item.url} />
                                    </Box>
                                    <div>
                                        {item.name}
                                    </div>
                                </Box>
                            )))
                        }
                    </Box>
                    <Box display={'flex'} justifyContent='space-evenly'>
                        {
                            listCat2.map((item, key) => ((
                                <Box display={'flex'} flexDirection={'column'} alignItems='center' key={key}>
                                    <Box sx={{ width: '200px', height: '200px ' }}>
                                        <BaseImage src={item.url} />
                                    </Box>
                                    <div>
                                        {item.name}
                                    </div>
                                </Box>
                            )))
                        }
                    </Box>
                </Box>
            </Box>

        </>
    )
}
