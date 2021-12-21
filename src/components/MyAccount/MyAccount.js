import { useEffect, useState } from 'react';

import myAccountStyles from './ myAccountStyles.js';
import profileIcon from '../../images/6.png';
import background from '../../images/howlingAbyss.jpg';
import guildPostsStyles from '../GuildPosts/guildPostsStyles.js';
import postService from '../../services/postService.js';
import GuildPost from '../GuildPosts/GuildPost.js';
import { useAuthContext } from '../../contexts/AuthContext.js';

function MyAccount() {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getMyPosts(user._id).then((posts) => setPosts(posts));
  }, [user._id]);

  return (
    <div className={myAccountStyles.main}>
      <div className={myAccountStyles.boxContainer}>
        <div className={myAccountStyles.backgroundImage}>
          <img src={background} alt='Background' />
        </div>
        <div className={myAccountStyles.profileImageContainer}>
          <img
            className={myAccountStyles.profileImage}
            src={profileIcon}
            alt='ProfileIcon'
          />
        </div>
        <div className={myAccountStyles.textContainer}>
          <h2 className={myAccountStyles.textHeading}>Pesho</h2>
          <p className={myAccountStyles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            corrupti harum delectus est, animi id! Libero voluptas beatae
            expedita itaque at, perferendis nemo delectus nostrum iure, natus ea
            eius consequuntur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ad sed, placeat porro fuga doloribus non ut
            consequuntur maiores eos quasi nemo id incidunt. Inventore, aliquam
            et ipsa sed facilis labore!
          </p>
        </div>
        <div className={myAccountStyles.ratingContainer}>
          <p>
            <span className='font-semibold'>Rating: </span> 25
          </p>
        </div>
        <button className={myAccountStyles.button}>Show My Posts...</button>
      </div>
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

export default MyAccount;
