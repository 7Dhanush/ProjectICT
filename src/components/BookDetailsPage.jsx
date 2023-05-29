import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const BookCard = styled(Card)({
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
  });
  
  const BookCover = styled(CardMedia)({
    width: '128px',
    height: '196px',
    margin: '16px',
  });
  
  const BookDetails = styled(CardContent)({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });
  
const BookDetailsPage = () => {
  return (
    <div >
         <Grid container justifyContent="center">
      <BookCard>
        <BookCover   />
        <BookDetails>
          <Typography variant="h5" component="div">
            Life
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            by Surr
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginTop: '16px' }}>
           Very good
          </Typography>
          {/* Render other book details */}
        </BookDetails>
      </BookCard>
    </Grid>
    </div>
  )
}

export default BookDetailsPage