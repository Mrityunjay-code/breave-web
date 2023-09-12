// src/ContactPage.js

import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import './contact.css'
import Cont from'../Assest/contact.png';
import Footer from '../FOOTER/Footer';


function Contact() {
  return (
    <div>
        <div className='c'>
      
       <img  src= {Cont} width="300px"/>
        </div>
    <div className='contact'>
    <Container maxWidth="sm">
      <Typography variant="h4" className='con' gutterBottom>
        Contact Us
      </Typography>
      <form id='form'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
            />
          </Grid>
        </Grid><br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Container><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
    </div>
   
  );
}

export default Contact;
