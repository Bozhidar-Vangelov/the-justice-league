import { useState } from 'react';
import { useEffect } from 'react';

import guildPostsStyles from './guildPostsStyles.js';
import screenshot from '../../images/5.jpg';
import background from '../../images/7.jpg';
import GuildPost from './GuildPost.js';
import postService from '../../services/postService.js';

function GuildPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((result) => {
      setPosts(result);
    });
  }, []);

  return (
    <div className={guildPostsStyles.main}>
      <section className='container mx-auto flex flex-wrap, justify-center'>
        {posts.map((x) => (
          <GuildPost key={x._id} post={x} />
        ))}
      </section>
    </div>
  );
}

export default GuildPosts;
