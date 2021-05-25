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
                            Maddie recently graduated a semester early from Colorado State University with a degree in
                            Applied Computing Technology. She is currently pursuing her Masters in Computer Science at CSU
                            while also being fully funded as a Graduate Research Assistant researching computer science
                            education. She is extremely passionate about finding ways to increase the retention of minorities,
                            especially women, in the field.
                        </Typography>
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
            </Box>
        </>
    )
}

export default Profile;