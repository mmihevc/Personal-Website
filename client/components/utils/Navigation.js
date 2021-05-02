import React from 'react';
import {Box} from "@material-ui/core";
import Logo from '../../static/images/logo.png'

function Navigation() {
    return (
        <>
            <Box>

            </Box>
            <Box style={{bottom: 0, position: 'absolute'}}>
                <img src={Logo}/>
            </Box>
        </>
    )
}

export default Navigation;