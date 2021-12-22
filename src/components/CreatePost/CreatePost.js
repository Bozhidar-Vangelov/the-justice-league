import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import createPostStyles from './createPostStyles.js';
import postService from '../../services/postService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import validationSchema from '../../helpers/validationSchema.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';

function CreatePost() {
  const { user } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema.createPost) });

  const onSubmitHandler = ({ topic, type, description, image, result }) => {
    postService
      .create(
        { topic, type, description, image, result, author: user.summonerName },
        user.accessToken
      )
      .then(() => {
        addNotification('Post successfully created', types.success);
        navigate('/guild-posts');
      });
  };

  return (
    <div className={createPostStyles.main}>
      <div className={createPostStyles.box}>
        <h1 className={createPostStyles.heading}>
          Hello there 👋, please enter the game details
        </h1>
        <form
          className='mt-6'
          method='POST'
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <label htmlFor='topic' className={createPostStyles.label}>
            Topic
          </label>
          <input
            type='text'
            name='topic'
            id='topic'
            placeholder='Topic'
            className={createPostStyles.input}
            {...register('topic')}
          />
          <p className={createPostStyles.error}>{errors.topic?.message}</p>
          <label htmlFor='type' className={createPostStyles.label}>
            Game type
          </label>
          <select
            name='type'
            id='type'
            defaultValue='select'
            className={createPostStyles.input}
            {...register('type')}
          >
            <option value='select' disabled>
              -- Select an option --
            </option>
            <option value='ARAM'>ARAM</option>
            <option value='Normal'>Normal</option>
            <option value='Ranked'>Ranked</option>
          </select>
          <p className={createPostStyles.error}>{errors.type?.message}</p>
          <label htmlFor='description' className={createPostStyles.label}>
            Description
          </label>
          <textarea
            name='description'
            id='description'
            className={createPostStyles.input}
            {...register('description')}
          ></textarea>
          <p className={createPostStyles.error}>
            {errors.description?.message}
          </p>
          <label htmlFor='image' className={createPostStyles.label}>
            Image URL
          </label>
          <input
            type='text'
            name='image'
            id='image'
            placeholder='Image'
            className={createPostStyles.input}
            {...register('image')}
          />
          <p className={createPostStyles.error}>{errors.image?.message}</p>
          <label htmlFor='result' className={createPostStyles.label}>
            Game result
          </label>
          <select
            name='result'
            id='result'
            defaultValue='select'
            className={createPostStyles.input}
            {...register('result')}
          >
            <option value='select' disabled>
              -- Select an option --
            </option>
            <option value='Victory'>Victory</option>
            <option value='Defeat'>Defeat</option>
          </select>
          <p className={createPostStyles.error}>{errors.result?.message}</p>
          <button type='submit' className={createPostStyles.submit}>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
