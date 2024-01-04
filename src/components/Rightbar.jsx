import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import alaa from "../alaa 1.jpg"
import bayan from "../bayan 1.jpg"
import george from "../george.jpg"
import alice from "../alice 2.jpg"
import batol from "../batool.jpg"

function Rightbar() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },

  ];
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
         <Box position={"fixed"} width={"300px"}>
<Typography variant='h6' fontWeight={100}>Online Friends</Typography>
<AvatarGroup max={6}>
  <Avatar alt="Remy Sharp" src={alaa} />
  <Avatar alt="Travis Howard" src={alice} />
  <Avatar alt="Cindy Baker" src={bayan}/>
  <Avatar alt="Agnes Walker" src={george} />
  <Avatar alt="Trevor Henderson" src={batol}/>
  <Avatar alt="Cindy Baker" src={bayan}/>
  <Avatar alt="Agnes Walker" src={george} />
</AvatarGroup>
<Typography variant='h6' fontWeight={100} mb={2} mt={2}>Latest Images</Typography>
<ImageList  cols={3} rowHeight={100} gap={5}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
<Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
<List   sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={alaa}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={alice} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={batol}/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
         </Box>

    </Box>
  )
}

export default Rightbar
