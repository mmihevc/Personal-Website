import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {SnackbarProvider, useSnackbar} from "notistack";

import Home from "./Home";
import Contact from "./Contact";

const Router = (props) => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home {...props}/>
			</Route>
			<Route path='/contact'>
				<Contact/>
			</Route>
		</Switch>
	)
}

const LoadApp = () => {
	const {enqueueSnackbar} = useSnackbar();
	const produceSnackBar = (message, variant = "error") => enqueueSnackbar(message, {variant: variant});

	return (
		<BrowserRouter>
			<Router produceSnackBar={produceSnackBar}/>
		</BrowserRouter>
	);
}

const App = () => {
	const darkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: darkMode ? "dark" : "light"
				}
			}),
		[darkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider maxSnack={3} preventDuplicate>
				<LoadApp/>
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
