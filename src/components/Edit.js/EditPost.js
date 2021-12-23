import { useNavigate, useParams } from 'react-router-dom';

import editPostStyles from './editPostStyles.js';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import usePostState from '../../hooks/usePostState.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';

const gameTypes = [
  { value: 'ARAM', content: 'ARAM' },
  { value: 'Normal', content: 'Normal' },
  { value: 'Ranked', content: 'Ranked' },
];

function EditPost() {
  const { postId } = useParams();
  const [post] = usePostState(postId);
  const { user } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let editedData = Object.fromEntries(formData);

    await postService.updateOne(
      post._id,
      editedData,
      user.accessToken,
      user.summonerName
    );

    addNotification('Post successfully saved!', types.success);

    navigate(`/details/${post._id}`);
  };

  return (
    <>
      <h1 className={editPostStyles.header}>Edit Post</h1>
      <div className={editPostStyles.main}>
        <div className={editPostStyles.box}>
          <h1 className={editPostStyles.heading}>
            Hello there 👋, please edit the game details
          </h1>
          <form className='mt-6' method='POST' onSubmit={onSubmitHandler}>
            <label htmlFor='topic' className={editPostStyles.label}>
              Topic
            </label>
            <input
              type='text'
              name='topic'
              id='topic'
              defaultValue={post.topic}
              className={editPostStyles.input}
            />
            <label htmlFor='type' className={editPostStyles.label}>
              Game type
            </label>
            <select
              name='type'
              id='type'
              className={editPostStyles.input}
              defaultValue={post.type}
            >
              {gameTypes.map((x) => (
                <option key={x.value} defaultValue={x.value}>
                  {x.content}
                </option>
              ))}
            </select>
            <label htmlFor='description' className={editPostStyles.label}>
              Description
            </label>
            <textarea
              name='description'
              id='description'
              defaultValue={post.description}
              className={editPostStyles.input}
            ></textarea>
            <label htmlFor='image' className={editPostStyles.label}>
              Image URL
            </label>
            <input
              type='text'
              name='image'
              id='image'
              defaultValue={post.image}
              placeholder='Image'
              className={editPostStyles.input}
            />
            <label htmlFor='result' className={editPostStyles.label}>
              Game result
            </label>
            <select
              name='result'
              id='result'
              defaultValue={post.result}
              className={editPostStyles.input}
            >
              <option value='Victory'>Victory</option>
              <option value='Defeat'>Defeat</option>
            </select>
            <button type='submit' className={editPostStyles.submit}>
              Save Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditPost;
