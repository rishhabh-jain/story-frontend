import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
  root: {
      flexGrow : 1,   
  },
  intro : {
    alignSelf : 'center',
    margin : '30px',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
function Test() {
  const classes = useStyles();
    const  [user, setUser] = useState({})
useEffect(()=> {
    const fetchItems = async () =>{
      const result = await axios(`http://localhost:5000/auth/login/success`, {withCredentials:true})
      if(result.data.name != null ){
          const data = result.data.name;
          setUser(data);
      }
    //   setItems(result.data)
    //   setLoading(false)
    }
    fetchItems()
  }, [])
    return (
        <div className={classes.intro}>
           <Avatar alt="Remy Sharp" src={user.image} className={classes.large} />
         <h1 style={{ paddingLeft : '20px' }}> Welcome {user.displayName}  !!</h1>
        </div>
    )
}

export default Test
