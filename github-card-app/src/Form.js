import React, {useState} from 'react';

const Form = () => {

  const [username, setUsername] = useState({
    userName: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      userNameInput.current.value
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} placeholder="Github username" required/>
      <button>Add</button>
    </form>
  );
}

export default Form;