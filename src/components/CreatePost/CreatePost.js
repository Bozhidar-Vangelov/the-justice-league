import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../contexts/AuthContext.js';

import createPostStyles from './createPostStyles.js';
import postService from '../../services/postService.js';

function CreatePost() {
  const { user } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let { type, description, file, result } = Object.fromEntries(formData);

    postService.create({ type, description, file, result }, user.accessToken);
  };
  return (
    <div className={createPostStyles.main}>
      <div className={createPostStyles.box}>
        <h1 className={createPostStyles.heading}>
          Hello there 👋, please enter the game details
        </h1>
        <form className='mt-6' method='POST' onSubmit={onSubmitHandler}>
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
            Image
          </label>
          <input
            type='file'
            name='file'
            id='file'
            accept='image/png, image/gif, image/jpeg'
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
                value='win'
                name='result'
                id='win'
                className='mx-1'
              />
            </div>
            <div>
              <label htmlFor='loss'>Loss</label>
              <input
                type='radio'
                value='loss'
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
