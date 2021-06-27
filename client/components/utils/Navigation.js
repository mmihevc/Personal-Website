import React, { useState } from "react";
import { Box, Button, Modal, Typography, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./Constants";
import Logo from "../../static/images/logo.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import Resume from "../../static/maddie-resume.pdf";

function Navigation() {
  const history = useHistory();
  const [resumePopup, setResumePopup] = useState(false);
  const classes = useStyles();


  function ResumeModal() {
    return (
      <Modal open={resumePopup} className={classes.modal} onClose={() => setResumePopup(!resumePopup)}>
        <div className={classes.paper}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography align={'center'}>Would you like to download a copy of Maddie's resume?</Typography>
            <IconButton style={{backgroundColor: '#2A8FC5', borderRadius: 4, color: 'white'}} >
              <GetAppIcon />
            </IconButton>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
           
          </Box>
        </div>
      </Modal>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      height={"100%"}
    >
      <Box flexGrow={1} width={"100%"} display="flex" justifyContent="center" alignItems={"center"}>
        <Box>
          <Box pb={2}>
            <Button onClick={() => history.push("/")}>Home</Button>
          </Box>
          <Button onClick={() => history.push("/contact")}>Contact</Button>
          <Box pt={2}>
            <Button onClick={() => setResumePopup(!resumePopup)}>Resume</Button>
            <ResumeModal />
          </Box>
        </Box>
      </Box>
      <Box height={210} width={"100%"} p={2}>
        <img src={Logo} height={"100%"} />
      </Box>
    </Box>
  );
}

export default Navigation;
