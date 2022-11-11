import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
    <>
      <Box sx={{ display:"flex",
        margin:"auto",
        marginTop:5,
        justifyContent:"center", 
        
      }}>
        <Box sx={{ backgroundColor:"#F5F3D9", width:"19vw", padding:2}}>
          <Typography>Certification program in fullstack development</Typography>
          <p>Earn $250 per invite</p>
        </Box>
        <Box sx={{ backgroundColor:"#EDE7FF", width:"19vw", padding:2, marginLeft:1, marginRight:1 }}>
          <Typography>Certification program in Business strategy</Typography>
          <p>Earn $300 per invite</p>
        </Box>
        <Box sx={{ backgroundColor:"#E9F5E7", width:"19vw", padding:2 }}>
          <Typography>Certification program in Marketing</Typography>
          <p>Earn $350 per invite</p>
        </Box>
      </Box>
      <Box sx={{ 
        display:"flex", 
        width:"66vw", 
        margin:"auto",
        marginTop: 3, 
        alignItems:"center"}}>
        <Typography display="inline">Select a program to refer:</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="#96ADC5" >Select Program</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default Content