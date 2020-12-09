import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import {makeStyles } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import React, { useState , useEffect} from "react";
import { Input, Button } from "@material-ui/core"; 

const useStyles = makeStyles((theme)=> ({
    padding  : {
      align : 'center',
      margin : '20px',
      width : '80vw',
      textAlign: 'center'
    },
    root : {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center'
    }
}))

function AddPostjs() {
  const [open, setOpen] = React.useState(true);
  const [id, setId] = useState("")
  useEffect(() => {
    const fetchItems = async () =>{
        const result = await axios(`http://localhost:5000/auth/login/success`, {withCredentials:true})
        const data = result.data ; 
        const id = data.name._id ; 
        setId(id)
        console.log(id)
      }
      fetchItems()
  }, [])
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  const [body, setBody] = useState("")
    const classes = useStyles();

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleUpload = () => {
        const post =
                {
                title: title,
                body : body,
                status : status ,
                user : id , 
                category : 'Romance'
                };
                axios.post('http://localhost:5000/stories/poststories', post)
                .catch(error => {
                    console.error('There was an error!', error);
                })
                console.log(post)
                setTitle("")
                setBody("")
                setStatus('')
    };
    
  return (
    <div className={classes.root}>
            <TextField required id="standard-required" value={title} onChange={(e) => setTitle(e.target.value)} className={classes.padding}fullWidth variant="outlined" label="Title"  />
            <TextField required id="standard-required" value={status} onChange={(e) => setStatus(e.target.value)} className={classes.padding}fullWidth variant="outlined" label="Status"  />
            <TextField
                value={body} 
                onChange={(e) => setBody(e.target.value)}
                className={classes.padding}
                fullWidth
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
            />
            <Button className="imageupload__button" onClick={handleUpload} className={classes.padding}>
                Upload
            </Button>
            <Snackbar open={open} autoHideDuration={400} onClose={handleClose}>
              {/* <Alert onClose={handleClose} severity="success">
                Post Added !
              </Alert> */}
            </Snackbar>
            {/* <SelectCity className={classes.top}/> */}
        </div>
  )
}

export default AddPostjs