import React , {useState , useEffect} from 'react'
import SetStoryCard from './SetStoryCard'
import AddStory from './AddStory'
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow : 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      svg : { 
          width : '100vw'
      },
      adopt : {
          backgroundColor : '#fff5f8'
      },
      fabButton: {
          position: 'sticky',
          zIndex: 1,
          bottom : theme.spacing(2),
          left : theme.spacing(2),
          margin: '0 auto',
        },
        appBar: {
          position: 'relative',
        },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Stories({stories ,id }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const [items , setItems ] = useState([]);
      const [loading , setLoading ] = useState(true)
    // useEffect(()=> {
    //   const fetchItems = async () =>{
    //     const result = await axios(`http://localhost:5000/stories/getstories/`)
    //     console.log(result.data)
    //     setItems(result.data)
    //     setLoading(false)
    //   }
    //   fetchItems()
    // }, [])
    // function FormRow() {
    //     return (
    //       <React.Fragment>
    //         <Grid item xs={12} sm={4}>
    //           <Cardjs />
    //         </Grid>
    //         <Grid item xs={12} sm={4}>
    //         <Cardjs/>
    //         </Grid>
    //         <Grid item xs={12} sm={4}>
    //         <Cardjs/>
    //         </Grid>
    //       </React.Fragment>
    //     );
    //   }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    console.log(stories)
    return (
        <div className={classes.root}>
            <SetStoryCard stories={stories} />
            <Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.fabButton}>
                <AddIcon />
            </Fab>
            {/* <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center" >
                    <FormRow />
                </Grid>
            </Grid> */}
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Add Post
                    </Typography>
                    
                </Toolbar>
                </AppBar>
                <AddStory />
            </Dialog>
        </div>
    )
}

export default Stories