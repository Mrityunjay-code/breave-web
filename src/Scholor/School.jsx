
import Schol from '../Assest/scholler.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Schol.css';
//import React, { useState } from 'react';
//import { TextField, Button, Container, Grid, Typography } from '@mui/material';
//import { Link } from 'react-router-dom';
import Footer from '../FOOTER/Footer';

//import Login from '../src../Login';

const School = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [password, setPassword] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');


 const handle=()=>{
    window.open('https://www.goodreads.com/quotes/tag/motivational')
  }

//   function handleSubmit(event) {
    
//     event.preventDefault();
//     setSuccessMessage('Registration successful!');
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setDateOfBirth('');
//     setPassword('');
  

//     console.log(firstName, lastName, email, dateOfBirth, password);
    
//   }

 
  return (
    
    <div className='head'>
    <div>
      <img src={Schol} style={{float:'right', width:"40%", marginTop:"-60px"}} />
    </div>
    <div>
    <h1 className='h'> Be The Reasonn <br/>Someone Smiles Today !</h1>
    </div>
    <div className='d'>
      <p>"Be the reason someone smiles today" is a positive and motivational phrase that encourages kindness and empathy.<br/> It suggests that you can make a positive impact on someone's day by doing something thoughtful or kind that brings a smile to their face. <br/>It's a reminder of the power of small acts of kindness and the positive ripple effect they can have on others.</p>
    </div>
    
      <button className='d5' onClick={handle}>for more <ArrowForwardIcon/></button>

    
    <div >
    {/* <Container>
      <Typography variant="h2">Register Form</Typography>
      {successMessage && (
        <Typography variant="body1" style={{ color: 'green' }}>
          {successMessage}
        </Typography>
      )} */}
      {/* <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              variant="outlined"
              color="secondary"
              label="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
            
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined"  type="submit" style={{backgroundColor:"BLUE", color:"BLACK"}}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body2"><br/>
        Already have an account? <Link to="/login">Login Here</Link>
      </Typography>
    </Container> */}
 
    </div>
  <Footer/>

    </div>
  
  )
}

export default School
