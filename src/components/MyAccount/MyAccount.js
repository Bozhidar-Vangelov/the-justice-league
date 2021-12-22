import { useEffect, useState } from 'react';

import myAccountStyles from './ myAccountStyles.js';
import background from '../../images/howlingAbyss.jpg';
import guildPostsStyles from '../GuildPosts/guildPostsStyles.js';
import postService from '../../services/postService.js';
import GuildPost from '../GuildPosts/GuildPost.js';
import { useAuthContext } from '../../contexts/AuthContext.js';

function MyAccount() {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    postService.getMyPosts(user._id).then((posts) => setPosts(posts));
  }, [user._id]);

  let dateObj = new Date(user._createdOn);

  let date =
    dateObj.getDate() +
    '/' +
    (dateObj.getMonth() + 1) +
    '/' +
    dateObj.getFullYear();

  return (
    <>
      <h1 className={myAccountStyles.header}>My Account</h1>
      <div className={myAccountStyles.main}>
        <div className={myAccountStyles.boxContainer}>
          <div className={myAccountStyles.backgroundImage}>
            <img src={background} alt='Background' />
          </div>
          <div className={myAccountStyles.profileImageContainer}>
            <img
              className={myAccountStyles.profileImage}
              src={user.avatar}
              alt='ProfileIcon'
            />
          </div>
          <div className={myAccountStyles.textContainer}>
            <h2 className={myAccountStyles.textHeading}>{user.summonerName}</h2>
            <p className={myAccountStyles.text}>Created On: {date}</p>
          </div>

          <button className={myAccountStyles.button} onClick={toggle}>
            {isOpen ? 'Hide My Posts' : 'Show My Posts...'}
          </button>
        </div>
        {isOpen ? (
          <section className={guildPostsStyles.section}>
            {posts.length > 0 ? (
              posts.map((x) => <GuildPost key={x._id} post={x} />)
            ) : (
              <p className={guildPostsStyles.noPosts}>No posts in database!</p>
            )}
          </section>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default MyAccount;
