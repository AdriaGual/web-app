/**
 * @file App
 * @version 0.0.1
 * @module
 */

"use strict";

// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect } from 'react-router-dom';
// Components imports
import Header from './Header.js';
import Main from './Main.js';
import DownBar from './Components/down_bar.js';

/**
 * App component. It handles all the application.
 * @extends React.Component
 */
class App extends React.Component {
	/**
	 * Creates the App component.
	 * @param {object} props - React.Component props
	 */
	constructor(props){
		super(props);
		this.state = {
			logged: false,
			currentLanguage: 0,
			username: "",
		};
		
		var that = this;
		
		//PHP check
		$.ajax({
			type: 'GET',
			url: 'php/checksession.php',
			success: function(response) {
				if (response == "NO_SESSION"){
					
				}
				else{
					that.setState({ logged: true ,username: response});
				}
			}
		});
	}

	/**
	 * Access or change the state of the app.
	 * @param {object} obj - State variable name to be get || State object to be set.
	 */
	appState = (obj) => {
		if (typeof obj == "string") { return this.state[obj]; }
		else { this.setState(obj); }
	};

	/**
	 * Renders the app.
	 */
	render(){
		return (
			<div>
				<Header appState={this.appState} />
				<Main appState={this.appState} />
				<DownBar appState={this.appState} />
			</div>
		);
	}
}

// Render the app into the content
ReactDOM.render((<Router><App /></Router>), document.getElementById('content'));