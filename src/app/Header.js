/**
 * @file Header
 * @version 0.0.1
 * @module
 */

"use strict";

// React imports
import React from "react";
import { Link } from 'react-router-dom';
// Material-UI imports
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

/**
 * Header of the app.
 * @extends React.Component
 */
export default class Header extends React.Component {
	/**
	 * Creates the Header component of the app.
	 * @param {object} props - React.Component props
	 */
	constructor(props){
		super(props);
		this.state = {};
	}

	/**
	 * Renders the Header app.
	 */
	render(){
		
		return (
			<AppBar color="inherit">
				<Toolbar className="toolbar">
					<Grid container spacing={24}>
						<Grid item xs={4}>
						</Grid>
						<Grid item xs={2}>
							<Grid container>
								<Grid item xs={6}>
									<TextField
									  id="name"
									  label="Name"
									  margin="normal"
									/>
								</Grid>
								<Grid item xs={6}>
									<Link to='/test'><button>test</button></Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={2}>
							<Grid container>
								<Grid item xs={12}>
									<TextField
									  id="password-input"
									  label="Password"
									  type="password"
									  autoComplete="current-password"
									  margin="normal"
									/>
								</Grid>
								<Grid item xs={12}>
									<p>Forgot Password?</p>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<Link to='/test2'><button>test2</button></Link>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}