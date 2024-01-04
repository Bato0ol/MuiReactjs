import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCall, VideoCameraBack} from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import styled from '@emotion/styled';
import batol from "../batool.jpg"
const StyledModal=styled(Modal)({

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
});
const UserBox=styled(Box)((theme)=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    marginBottom:"20px"
   
  } )
  )
function Add() {
    const[open,setOpen]=useState(false);
  return (
   
    <>
        <Tooltip sx={{position:"fixed", bottom:20,left:{xs:"calc(50% - 25px)",md:30}}} onClick={(e)=>setOpen(true)}>
        <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  bgcolor={"background.default"} color={'text.primary'}  p={4} width={400} height={280} borderRadius={5}>
  <Typography variant='h6' color={"gray"} textAlign={"center"}>Create Post</Typography>
  <UserBox>
<Avatar sx={{width:"30px",height:"30px"}} src={batol} />
<Typography variant='span'>Batool Hamade </Typography>

</UserBox>
<TextField
          id="standard-multiline-static"
     sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="what's in your mind"
          variant="standard"
        />
        <Stack direction={"row"} gap={1} mt={2} mb={3} >
<EmojiEmotions color='primary'/>
<Image color='secondary'/>
<VideoCameraBack color='success'/>
<PersonAdd color='error'/>


        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post  </Button>
  <Button  sx={{width:"100px"}}><DateRange/></Button>

</ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add
