import React from 'react';
import Card from './Card';

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

// const CardList = (props) => {

//   return (
//     <div>
//       {props.profiles.map(profile => <Card {...profile}></Card>)}
//     </div>
//   );
// };

export default CardList;