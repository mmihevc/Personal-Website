import React from 'react';
import {Box, IconButton, Typography} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Profile() {
    return (
        <>
            <Box display='flex' flexDirection={'column'} justifyContent="center" height={'100%'} style={{paddingLeft: '50px', position: 'relative'}}>
                <Box pb={5}>
                    <Box pb={5}>
                        <Typography variant={"h2"}>Maddie Mihevc</Typography>
                    </Box>
                    <Box width={'75%'}>
                        <Typography>
                            she is pretty cool and you should hire her. thank you for coming
                            to my ted talk. here are some more random sentences to fill up space
                        </Typography>
                    </Box>
                </Box>
                <Box style={{bottom: 40, position:'absolute'}} >
                    <Typography>maddie@mihevc.com</Typography>
                    <Typography>(303) 886 2991</Typography>
                    <Box display='flex' flexDirection={'row'} >
                        <IconButton href={'https://www.linkedin.com/in/maddie-mihevc/'} target="_blank">
                            <LinkedInIcon style={{color: 'black'}}/>
                        </IconButton>
                        <IconButton href={'https://github.com/mmihevc'} target="_blank">
                            <GitHubIcon style={{color: 'black'}}/>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Profile;