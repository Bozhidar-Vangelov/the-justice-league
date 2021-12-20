import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import guildPostsStyles from './guildPostsStyles.js';
import howlingAbyss from '../../images/howlingAbyss.jpg';
import wildRift from '../../images/wildRift.jpg';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import ConfirmModal from '../Common/ConfirmModal.js';

function GuildPostDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundStyle, setbackgroundStyle] = useState({});
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { postId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    postService
      .getOne(postId)
      .then((result) => {
        setPost(result);
      })
      .catch((err) => console.log(err));
  }, [postId]);

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
                <div className={guildPostsStyles.buttons}>
                  <button className={guildPostsStyles.upVote}>UpVote</button>
                  <p className={guildPostsStyles.rating}>Rating: 100</p>
                  <button className={guildPostsStyles.downVote}>
                    DownVote
                  </button>
                </div>
                <div className='flex'>
                  <button className={guildPostsStyles.bottomButton}>
                    Edit
                  </button>
                  <button
                    className={guildPostsStyles.bottomButton}
                    onClick={deleteClickHandler}
                  >
                    Delete
                  </button>
                </div>
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
