import React from 'react';
import {Box, Typography} from "@material-ui/core";
import Logo from '../../static/images/logo.png'

function Navigation() {
    return (
        <Box display='flex' flexDirection={'column'} justifyContent="center" alignItems="center" height={'100%'}>
            <Box flexGrow={1} width={'100%'} display='flex' justifyContent="center" alignItems={'center'} >
                <Box>
                    <Box pb={2}>
                        <Typography>Home</Typography>
                    </Box>
                    <Typography>Contact</Typography>
                </Box>
            </Box>
            <Box height={210} width={'100%'} p={2}>
                <img src={Logo} height={'100%'}/>
            </Box>
        </Box>
    )
}

export default Navigation;