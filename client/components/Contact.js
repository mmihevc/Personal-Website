import React from 'react'
import {Box, Paper, Typography} from "@material-ui/core";
import Navigation from "./utils/Navigation";

function Contact() {
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

                   </Box>
                </Box>
             </Paper>
          </Box>
       </>
   )
}

export default Contact;