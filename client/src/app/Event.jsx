import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import { blue, deepOrange, green, red, yellow } from '@mui/material/colors';

function Event() {
  return (
    <List dense={true} disablePadding={true}
      sx={{
        width: '100%',
        maxWidth: 320,
        bgcolor: '#FAFAFA',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500], width:24, height:24 }}>
            <StarBorderOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zipline at Kualoa" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepOrange[500], width:24, height:24 }}>
            <AccessTimeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="9am - 12pm" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[500], width:24, height:24 }}>
            <LocationOnOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Kualoa Ranch" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: red[500], width:24, height:24 }}>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="78 - 82 °F Partly Cloudy" />
      </ListItem>
    </List>
  );
}

export default Event;