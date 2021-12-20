import { useNavigate } from 'react-router-dom';

import createPostStyles from './createPostStyles.js';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';

function CreatePost() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let { topic, type, description, image, result } =
      Object.fromEntries(formData);

    postService
      .create(
        { topic, type, description, image, result, author: user.email },
        user.accessToken
      )
      .then(() => {
        navigate('/guild-posts');
      });
  };

  return (
    <div className={createPostStyles.main}>
      <div className={createPostStyles.box}>
        <h1 className={createPostStyles.heading}>
          Hello there 👋, please enter the game details
        </h1>
        <form className='mt-6' method='POST' onSubmit={onSubmitHandler}>
          <label htmlFor='topic' className={createPostStyles.label}>
            Topic
          </label>
          <input
            type='text'
            name='topic'
            id='topic'
            placeholder='Topic'
            className={createPostStyles.input}
          />
          <label htmlFor='type' className={createPostStyles.label}>
            Game type
          </label>
          <select name='type' id='type' className={createPostStyles.input}>
            <option defaultValue>-- Select an option --</option>
            <option value='ARAM'>ARAM</option>
            <option value='Normal'>Normal</option>
            <option value='Ranked'>Ranked</option>
          </select>
          <label htmlFor='description' className={createPostStyles.label}>
            Description
          </label>
          <textarea
            name='description'
            id='description'
            className={createPostStyles.input}
          ></textarea>
          <label htmlFor='image' className={createPostStyles.label}>
            Image URL
          </label>
          <input
            type='text'
            name='image'
            id='image'
            placeholder='Image'
            className={createPostStyles.input}
          />
          <label htmlFor='result' className={createPostStyles.label}>
            Game result
          </label>
          <div className={createPostStyles.div}>
            <div>
              <label htmlFor='win'>Win</label>
              <input
                type='radio'
                value='Win'
                name='result'
                id='win'
                className='mx-1'
              />
            </div>
            <div>
              <label htmlFor='loss'>Loss</label>
              <input
                type='radio'
                value='Loss'
                name='result'
                id='loss'
                className='mx-1'
              />
            </div>
          </div>
          <button type='submit' className={createPostStyles.submit}>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
