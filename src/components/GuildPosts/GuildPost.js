import { useState } from 'react';

import guildPostsStyles from './guildPostsStyles.js';
import ARAM from '../../images/ARAM.jpg';
import wildRift from '../../images/wildRift.jpg';

let backgroundStyle = {};

function GuildPost({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (post.type === 'ARAM') {
    backgroundStyle = {
      backgroundImage: `url(${ARAM})`,
    };
  } else if (post.type === 'Normal' || post.type === 'Ranked') {
    backgroundStyle = {
      backgroundImage: `url(${wildRift})`,
    };
  }

  return (
    <article className={guildPostsStyles.boxContainer}>
      <div className={guildPostsStyles.infoBox}>
        <img
          className={guildPostsStyles.image}
          src={post.image}
          alt='Screenshot'
        />
      </div>
      <div className={guildPostsStyles.box} style={backgroundStyle}>
        <div className={guildPostsStyles.info}>
          <p>Author: Pesho</p>
          <br />
          <p>Game type: {post.type}</p>
          <br />
          <p>Game result: {post.result}</p>
          <br />
          <div className={guildPostsStyles.buttons}>
            <button className={guildPostsStyles.upVote}>UpVote</button>
            <p className={guildPostsStyles.rating}>Rating: 100</p>
            <button className={guildPostsStyles.downVote}>DownVote</button>
          </div>
          <div className='text-center'>
            <button
              className={guildPostsStyles.showDescription}
              onClick={toggle}
            >
              Show description...
            </button>
          </div>
          {isOpen ? <p className='break-words'>{post.description}</p> : ''}
        </div>
      </div>
    </article>
  );
}

export default GuildPost;
