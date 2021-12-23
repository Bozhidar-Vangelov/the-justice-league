import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import guildPostsStyles from './guildPostsStyles.js';
import howlingAbyss from '../../images/howlingAbyss.jpg';
import wildRift from '../../images/wildRift.jpg';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import ConfirmModal from '../Common/ConfirmModal/ConfirmModal.js';
import usePostState from '../../hooks/usePostState.js';
import voteService from '../../services/voteService.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';

function GuildPostDetails() {
  const { postId } = useParams();
  const { user } = useAuthContext();
  const { addNotification } = useNotificationContext();
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

  useEffect(() => {
    voteService
      .getUpVotes(postId)
      .then((res) => {
        setPost((state) => ({ ...state, upVotes: res }));
      })
      .catch((err) => console.log(err));
  }, [postId, setPost]);

  const deleteHandler = (e) => {
    e.preventDefault();
    postService.deleteOne(postId, user.accessToken).finally(() => {
      setShowModal(false);
      addNotification('Post successfully deleted', types.success);
      navigate('/guild-posts');
    });
  };

  const upVoteHandler = () => {
    if (post.upVotes?.includes(user._id)) {
      addNotification('You have already voted', types.warning);
      return;
    }

    voteService.upVote(user._id, post._id, user.accessToken).then(() => {
      console.log(post);
      setPost((state) => ({ ...state, upVotes: [...state.upVotes, user._id] }));
    });
  };

  const ownerButtons = (
    <div className='flex'>
      <Link className={guildPostsStyles.bottomButton} to={`/edit/${postId}`}>
        Edit
      </Link>
      <button
        className={guildPostsStyles.bottomButton}
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
    </div>
  );

  const userButtons = (
    <div className={guildPostsStyles.buttons}>
      <button className={guildPostsStyles.upVote} onClick={upVoteHandler}>
        UpVote
      </button>
      <p className={guildPostsStyles.rating}>
        Rating: {post.upVotes?.length || 0}
      </p>
    </div>
  );

  const noPost = (
    <div className={guildPostsStyles.main}>
      <section className={guildPostsStyles.section}>
        <p className={guildPostsStyles.noPosts}>Such post does not exist!</p>
      </section>
    </div>
  );

  return post.code === 404 ? (
    noPost
  ) : (
    <>
      <ConfirmModal
        show={showModal}
        onDelete={deleteHandler}
        onCancel={() => setShowModal(false)}
      />
      <h1 className={guildPostsStyles.header}>Post</h1>
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
