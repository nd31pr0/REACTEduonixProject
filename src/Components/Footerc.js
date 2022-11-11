import { Box } from '@mui/system';
import React from 'react';
import footer_img from "../images/footer_img.png"


function Footer(){
  return(
    <React.Fragment>
      <Box sx={{ marginTop:4, width: '50%' }}>
          <img src={footer_img} alt="logo"  marginLeft="10" width="1440px"/>
      </Box>
    </React.Fragment>
  );
}
export default Footer;