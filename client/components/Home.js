import React from 'react';
import {Box, Paper} from "@material-ui/core";

import Navigation from "./utils/Navigation";
import '../static/styles/global.scss'

function Home(props) {
    return (
        <>
            <div className={"background-image"} />
            <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Paper elevation={8} style={{height: '80vh', position: "relative", width: '150vh'}}>
                    <Box display='flex' height={'100%'}>
                        <Box width='200px' height={'100%'} style={{position: 'relative'}}>
                            <Navigation/>
                        </Box>
                        <Box flexGrow={1}>

                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}

export default Home;