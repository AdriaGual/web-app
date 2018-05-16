"use strict";

// React imports
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Particles from "react-particles-js";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import SortableTree from 'react-sortable-tree';

/** 
 * Register Page
 * @extends React.Component
 */
class UserExercice extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	appState = this.props.appState;

	
	/**
	 * Renders the register page.
	 */
	render(){
		const {
            treeData,
            searchString,
            searchFoundCount,
        } = this.state;
		return (
			<div>
				<div className="left_30 down_20 orange size_30">Course 1: Topic 1</div>
				<hr/>
				<Grid container>
					<Grid item xs={5}  className="padding2"> 
						<p className="left_30 down_20 black size_20">Data Cleansing Exercice</p>
						<hr/>
						<Card className="course_description_form margin2 padding2">
								<p className="margin1">Description of the exercice</p>
						</Card>
						<p className="left_30 down_20 black size_20">Question</p>
						<Card className="course_description_form margin2 padding2">
								<p className="margin1">Help Text.</p>
						</Card>
					</Grid>
					<Grid item xs={5}  className="padding2"> 
					
					</Grid>
				</Grid>

			</div>
		
		);
	}
}


UserExercice = withRouter(UserExercice);

export default UserExercice;