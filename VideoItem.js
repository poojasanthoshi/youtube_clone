import React from 'react';
import { Grid,Paper, Typography} from '@material-ui/core'
const VideoItem = ({video,onVideoSelect }) => {
    return(
        <Grid item xs={12}>
            <paper style={{display: 'flex',alignItems: 'center', cursor:'pointer'}} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight:"20px"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>

            </paper>
        </Grid>
    )
}

export default VideoItem;