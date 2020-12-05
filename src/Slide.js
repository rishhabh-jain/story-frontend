import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = (theme) => ({
    background: {
      backgroundImage: "arren-mills-LwMzzpdwaDE-unsplash.jpg",
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    },
    button: {
      minWidth: 200,
    },
    // h5: {
    //   marginBottom: theme.spacing(4),
    //   marginTop: theme.spacing(4),
    //   [theme.breakpoints.up('sm')]: {
    //     marginTop: theme.spacing(10),
    //   },
    // },
    more: {
    //   marginTop: theme.spacing(2),
    },
  });

function Slide() {
    const classes = useStyles();
    return (
        <div>
            <img style={{ display: 'none' }} src="arren-mills-LwMzzpdwaDE-unsplash.jpg" alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
        </div>
    )
}

export default Slide
