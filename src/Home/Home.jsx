

import { CardActionArea } from '@mui/material';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from '../FOOTER/Footer';
import Sliders from './Sliders';
import Ima from '../Assest/img3.jpg'
import './Home.css'
import imgBack from '../Assest/why.png';
import im from "../Assest/img2.jpg"
import I from "../Assest/img4.jpg";

//import Slider from '@mui/material/Slider';
//import Typography from '@mui/material/Typography';
//import useMediaQuery from '@mui/material/useMediaQuery';
//import Button from '@mui/material';

//import Footer from '../FOOTER/Footer';

const Home = () => {
  document.title="Breave | Home"

  
  
  return (
    <div>
      <div className='n1'>

        <div className='head'>
        <span style={{ color: "blue", fontSize: "20px", marginLeft: "64px",marginTop:"12px" }}><b>A GREAT MAN IS STRONG BEACUSE HE IS GENTLE</b></span>

        <div className='n2'>
          <h1><b>Be silent and let your success shout</b></h1>

        </div>
        <h1 style={{ color: "blue", marginLeft: "200px" }}>Our Succes</h1>

        <p style={{ fontSize: "20px" }}><b>Do not meet your enemy with an angry face.
           Instead, rise and greet them with<br/> your smiling face. Nothing is more
           insulting than seeing your enemy happy <br/>and without a care Failure will never 
      overtake me if my determination to <br/>succeed is strong enough.</b></p>


      </div>

      </div>

      <Container className="custom-collection">
        <Row>
          <Col style={{ backgroundColor: "white" }}>
            <div className="image-with-hover">
              <Image
                className="img"
                src="https://img.freepik.com/premium-photo/select-happy-face_207634-9089.jpg?size=626&ext=jpg"

              />
            </div>
          </Col>


        </Row>
      </Container>

      {/* //section second */}


      <div className='company-logo'>
        <div className='logo'>
          <img src='data:image/png;base64,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'style={{paddingLeft:"3px"}} width="150px"height='50px' />
          <img src='data:image/png;base64,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'width="150px"height='50px' style={{paddingLeft:"30px"}} />
          <img src='data:image/png;base64,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'width="150px"height='50px' style={{paddingLeft:"30px"}}/>
          <img src="data:image/png;base64,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" width="150px"height='50px' style={{paddingLeft:"30px"}}/>
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc4AAACQCAMAAAC2y3uxAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMAQGAgv5/fgO8QkDBwUK/Pb4WhX8sAAAuLSURBVHja7Jxtc6MgFEbBC5cXNfb5/392OzvbvZKKJNR0JHI+C0ZPj2OVUf2EMMQbewBs4kyq0zBhMkgwg+o0SnAe32AXVKdBPjw24V5oe5BBFtsDbQztsQP3e6KmGAB0n+/CAHSfb8MMdJ9vA3kkeGOdizdGwtLvh9qAE5dR/9c8MVZE1WkAlzhLGxwYwqw6p4cgsN77d9T3y+354cLtjuuX24b4yNgUomyhVefUkMTpSW0j11ujOqfGSnpDVrnvebYBiU2rssw9zzawe5dawfQ8W2AVp3tsu0V1TovEyY9u2N9lnxbCo5bIi/fOSSnGKbie59kpxykEybM/6jsnmThLeTrVOSFpnOU8+5P4U5PE2WSeRH2JxHac7eWpo69cpz9A+L1bO401VqkXxtlcniHKzx+7zrs4W8szLImRrtOuH6s3l6dFgr66Tp2ci9byHJDC4eI6zTrO5vJk3DFdW+dqblKqtTxH3GOurdOs520uzwnfCFfWmcbZXJ4O36Ar6zS1006nyDN2ndVxpvAZ8uwX2/o4U4YzrKHWuIcvfCtUEafAxbGvJ3jcYS+ssyJOYage/Mp7IbquzjTONvNkJLgLP+RL4mw0T/JYYS/8CD6Ns9E8Fa36jFd+QZbE2WyeKrh/Qo2+8uvrNM528/xET84NpC69GiGJs+U8v7i0zjTOxvPsOs0RE05t5/k+Og+JUwXfdJ7vo9McM587w5PbrnMvzlO89yQ9fDLrY2cN4/CJHnd0ymazprp9zH8Hj0/qlIGvjPP3lyUEHY1cxBerj5p3kmmXvE4dGV94E/VzP93KYMjgsk7tlvXA+fA4xynemAFeTJzp1/LU1me+ch39xgpM2l4pZCHwvPFB9G2dspXANpMLBB5VZnCkR3Rqgzu81QfGqaPP/K7X5qkNtmAt5/5pnfDyQfSCTs3Ywui8TqldZCa4os4xc9DDQXFqkzmoujzrZQpOuWqdUGSAB3RG5LC0rxOKFmTgcV/nB3Is9IM4yyf1Ri/NM2IH+wOdxHhA54fBDm5f5+gLY7M6XWGvRWgvzhAL078qT1qwi6/XySjqlB08/Lf8xGCX0ykD6wO1O3HSUjqoF+VJjAL1OlHWWfGZbWQo+dQVe62Mc+Ty9C/Jc/Q4u04wVevEVKsTTNVxjr5i+iPyJI/z6wRTtU7oWp1gqoyTGHcws8cdSzg8T2K0oBNLqNZpqnWCQ1WcgbHGTOPX22GDNfbwPBe0oROxWieGap0wVXHG/LfgyWLFdHCeDq3oxFyt09TrxFQR57h7f0wMiLRD8yRswjdr7W05Tqe306C1nqdo9nT6W5wmF42HsHXomV1oolFPN3xj3NXpTXSTi9vH66l86rRKKSyJCzeItHyeFTotvuHj/3cpNJhqnemMSghZnUY2Gyfeu9xujJ1FNjnc4URnZmT+eM3TX0IYUErsD3tntuQ2CERRsYhd8vD/P5vKwwQjg2/DQCRP6b6lMhbLoWnWZq+bp+vZNawWz2gLpk8QJ5ovV3BKcfiL15RFDacJ7x/nk9XyPtjhl4XythqnTEXHR8519buqd7MuabfAuzbjNBxsXycgMGVXwfkQ4POmhtMRUpXIOOtABLYjU//w9lPPqcEyQztO4xeEsx6XKNS8J37aVB7suoyTk5ZV/PvZOq/mmlO8HKtCkV2eE/b0vh0nbGGcNF3nlWEmvojIinlmgGbiiapF15OX+f+gOnXDosSras+Ty/XjZCScAaacJ4I7Q2tK4BLO3LPhrro+2eDHlGmnTWQ1FDzrNE9GXQHRs3Fy6jU1W8GJetvQdvRrR4MhXjdOVv5Z3ZGMesQhHLue6+F86R6LOLFd6zacAi0lZMZZKxnRlsQg85QHF3RFnIdFSEfGGcg4sXnu2DiTdKUXrfbJbJB5mrwJXhOnzlMh4+SdOEt/qLBxJq1E08qqaIB52pjJXxOnzyuWjHOj48QjKQuMs4hzJY5D+bt+U3SOhMxyTZzLoWKpOBkdJ3ZEHhjnaJwM5BEXWF4VZ+48xWSccPacG6cYgJO9nULavmsi61Vx7qfg1G/yJ7PPDvedefXoX4az9L35OEMlf/iotKYtodv3g5anbewb51Sce/6BeskszdVZcMPhd+HMO1t/emcrwD0Gn+UVtxcDLyD14NyvilOe4jtddSi0gt9bWvjtHbhYYJ5wRndVnCY+azllosLKxgmG4jtpYOvgg3Ndu532mjjzRmdm4MSNSGDjTHKUbpLBLUQN/gJkmV8TZ8hTmYgTL7HkhfawaIzSmQs49JU9S/DymjgVWIKfg3OtpaBBshkHRyjWo/nAAnFvmF0RJ4+Ztgk4sR9yGQZYXRL3toyA3IMSgr1EeUWcKmYSM3HiB5zyxXfsH0Kv5eF9MhwwOlwPpz62uKk48eESBbIMvR4+fdm/T7ZG0qk7oebgxEfNv2IuPhRnZLSjXyswTrJZ4eEx/g7Aj3laFWfjjEpQaEYxFqfxkGZeBomNM+9tJbIPQeOzDntHTKg4H2dUlNgC6zIWZzSc0IZU4ZsKeLFS+cHwGA6qsDiOE/Jl4kycSdrC6wViHM5UXhhsJCFfS80e8QKnOoe+gKTii/btOVqXinEeznr8JFGKFLQu43AmreypuLKQLXBbAZzbYeDI9dBAfSyWJF3Y2MZdKtxUnElq1yFotxtwNW8QzpSq5trtKpa04QEMvsGC31QesxC/R6BpOJsVlvE4sVa0+I5S5+0Pnvdf97TqU3DK5QycSvTFa5fVG5w+I43kGlf62IfgVOIMnEZ0hmsX1as/ChgnWOlDCh+B04jlDJw8y3FLxbpKHeiKcWIz9zSe+gNwGr+cgVMXRxlb4wrqo2y1qrH31AtN+vI4jV/OwMl/csldF1uFiq270rI59sVmTsZpoN88Aadh5Qzz9if3fIHx2nxCj40J/aXW2Tj52/SdXabgdG9TlaLiw2z7LQNlX6rMiOaY/25IuChp9WycLLWnYrjrOTi1lekfKPSGabWq5G0TCfU6i8ZyPaFMxFofDoTpONN6OwiMMxJnSK0YpIqOauHglVsC04pmK/cLGKiqdDlWTcOZfitkIfWQSjAcpxKpFcMmFHrqNOR9K+97ith2R6Zh6yMrsP5OlT3JfifDnuX/fYM/qxoCrfBTn7cnqau+v5hyLsuf5V+z7L/9mcvL7Iqpup/eb3/YZ2PVXRFJQs9TKkGvf6VfUcyX374T93b5bxL/UmUWgXG9sYKdKncoWOtHvzZ3SXVayIYnXlg6Hau/NUamM3STA8sTFPFk1LfGKHbitMXInzfOk0VeCMcx/tVy42zUdXAu4cVx3jhPF/CdDe5zW1qlP/mh1mtK9ceAto98QaO/PYTl1hjtoErJ6+E/efGVLbfGyKG5H/nCse/v6O1yq0c4MkX/0FaJ3uaglluD5MHEE24l9/N096LQeIFNZEwT88SjsFujtILrBYBmP0/+tKl2a4jwiTrsN03xYQosdS8iDBaOkoeP1Klso9xsdOO8+9oZ0s1n8L4O85P8bcDW3lrd05SRsqbRTtyB5oGnJrrse+96jnTToUohDzRfeErRkqa6B0LTzBPXLVMHmgWeams6SX9rrEKk8rQuHmgWeUZnEc17RWie5OthbmyaUfn6+XTFgfO9V9/nSRjKUIbJ6ppB4ok9qH/Eu6v909656zAMwlC0EMe8Qf7/n63KUJSgBioC7eCzZLvLCYhYdphLaK8sAdWN+ie8pgO7aG7X6cFMoNoqi6sPvz6xPZU/PLc0C/tSzqfa6Sg6Er0w735zaAwuVR8xhWSDMznGSYtEbHMNiio0QkJNNeg6U0pSfrDNdSjqxZqvJ2rZ5nIC9mkQt7wWkUu1k9mAmmh1Tww37y1AYkumGYgpAG+0S9iUHpBZkHAlk0tBy9jK0rqYGG/jdmSZf4GoTOjiciiHwPMJ6Ac4aSFpIkKMVrqR+e8IWSqm3Qd2OZcn+of6t39CHGYAAAAASUVORK5CYII="  width="150px"height='50px' style={{paddingLeft:"30px"}}/>

          
        </div>
  
        <div className='logo2'>

          <img src='https://sherise.vercel.app/static/media/company-logo6.01e0cee97e843281bb1b.png'width="150px"height='50px' style={{paddingLeft:"30px"}}/>

          <img src='https://sherise.vercel.app/static/media/microsoft-logo.ec5bb32f5eb5abaf70d7.png'width="150px"height='50px' style={{paddingLeft:"30px"}}/>
        </div>
        <div>
        <h1 className="hover-shadow"><b>Our Service</b></h1>

      </div>
      
      
      <div className='cardall'>
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
  component="img"
  height="140"
  image="https://freesvg.org/storage/img/thumb/johnny-automatic-Jumping-rope.png"
  alt="green iguana"
  className="custom-card-media" width="40px"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
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
          component="img"
          height="140"
          image="https://freesvg.org/storage/img/thumb/Comic-characters-Photographer.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
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
          component="img2"
          height="140"
          image="https://freesvg.org/storage/img/thumb/boy_silhuette_1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
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
          component="img3"
          height="140"
          image="https://freesvg.org/storage/img/thumb/Engineer-2.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


      </div>
      <div className='cardall'>
        <div className='d1'>
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
          component="img4"
          height="140"
          image="https://freesvg.org/storage/img/thumb/Surprised.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='d2'>
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
          component="img5"
          height="140"
          image="https://freesvg.org/storage/img/thumb/1553684715.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
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
          component="img6"
          height="140"
          image="https://freesvg.org/storage/img/thumb/senator-access.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
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
          component="img7"
          height="140"
          image="https://freesvg.org/storage/img/thumb/1390518392.png"
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </div>
         
        <div className='all'>
      <h1 style={{ textAlign: 'center', color: 'red' }} className='s'><b>Why Need</b></h1>
      <div className='cardall1'>
        <img src={imgBack} style={{ width: '100%', maxWidth: '600px' }} className='s1' alt='Background' />
      </div>
      <div>
        <h2 className='s2'><b> Why do we need to create this website?</b></h2>
        <p style={{ fontSize: '20px' }} className='para'>Websites are created for a wide range of purposes, and they
          <br /> serve various functions depending on the goals of the creator.</p>
      </div>

      <div>
        <span className='sp'>Online Presence: </span><br />
        <p className='para1'>A website serves as a digital presence for individuals, businesses, organizations, and even
          <br /> governments. It allows them to be accessible to a global audience 24/7, regardless of their physical location.</p>
        <span className='sp'>Information Sharing: </span><br />
        <p className='para1'> Websites are an excellent platform for sharing information. Businesses can provide details about
          <br /> their products, services, and contact information. Educational institutions can share course
          <br /> information and resources. Government agencies can provide information about regulations
          <br />and services.</p>
        <span className='sp'>E-commerce: </span><br />
        <p className='para1'>  Many businesses create websites to sell products or services online. E-commerce websites enable
          <br /> customers to browse products, add items to their cart, and make secure online payments.</p>
      </div>
      
    </div>
   
    <div className='ment'>
   <h1>What our Mentor says ?</h1> 
    </div>
    <div className='pro1'>
  
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
          image={Ima}
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
      <div className='slid'>

    <div >
   
    <Sliders/>
    </div>




        
      </div>
    
     <Footer/>
    </div>
      
 
      

      
    </div>


  )
}

export default Home
