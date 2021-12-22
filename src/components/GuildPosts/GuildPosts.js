import { useEffect, useState } from 'react';

import guildPostsStyles from './guildPostsStyles.js';
import GuildPost from './GuildPost.js';
import postService from '../../services/postService.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';

function GuildPosts() {
  const [posts, setPosts] = useState([]);
  const { addNotification } = useNotificationContext();

  useEffect(() => {
    postService
      .getAll()
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => {
        addNotification(err.message, types.danger);
      });
  }, [addNotification]);

  return (
    <div className={guildPostsStyles.main}>
      <section className={guildPostsStyles.section}>
        {posts.length > 0 ? (
          posts.map((x) => <GuildPost key={x._id} post={x} />)
        ) : (
          <p className={guildPostsStyles.noPosts}>No posts in database!</p>
        )}
      </section>
    </div>
  );
}

export default GuildPosts;
