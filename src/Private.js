import React,{useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import SkeletonCard from './SkeletonCard'
import Grid from '@material-ui/core/Grid';
import StoryCard from './StoryCard';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
      },
      media: {
        height: 190,
      },
      margin : {
        marginBottom : '30px'
      },
      root : {
          display : 'flex',
          flexDirection : 'row',
          justifyContent : 'space-between'
      }
  }));
function Private({id}) {
    const classes = useStyles();
    const [story, setStory] = useState([])
    useEffect(()=> {
        const fetchStories = async () =>{
          const result = await axios(`http://localhost:5000/stories/getstories/${id}`, {withCredentials:true})
            setStory(result.data)
            console.log(result.data)
        }
        fetchStories()
      }, [])
    return (
        <div>
           <Grid container justify="center" justify={"space-evenly"}>
                {story.map(item => (
                    <Grid item  justify="center" className={classes.margin}>
                        <StoryCard stories={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Private
