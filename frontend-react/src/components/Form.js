import React, { useState } from "react";
import axios from 'axios';

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

// const Form = props => {
//   const [username, setUsername] = useState('');

//   const handleSubmit = async function(event) {
//     event.preventDefault();
//     const response = await axios.get(`https://api.github.com/users/${username}`);
//     props.onSubmit(response.data);
//     setUsername({ username: ''});
//   };

//   const handleChange = (event) => {
//     setUsername({ usename: event.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         required
//         type="text"
//         value={username || ''}
//         onChange={handleChange}
//         placeholder="Github Username"
//       ></input>
//       <button>Add Card</button>
//     </form>
//   );
// };

export default Form;
