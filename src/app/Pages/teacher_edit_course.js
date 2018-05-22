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
class TeacherCourses extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		searchString: '',
		searchFocusIndex: 0,
		searchFoundCount: null,
		treeData: [
				{ title: <Link to="/user_course" className="black">Course 1</Link>,
					expanded:true, 
					children: [{ title: 'Topic 1', 
					children: [{ title: <Link to="/user_theory" className="blue">Theory</Link> },{ title: <Link to="/user_exercice" className="red">Exercices</Link> }] }] 
			
				},
				{ title: 'Course 2',
					expanded:true, 
					children: [{ title: 'Topic 1', 
					children: [{ title: <Link to="/user_theory" className="blue">Theory</Link> },{ title: <Link to="/user_exercice" className="red">Exercices</Link> }] },
					{ title: 'Topic 2', 
					children: [{ title: <Link to="/user_theory" className="blue">Theory</Link> },{ title: <Link to="/user_exercice" className="red">Exercices</Link> }] },
					{ title: 'Topic 3', 
					children: [{ title: <Link to="/user_theory" className="blue">Theory</Link> },{ title: <Link to="/user_exercice" className="red">Exercices</Link> }] }
					]
				}
			],
				
		};
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
			 <div className="left_30">	
				<TextField
					id="newtitle"
					label="Enter Course Title"
					className="text_field "
					style = {{width: 1000}}
					onChange={(event, newValue) =>
						this.setState({
							newtitle: newValue
						})
					}
				/>
				</div>
				<hr/>
				<Grid container>
					<Grid item xs={3}  className="margin3"> 
						<label htmlFor="find-box">
							<TextField
								id="find-box"
								type="text"
								value={searchString}
								onChange={event => this.setState({ searchString: event.target.value })}
								label="Search"
							/>
						</label>
					</Grid>
					<Grid item xs={3}> 
						<Button className="btn btn-2 down_30 white">Create New Course</Button>
					</Grid>
					<Grid item xs={12}>
						<div style={{ height: 1500}}>
						<SortableTree
						  treeData={this.state.treeData}
						  onChange={treeData => this.setState({ treeData })}
						  searchQuery={searchString}
						/>
						</div>
					</Grid>
				</Grid>
				
			</div>
		
		);
	}
}


TeacherCourses = withRouter(TeacherCourses);

export default TeacherCourses;