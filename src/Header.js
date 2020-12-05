
import React , {useState , useEffect }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color : 'black' ,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    left: {
     
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    story: {
      color : 'red' , 
      fontweight : 900 ,
      marginLeft: theme.spacing(3),
    },
    margin : {
      marginLeft: theme.spacing(3),
    },
    button : {
      color : 'black',
      '&:hover': {
        color : 'black'
      },
      marginLeft: theme.spacing(3),
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // inputRoot: {
    //   color: 'inherit',
    // },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Header({authenticated}){
  // useEffect(()=> {
  //   const fetchItems = async () =>{
  //     const result = await axios(`http://localhost:5000/auth/login/success`, {withCredentials:true})
  //     if(result.data.message == 'user has successfully authenticated'){
  //         setAuthenticated(true)
  //     }
  //     const data = result.data.name;
  //     setUser(data);
  //   //   setItems(result.data)
  //   //   setLoading(false)
  //   }
  //   fetchItems()
  // }, [])
  const classes = useStyles();
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.left}>
          <Typography>
                Stories App
              </Typography>
          </div>
          <div className={classes.right}>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          {!authenticated ? (<Button
            className = {classes.button}
            color = "black"
            href="http://localhost:5000/auth/google"
            underline="none">
              Login
            </Button>) : (
            <Button
            className={classes.button}
            color = "black"
            href="http://localhost:5000/auth/logout"
            underline="none">
             Logout
            </Button>)}
            {/* <Link
            className= {classes.margin}
            variant="h6"
            marginLeft = "20px"
            color = "black"
            underline="none">
                {'SignUp'}
            </Link> */}
            {/* <Link
            className = {classes.story}
            variant="h6"
            underline="none"
            marginLeft = "20px"
            href="https://www.google.com">
               {'Write a Story'}
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
