import React from 'react';
import {Box, Typography} from "@material-ui/core";
import { useHistory} from "react-router-dom";

import Logo from '../../static/images/logo.png'

function Navigation() {
    const history = useHistory();
    return (
        <Box display='flex' flexDirection={'column'} justifyContent="center" alignItems="center" height={'100%'}>
            <Box flexGrow={1} width={'100%'} display='flex' justifyContent="center" alignItems={'center'} >
                <Box>
                    <Box pb={2}>
                        <Typography onClick={() => history.push('/')}>Home</Typography>
                    </Box>
                    <Typography onClick={() => history.push('/contact')}>Contact</Typography>
                </Box>
            </Box>
            <Box height={210} width={'100%'} p={2}>
                <img src={Logo} height={'100%'}/>
            </Box>
        </Box>
    )
}

export default Navigation;