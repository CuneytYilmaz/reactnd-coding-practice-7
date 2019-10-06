import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
	state= {
      	user: {
          firstname: '',
          lastname: '',
          username: '',
        },
      	userExists: false,
    };

	handleSubmit = (event) => {
      	event.preventDefault();
    	const userExists = this.checkIsExists(this.state.user.username);
      	if (!userExists) {
          	this.props.onAddUser(this.state.user);
        } else {
        	this.setState(() => ({
            	userExists,
            }));
        }
    }

	checkIsExists = (username) => {
    	const users = this.props.users;
      
      	for (let user of users){
        	if(user.username === username) {
            	return true;
            }
        }
      	return false;
    }

	handleInputChange = (event) => {
    	const {name, value} = event.target;
      	this.setState(currState => ({
        	...currState,
          	user: {
              	...currState.user,
          		[name]: value, 
            }
        }));
    }

	inputIsEmpty = () => {
      	const {firstname, lastname, username} = this.state;
    	return firstname === '' && lastname === '' && username === '';
    }

  	render(){
    	return(
        	<div>
            	<h1>New User </h1> 
             	<form onSubmit={this.handleSubmit}>
             		<input 
      					type='text'
      					placeholder='Enter First Name'
      					name='firstname'
      					value={this.state.firstname}
						onChange={this.handleInputChange}
      				/>
					<input 
      					type='text'
      					placeholder='Enter Last Name'
						name='lastname'
      					value={this.state.lastname}
						onChange={this.handleInputChange}
      				/>
					<input 
      					type='text'
      					placeholder='Enter User Name'
						name='username'
      					value={this.state.username}
						onChange={this.handleInputChange}
      				/>
					<button disabled={this.inputIsEmpty()}>Add</button>
             	</form>
				{this.state.userExists ? (
                 	<p className='error'>You cannot add a user that already exists.</p>
                 ) : ('')}
            </div>
        )
    }
}

AddUser.propTypes = {
	users: PropTypes.array.isRequired,
  	onAddUser: PropTypes.func.isRequired,
}

export default AddUser;