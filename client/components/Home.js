import React from 'react';
import {Box, Paper} from "@material-ui/core";
import Navigation from "./utils/Navigation";
import '../static/styles/global.scss'
import Profile from "./utils/Profile";
import ProfileImage from '../static/images/profile.jpeg'

function Home() {
    return (
        <>
            <div className={"background-image"} />
            <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Paper elevation={8} style={{height: '80vh', position: "relative", width: '150vh'}}>
                    <Box display='flex' height={'100%'}>
                        <Box width='200px' height={'100%'}>
                            <Navigation/>
                        </Box>
                        <Box flexGrow={1}>
                            <Profile/>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pr={5}>
                            <img src={ProfileImage} width={300} />
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}

export default Home;