import { Button, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from "D:/Bug/abd/src/components/image/pexels-dids-3844790.jpg";
import LoginIcon from '@mui/icons-material/Login';

const WelcomePage = () => {
  return (
    <div style={styles.container}>
        <div style={styles.imageContainer}>
      <img
        src={img}
        alt="Welcome"
        style={styles.image}
      />
      <h1 style={styles.title}>Welcome!</h1>
      
      <div style={styles.buttonContainer}>
      {/* <IconButton style={styles.button}>
        <LoginIcon>Login</LoginIcon>
        </IconButton> */}
        <Button style={styles.button}>Login</Button>
        <Button style={styles.button}>Sign Up</Button>
        <Link to={'/v'}>
        <Button style={styles.button}>View</Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f5f5f5',
  },
  imageContainer: {
    width: '100%',
    height: 'calc(100vh - 0px)', // Adjust if you have a fixed header height
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '78px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '800px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 10px',
    borderRadius: '5px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default WelcomePage;
