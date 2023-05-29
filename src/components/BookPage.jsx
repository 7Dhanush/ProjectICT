import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import img from 'D:/Bug/abd/src/components/image/pexels-aline-viana-prado-2465877.jpg';
import Star from './Star';
import CommentSection from './CommentSection';

const BookPage = () => {
  return (
    <div style={{paddingTop:"100px"}}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            src={img}
            alt="Book Cover"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Book Title
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Book No: 02  
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Genre: Drama
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Author: John Doe
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ISBN: 
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Published: 2023
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Price: $20
            </Typography>
            <Typography variant="body1">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
          <Box>
            <Star />
          </Box>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
};

export default BookPage;
