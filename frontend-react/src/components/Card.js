import React from 'react';
import CardList from './CardList';

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}



// const Card = (props) => {

//   const profile = CardList.props;

//   return (
//     <div>
//       <img src={profile.avatar_url}></img>
//       <div>
//         <div>{profile.name}</div>
//         <div>{profile.company}</div>
//       </div>
//     </div>
//   );
// };

export default Card;