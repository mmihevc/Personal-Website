import React from 'react';
import {Avatar, Box, Typography} from "@material-ui/core";
import Logo from '../../static/images/logo.png'

function Navigation() {
    return (
        <Box style={{bottom: 0, position: 'absolute'}}>
            <img src={Logo}/>
        </Box>
    )
}

export default Navigation;