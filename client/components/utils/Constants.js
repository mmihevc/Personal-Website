const {makeStyles} = require("@material-ui/core");
const drawerWidth = 240;
export const scale = {x: 2, y: 3.5};
const buttonDims = {width: 185, height: 65};
import {green, red} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));
