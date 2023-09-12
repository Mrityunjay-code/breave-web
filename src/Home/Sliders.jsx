// import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ima from '../Assest/img2.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import './Home.css';



const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true


    }
    return (
        <>
            <div className='sli'>


                <div style={{  width: '50%',paddingTop:"2rem"}}>


                    <Slider {...settings}>

                        <div  >
                            <Card
                                sx={{
                                
                                    
                                    marginLeft:'80px',
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
                                        image={Ima}
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </div>
                        <div >
                        <Card
                                sx={{
                                
                                    
                                    marginLeft:'80px',
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
                                        image={Ima}
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div >
                        <Card
                                sx={{
                                
                                    
                                    marginLeft:'80px',
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
                                        image={Ima}
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                    </Slider>
                </div>


            </div>
        </>
    )
}

export default Sliders