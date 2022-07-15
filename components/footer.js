import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DigiLogo from './svgs/digiLogo'
const Footer = () => {
    const listItem = [
        { name: 'امکان تحویل اکسپرس', src: 'https://www.digikala.com/statics/img/svg/footer/express-delivery.svg' },
        { name: 'امکان پرداخت درمحل', src: 'https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg' },
        { name: '7 روز هفته', src: 'https://www.digikala.com/statics/img/svg/footer/support.svg' },
        { name: 'هفت روز ضمانت', src: 'https://www.digikala.com/statics/img/svg/footer/days-return.svg' },
        { name: 'ضمانت اصل بودن', src: 'https://www.digikala.com/statics/img/svg/footer/original-products.svg' },
    ]
    return (
        <footer style={{ borderTop: '1px solid #f0f0f1' , padding:'10px'}}>
            <Grid container>
                <Grid item xs={12} mt={4}>
                    <DigiLogo />
                </Grid>
                <Grid item display={'flex'} xs={12}>
                    <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                    <Divider orientation='vertical' flexItem sx={{ mx: 3, height: '40%', my: 'auto' }} />
                    <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </Grid>
                <Grid item display={'flex'} justifyContent={'space-evenly'} xs={12} my={5}>
                    {
                        listItem.map((ele, key) => ((
                            <Box key={key} display="flex" alignItems={'center'} flexDirection={'column'}>
                                <img width={'100px'} height={'120px'} src={ele.src} />
                                <p>{ele.name}</p>
                            </Box>
                        )))
                    }
                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={2} >
                    <Typography  variant='h4' >با دیجی‌کالا</Typography>
                    <ul>
                        <li>اتاق خبر</li>
                        <li>فروش</li>
                        <li>فرصت شغلی</li>
                        <li>تماس با ما</li>
                        <li>درباره دیجیکالا</li>
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h4' >
                        خدمات مشتریان
                    </Typography>
                    <ul>
                        <li>پاسخ به پرسش های متداول</li>
                        <li> رویه‌های بازگرداندن</li>
                        <li> شرایط استفاده</li>
                        <li> حریم خصوصی</li>
                        <li> گزارش باگ</li>
                      
                    </ul>

                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h4' >
                        راهنمای خرید از دیجی‌کالا
                    </Typography>
                    <ul>
                        <li>نحوه ثبت سفارش</li>
                        <li>رویه ارسال</li>
                        <li>شیوه پرداخت</li>
                    </ul>

                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h4' >
                        همراه ما باشید!
                    </Typography>

                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer