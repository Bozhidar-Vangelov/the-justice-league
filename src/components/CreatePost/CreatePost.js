import createPostStyles from './createPostStyles.js';

function CreatePost() {
  return (
    <div className={createPostStyles.main}>
      <div className={createPostStyles.box}>
        <h1 className={createPostStyles.heading}>
          Hello there 👋, please enter the game details
        </h1>
        <form className='mt-6'>
          <label htmlFor='summonerName' className={createPostStyles.label}>
            Game type
          </label>
          <select name='type' id='type' className={createPostStyles.input}>
            <option defaultValue>-- Select an option --</option>
            <option value='aram'>ARAM</option>
            <option value='normal'>Normal</option>
            <option value='ranked'>Ranked</option>
          </select>
          <label htmlFor='email' className={createPostStyles.label}>
            Description
          </label>
          <textarea
            name='description'
            id='description'
            className={createPostStyles.input}
          ></textarea>
          <label htmlFor='password' className={createPostStyles.label}>
            Image
          </label>
          <input
            type='file'
            name='file'
            id='file'
            className={createPostStyles.input}
            required
          />
          <label htmlFor='password-confirm' className={createPostStyles.label}>
            Game result
          </label>
          <div className={createPostStyles.div}>
            <div>
              <label htmlFor='win'>Win</label>
              <input type='radio' name='Win' id='win' className='mx-1' />
            </div>
            <div>
              <label htmlFor='win'>Loss</label>
              <input type='radio' name='Win' id='loss' className='mx-1' />
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
