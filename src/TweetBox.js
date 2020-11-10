import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Rafeh Qazi',
      username: 'cleverqazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
