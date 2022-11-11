import { Accessible, Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Box, styled, InputBase, Toolbar, Typography, AppBar, Menu, Button } from "@mui/material";
import React, {useState} from "react";
import rectangle from "../images/rectangle.png"
import logo from "../images/logo.png"
import refer from "../images/refer_1.png"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Icons = styled(Box)(({ theme }) => ({
  display: "none", 
  gap:"20px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));

const Search = styled("div")(({theme})=> ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius, 
  width: "40%",
  borderColor: 'black',
  position: 'relative'
  // boxShadow: '10px 5px 5px red'

}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex", 
  gap:"10px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));

function Header() {
  const [open, setOpen] = useState(false);
  return(
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <StyledToolbar>
          <Typography variant='h6' color="black" sx={{ display:{xs:"none", sm:"block"}}}>
            <img src={logo} alt="logo"/>
          </Typography>
          <Typography color="black">
            Explore
          </Typography>
          <Accessible sx={{ display:{xs: "block", sm:"none"} }}/>
          <Menu
            color="primary"
            label="Explore"
            // onClick={function() {console.log('toggle clicked')}}
            // onSelect={function(val) {console.log(val);}}
          ></Menu>
          <Search>
            <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
          <InputBase placeholder='search'/></Search>
          <Icons>
          
              <Notifications color="success"/>

              <ShoppingCart color="success"/>
      
            <Avatar onClick={(e)=>setOpen(true)} sx={{ width:30, height:30 }} alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          </Icons>
          <UserBox onClick={(e)=>setOpen(true)}>
            <Avatar sx={{ width:30, height:30 }} alt="Travis Howard" src="../images/logo.png" />
            <Typography>Travis</Typography>
          </UserBox>
        </StyledToolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          height: "10vh",
          margin: "auto",
          marginTop: 10,
          width:"60vw",
          justifyContent:"spaceBetween",
          padding:4,
          //maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
          backgroundImage: `url(${rectangle})`
        }}        
      >
        <Typography 
          sx={{
          display: "flex",}}>
          <Typography sx={{ display:"flex", flexDirection:"column" }}>
            <b>Refer & Earn</b>
            <p>Refer Upskilling content to your friends & family to earn cash for each registration;</p>
          </Typography>
          <img src= {refer} alt="refer"/>
          <Button variant="text" 
            sx={{ backgroundColor: "#FF5841",
            height:40,
            marginTop:4,
            color:"white",
           
             }}
            >
            My Referrals
            </Button>
        </Typography>
        
      </Box>
    </>
  )
}
export default Header;