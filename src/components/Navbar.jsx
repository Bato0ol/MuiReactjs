import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Mail, Notifications } from '@mui/icons-material';
import batol from "../batool.jpg"

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"

});
const Search=styled("div")((theme)=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:"5px",
  width:"40%"
} )
)
const Icons=styled(Box)((theme)=>({
  display:"flex",
  gap:"20px",
  alignItems:"center"
 
} )
)
const UserBox=styled(Box)((theme)=>({
  display:"flex",
  gap:"10px",
  alignItems:"center"
 
} )
)

function Navbar() {
  const[open,seetOpen]=useState(false);
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Batool Hamade</Typography>
        <LocalFloristIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'>search</InputBase></Search>
      <Icons sx={{display:{xs:"none",sm:"flex"}}}><Badge badgeContent={4} color="error">
  <Mail />
  </Badge>
  <Badge badgeContent={4} color="error">
  <Notifications/>
</Badge>
<Avatar onClick={(e)=>seetOpen(true)} sx={{width:"30px",height:"30px"}} src={batol} />
</Icons>
<UserBox onClick={(e)=>seetOpen(true)} sx={{display:{xs:"flex",sm:"none"}}} >
<Avatar sx={{width:"30px",height:"30px"}} src={batol} />
<Typography variant='span'>Batool </Typography>
</UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        //anchorEl={anchorEl}
        open={open}
        onClose={(e)=>seetOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
     
    </AppBar>
  )
}

export default Navbar
