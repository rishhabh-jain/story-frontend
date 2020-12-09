import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import {useSpeechSynthesis} from 'react-speech-kit'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: 345,
    },
    number : {
      maxWidth : 10,
      alignItems : 'flex-end'
    },
    location  : {
      minWidth : 250
    },
    media: {
      marginTop:'30',
      height: 270,
      width : 400
    },
    content : {
      height : 90
    },
    actions : {
      height : 50
    },
    slider : {
      
    },
    breed : {
        paddingTop : '15px',
        color : '#3333ff'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      // transition: theme.transitions.create('transform', {
      //   duration: theme.transitions.duration.shortest,
      // }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red[500]',
    },
    body : {
      minHeight : 80 ,
    },
    title : {
      marginBottom : '15px',
      color : 'black '
    },
    dialog : {
      minWidth : '500px',
      paddingBottom : '30px'
    }
  });

function StoryCard({stories }){
    // const breed =  item.bree
    const id = '5f79c6c13462bb27a87b6202'
    console.log(stories._id)
    const [favorite, setFavorite] = useState(false)
    // const setFav = () => {
    //   if ( likes.includes(id) ){
    //     setFavorite(true)
    //   }
    //   else{
    //     setFavorite(false)
    //   }
    // }
    // setFav()
    const classes = useStyles();
    const onEnd = () => {
      // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
      onEnd,
    });
    const [show, setShow] = useState(true)
    const [pitch, setPitch] = useState(2)
    const [rate, setRate] = useState(1)
    const voice = voices[9] || null;
    const body = stories.body

    // const caption = item.caption
    // function capital(title) { return title.charAt(0).toUpperCase() + title.slice(1)}
    // const title = item.title
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //   "July", "August", "September", "October", "November", "December"
    // ];
    // const month = item.createdAt.substring(5, 7);
    // const day = item.createdAt.substring(8,10);
    // const year = item.createdAt.substring(0,4)
    // const name = item.name ;
    const [open, setOpen] = React.useState(false);
    const [opensound, setOpensound] = useState(false)

      const handleClickOpen = () => {
        setOpensound(true);
      };
      const handleFavorite = () => {
        // if(favorite){
        //   setFavorite(false)
        //   axios.put(`http://localhost:5000/stories/like/?id=${id}`, stories._id)
        //         .catch(error => {
        //             console.error('There was an error!', error);
        //         })
        // }
        // else{
        //   setFavorite(true)
        //   axios.put(`http://localhost:5000/stories/unlike/?id=${id}`, stories._id)
        //         .catch(error => {
        //             console.error('There was an error!!', error);
        //         })
        // }
        axios.post(`http://localhost:5000/stories/like`, stories._id)
                .catch(error => {
                    console.error('There was an error!!', error);
                })
      }
      function valuetext(value) {
        return `${value}°C`;
      }
      const handleClose = () => {
        setOpensound(false);
      };
      const handleChangeRate = (event, newValue) => {
        setRate(newValue)
      }
      const handleChangePitch = (event, newValue) => {
        setPitch(newValue)
      }
      const [expanded, setExpanded] = React.useState(false);
      const length = stories.body.length
      console.log(length)
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      // if( length > 300){
      //   setShow(false)
      // }
    // return isLoading ? (<h1> is loadingnm,fdn,gm </h1>) :
    return(  
      <div>
         {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">User Number</DialogTitle>
          <DialogContent>
              {stories.user}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} alignItems="left" color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog> */}
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={stories.user.image}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {stories.user.displayName}
        subheader={stories.createdAt}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
      <Typography className={classes.title}variant="h4" align="left" color="textSecondary" component="h3">
          {stories.title}
        </Typography>
       
        <Typography className={classes.body} variant="body2" align="left" color="textSecondary" component="p">
          {stories.body.substr(0,180)} ... 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color={favorite ? "primary" : "transparent"} onClick={handleFavorite}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share"  onClick={handleClickOpen}>
          <PlayArrowIcon />
        </IconButton>
        <IconButton
          // className={clsx(classes.expand, {
          //   [classes.expandOpen]: expanded,
          // })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> comments</Typography>
        </CardContent>
      </Collapse>
    </Card>
      {/* dialog for playing the story */}
    <Dialog
      maxWidth
        open={opensound}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Play Story</DialogTitle>
        <DialogContent >
          <Typography className={classes.dialog}>
            {stories.body}
          </Typography>
          <Typography>
            Set rate
          </Typography>
        <Slider
          defaultValue={rate}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0.5}
          onChange={handleChangeRate}
          max={2}
        />
        <Typography> 
          Set pitch  
        </Typography>
        <Slider
          defaultValue={pitch}
          getAriaValueText={valuetext}
          onChange={handleChangePitch}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0}
          max={2}
        />
         {speaking ? (
              <Button  onClick={cancel}>
                Stop
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => speak({ text : body , voice, rate, pitch})}
              >
                Speak
              </Button>
            )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}

export default StoryCard