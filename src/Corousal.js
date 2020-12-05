import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import React from 'react'
import './carousel.css';

const styles = (theme) => ({
  // background: {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundColor: '#7fc7d9', // Average color of the background image.
  //   backgroundPosition: 'center',
  // },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});
function Corousal(props) {
  const { classes } = props;
  return (
    <div className = "carousel">
      <Carousel width={100}>
        <Carousel.Item>
          {/* <img
            height="600px"
            overflow="hidden"
            className="d-block w-100"
            src="arren-mills-LwMzzpdwaDE-unsplash.jpg"
            alt="First slide"
          /> */}
          <h1> this is the heading </h1>
          <p> this is the paragraph</p>
          <Typography align="center" marked="center">
        Upgrade your Sundays
      </Typography>
          <Carousel.Caption
          top ="50%"
          transform= "translateY(-50%)">
      <Typography color="inherit" align="center"  >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" >
        Discover the experience
      </Typography>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="600px"
            overflow ="hidden"
            object-fit = "cover"
            className="d-block w-100"
            src="davide-pietralunga-lbH4GCWgmXo-unsplash.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="600px"
            overflow = "hidden"
            object-fit = "cover"
            className="d-block w-100"
            src="raphael-lovaski-QdrNvftdNSY-unsplash.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Button> HI </Button>
            <Typography> HI </Typography>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Corousal
