import { useNavigate, useParams } from 'react-router-dom';

import editPostStyles from './editPostStyles.js';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import usePostState from '../../hooks/usePostState.js';

const types = [
  { value: 'ARAM', content: 'ARAM' },
  { value: 'Normal', content: 'Normal' },
  { value: 'Ranked', content: 'Ranked' },
];

function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = usePostState(postId);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let editedData = Object.fromEntries(formData);

    postService
      .updateOne(post._id, editedData, user.accessToken, user.email)
      .then((res) => console.log(res))
      .then(navigate(`/details/${post._id}`));
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setPost({ ...post, type: e.target.value });
  };

  return (
    <div className={editPostStyles.main}>
      <h1>EDIT</h1>
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
            value={post.type}
            onChange={onChangeHandler}
          >
            {types.map((x) => (
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
          <div className={editPostStyles.div}>
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
          <button type='submit' className={editPostStyles.submit}>
            Edit Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
