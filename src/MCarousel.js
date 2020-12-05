import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = makeStyles((theme) =>({
  
  box :{
    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({backgroundImage}),
    height : "500px",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", 
  }
}));
function MCarausel({title  , description ,image}) {
    const classes = styles();
    return (
        <div>
            <Box className ={classes.box}
              
            >
              <Typography color="inherit" align="center" variant="h2" marked="center">
                {title}
              </Typography>
              <Typography color="inherit" align="center" variant="h5" >
                {description}
              </Typography>
              <Button variant="contained" color="primary">
  Primary
</Button>
            </Box>
        </div>
    )
}

export default MCarausel
