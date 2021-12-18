import { useState } from 'react';
import { useEffect } from 'react';

import guildPostsStyles from './guildPostsStyles.js';
import GuildPost from './GuildPost.js';
import postService from '../../services/postService.js';

function GuildPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService
      .getAll()
      .then((result) => {
        console.log(result);
        setPosts(result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);

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
