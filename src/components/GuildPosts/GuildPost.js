import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import guildPostsStyles from './guildPostsStyles.js';
import howlingAbyss from '../../images/howlingAbyss.jpg';
import wildRift from '../../images/wildRift.jpg';

function GuildPost({ post }) {
  const [backgroundStyle, setbackgroundStyle] = useState({});

  useEffect(() => {
    if (post.type === 'ARAM') {
      setbackgroundStyle({
        backgroundImage: `url(${howlingAbyss})`,
      });
    } else {
      setbackgroundStyle({
        backgroundImage: `url(${wildRift})`,
      });
    }
  }, [post.type]);

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
          <p>Author: {post.author}</p>
          <br />
          <p>Topic: {post.topic}</p>
          <br />
          <Link
            className={guildPostsStyles.bottomButton}
            to={`/details/${post._id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default GuildPost;
