import React from 'react';

const Card = (props) => {

  return (
    <div className="github-profile">
      <img src="#" />
      <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
        <div className="name" style={{ fontSize: '125%'}}>{props.name}</div>
        <div className="company" style={ {color: Math.random() < 0.5 ? 'green' : 'red'}}>{props.company}</div>
      </div>
    </div>
  );
};

export default Card;