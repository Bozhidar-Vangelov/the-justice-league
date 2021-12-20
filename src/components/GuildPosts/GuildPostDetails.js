import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import guildPostsStyles from './guildPostsStyles.js';
import howlingAbyss from '../../images/howlingAbyss.jpg';
import wildRift from '../../images/wildRift.jpg';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import ConfirmModal from '../Common/ConfirmModal.js';
import usePostState from '../../hooks/usePostState.js';

function GuildPostDetails() {
  const { postId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [backgroundStyle, setbackgroundStyle] = useState({});
  const [post, setPost] = usePostState(postId);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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

  const deleteHandler = (e) => {
    e.preventDefault();
    postService
      .deleteOne(postId, user.accessToken)
      .finally(() => setShowModal(false));

    navigate('guild-posts');
  };

  const deleteClickHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const cancelClickHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  // const editClickHandler = (e) => {
  //   e.preventDefault();
  //   console.log('click');
  // };

  const ownerButtons = (
    <div className='flex'>
      <Link
        className={guildPostsStyles.bottomButton}
        to={`/edit/${postId}`}
        // onClick={editClickHandler}
      >
        Edit
      </Link>
      <button
        className={guildPostsStyles.bottomButton}
        onClick={deleteClickHandler}
      >
        Delete
      </button>
    </div>
  );

  const userButtons = (
    <div className={guildPostsStyles.buttons}>
      <button className={guildPostsStyles.upVote}>UpVote</button>
      <p className={guildPostsStyles.rating}>Rating: 100</p>
      <button className={guildPostsStyles.downVote}>DownVote</button>
    </div>
  );

  return (
    <>
      <ConfirmModal
        show={showModal}
        onDelete={deleteHandler}
        onCancel={cancelClickHandler}
      />
      <div className={guildPostsStyles.main}>
        <section className={guildPostsStyles.section}>
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
                <p>Game type: {post.type}</p>
                <br />
                <p>Game result: {post.result}</p>
                <br />

                {user._id &&
                  (user._id === post._ownerId ? ownerButtons : userButtons)}
                <button
                  className={guildPostsStyles.bottomButton}
                  onClick={toggle}
                >
                  {isOpen ? 'Hide description' : 'Show description...'}
                </button>
                {isOpen ? (
                  <p className='break-words'>{post.description}</p>
                ) : (
                  ''
                )}
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default GuildPostDetails;
