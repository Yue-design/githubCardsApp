import '../styles/globals.css';
import React, {useState} from 'react';

// function LikeButton(props) {
function LikeButton({ Component, pageProps }) {
  const [like, setLike] = useState({
    liked: false
  });

  return <Component {...pageProps} />
  // if (props.like) {
  //   return 'You liked comment number ' + props.commentID;
  // };
  // return 
  //   <React.Fragment>
  //     <button>Like</button>
  //   </React.Fragment>
}

export default LikeButton;
