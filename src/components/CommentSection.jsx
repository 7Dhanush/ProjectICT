import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import { styled } from '@mui/system';
import img from "D:/Bug/abd/src/components/image/Screenshot 2023-05-22 144738.png";

const SDialogContent = styled(DialogContent)`
    width: 400px;
  height: 300px;
`;
const StyledIconButton = styled(IconButton)`
 color: #213fa3;
 `;
 const StyledButton = styled(Button)`
 color: #fff;
 background-color: #213fa3;

 &:hover {
   background-color:  #213fa3;
 }
`;
const BlurBackground = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 999;
`;
const CommentSection = () => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [comments,setComments] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
      // Add the new comment to the comments array
      setComments([...comments, comment]);

      // Reset the comment input field
      setComment('');
  
   
  };

  return (
    <>
      <StyledIconButton aria-label="share" onClick={handleOpen}>
        <SmsTwoToneIcon />
      </StyledIconButton>
      {open && <BlurBackground />}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Comment Section</DialogTitle>
        <SDialogContent>
          <TextField
            label="Comment"
            multiline
            rows={10}
            value={comment}
            onChange={handleCommentChange}
            fullWidth
          />
          <List>
            {comments.map((comment, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={img} />
                </ListItemAvatar>
                <ListItemText
                  primary="Gokul"
                  secondary={comment}
                />
              </ListItem>
            ))}
          </List>
        </SDialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose}>Cancel</StyledButton>
          <StyledIconButton onClick={handleSubmit}>Submit</StyledIconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CommentSection;