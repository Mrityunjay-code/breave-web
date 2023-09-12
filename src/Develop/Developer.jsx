import React from 'react'
import im from "../Assest/img2.jpg"
import I from "../Assest/img4.jpg";
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../FOOTER/Footer';
import './Dev.css'

const Developer = () => {
  return (
    <div>
        <div className='ds'>
        <h1> Our Mentor</h1>
        </div>
        <div className='cardall2'>
     
    <Card
  sx={{
    maxWidth: 300,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 3px 6px rgba(0, 128, 0, 0.5)', // Green shadow on hover
    },
  }}
  className="card-item"
>
      <CardActionArea>
        <CardMedia
          component="img9"
          height="140"
          image={I}
          alt="green iguana"
        />

        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card
  sx={{
    maxWidth: 300,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 3px 6px rgba(0, 128, 0, 0.5)', // Green shadow on hover
    },
  }}
  className="card-item"
>
      <CardActionArea>
        <CardMedia
          component="img9"
          height="140"
          image={im}
          alt="green iguana"
        />

        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    </div>
    <Footer/>
    </div>
  )
}

export default Developer
