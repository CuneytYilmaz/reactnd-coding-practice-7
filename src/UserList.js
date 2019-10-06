import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends Component {
	state= {
    	showGamesPlayed: true
    };

	changeState = () => {
    	this.setState(currState => ({
        	showGamesPlayed: !currState.showGamesPlayed,
        }));
    }

	render(){
      	const { users } = this.props;
     	const gamesPlayedButton = (
          <div>
              <button
                  className="smallButton"
                  onClick={this.changeState}>
                  {this.state.showGamesPlayed ? 'Hide ' : 'Show '}
                  the Number of Games Played
              </button>  
          </div>
		);

    	return(
      		<div>
            	<h1>Users</h1>
          		{users && users.length > 0 ? gamesPlayedButton : ''}
				<ol>
					{users.map(user => (
                    	<User user={user} showGamesPlayed={this.state.showGamesPlayed}/>
                    ))}
				</ol>
            </div>
      	);
    }
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
};

export default UserList;