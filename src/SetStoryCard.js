import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import SkeletonCard from './SkeletonCard'
import Grid from '@material-ui/core/Grid';
import StoryCard from './StoryCard';

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
function SetStoryCard({stories }) {
    const classes = useStyles();
    // return loading ? (
        // <Grid container justify="center" spacing={5}>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        //     <Grid item  justify="center">
        //         <SkeletonCard/>
        //     </Grid>
        // </Grid>
        // <h1> hi </h1>
    return (
        <div >
            <Grid container justify="center" justify={"space-evenly"}>
                {stories.map(item => (
                    <Grid item  justify="center" className={classes.margin}>
                        <StoryCard stories={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default SetStoryCard