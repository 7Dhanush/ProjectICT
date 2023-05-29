import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imageSrc from 'D:/Bug/abd/src/components/image/Book.jpg';
import imageSrc1 from 'D:/Bug/abd/src/components/image/pexels-aline-viana-prado-2465877.jpg'

import { Box, Button, Grid, Menu, MenuItem } from '@mui/material';
import CommentSection from './CommentSection';
import Star from './Star';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Interface = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [liked, setLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

     // Check if the content is liked by the current account
  const [isLikedByAccount, setIsLikedByAccount] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    // Handle menu item click
    console.log('Menu item clicked:', event.target.textContent);
    handleMenuClose();
  };

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleLikeClick = () => {
       // Check if the content is already liked by the current account
    if (!isLikedByAccount) {
      setLiked(true);
      setNumLikes(numLikes + 1);
      setIsLikedByAccount(true);
    } else {
      // Remove the like
      setLiked(false);
      setNumLikes(numLikes - 1);
      setIsLikedByAccount(false);
     

      // Clear the like after 1 second
      setTimeout(() => {
        setLiked(false);
      }, 100000);
    }
    };
  return (
    
    <div style={{paddingTop: "100px",flexDirection: 'column',display:'flex', alignItems: 'center'}} className='cont'> 
        <Grid container spacing={2}>
         <Card sx={{ maxWidth: 400,width: '100%' , margin: '0 45px' }} style={{ marginBottom: '40px'}}>
         <Grid item xs={12} sm={6} md={12} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            h
          </Avatar>
        }
        action={
          <IconButton
          aria-label="settings"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
           
        }
        title="Live After U"
        subheader="September 14, 2016"
      />
      <Menu
           id="menu"
           anchorEl={anchorEl}
           open={Boolean(anchorEl)}
           onClose={handleMenuClose}
         >
           <MenuItem onClick={handleMenuItemClick}>Report</MenuItem>
           <MenuItem onClick={handleMenuItemClick}>Hide</MenuItem>
           <MenuItem onClick={handleMenuItemClick}>Yoyo</MenuItem>
         </Menu>
      <CardMedia
        component="img"
        height="130"
        image={imageSrc}
        alt="pexels-gül-işk-2128249h"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body2" color="text.secondary">
            {numLikes} {numLikes === 1 ? 'like' : 'likes'}
          </Typography>
        <IconButton aria-label="share">
        <CommentSection />
        </IconButton>
        <IconButton aria-label="Rent">
        <Button>Rent</Button>
      </IconButton>
        <Box>
           <Star />
      </Box>
     
      <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
      >
      <ExpandMoreIcon />
      </ExpandMore>
      

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
          <Typography paragraph>
            Book no:
          </Typography>
          <Typography paragraph>
           Book Name:
          </Typography>
        </CardContent>
      </Collapse>
      </Grid>
    </Card>
    <br/> <br/>
    <br/>
    
    
    
    </Grid>
    
   </div>
   
  )
}

export default Interface