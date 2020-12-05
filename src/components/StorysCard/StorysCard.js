import React from 'react'
import StoryCard from './StoryCard/StoryCard.js'
import { Grid, Grow, Typography } from '@material-ui/core';
function StorysCard({story}) {
    return (
        <Grow in>
            <Grid container alignItems="strech" spacing={3}>
            {story.map((s , i ) => {
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display : 'flex' }}>
                </Grid>
            })}
            </Grid>
        </Grow>
    )
}

export default StorysCard
