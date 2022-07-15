import React, { cloneElement } from 'react'
import DigikalaSvg from './../svgs/digikala'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AppBar, Divider, Grid, TextField, Toolbar, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/system';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const AppBarStyled = styled(AppBar)`
  background:#fff;
  border-bottom:1px solid #f0f0f1; 
  color:#111;
  padding:5px
  `

export default function Header() {
  return (
    <ElevationScroll>
      < AppBarStyled>
        <Toolbar>
          <Grid container display={'flex'} alignItems={'center'} >
            <Grid item xs={1} display={'flex'} alignItems={'center'}>
              <DigikalaSvg />
            </Grid>
            <Grid item xs={5}>
              <div style={{display:'flex' , alignItems:'center' , borderRadius:'10px', padding:'8px' ,background: '#f0f0f1'}}>
                <SearchIcon sx={{ color: '#a1a3a8' }} />
                <input placeholder='جستجو'  style={{ border:'none' ,background:'transparent'  }}/>

              </div>
            </Grid>
            <Grid item xs={6} display='flex' height={'100%'} alignItems={'center'} justifyContent={"flex-end"} >
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #f0f0f1', padding: '5px', borderRadius: '5px' }}>
                <ExitToAppIcon  sx={{fontSize:'20px' , mx:2 }}/>
                <div style={{fontSize:'12px'}}>
                  ورود | ثبت‌نام
                </div>
              </div>
              <Divider orientation="vertical" flexItem  sx ={{ mx:2 }}/>
              <div>
                <ShoppingCartIcon style={{fontSize:'20px'}} />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </ AppBarStyled>
    </ElevationScroll>
  )
}
