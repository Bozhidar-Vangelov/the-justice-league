import React from 'react';

function CreatePost() {
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-gray-700 sm:w-8/12 md:w-1/2 lg:w-5/12 rounded-lg shadow-lg'>
        <h1 className='text-xl font-semibold text-white'>
          Hello there 👋,{' '}
          <span className='font-normal'>please enter the game details</span>
        </h1>
        <form className='mt-6'>
          <label
            htmlFor='summonerName'
            className='block text-gray-300 font-serif text-lg font-bold'
          >
            Game type
          </label>
          <select
            name='type'
            id='type'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
          >
            <option defaultValue>-- Select an option --</option>
            <option value='aram'>ARAM</option>
            <option value='normal'>Normal</option>
            <option value='ranked'>Ranked</option>
          </select>
          <label
            htmlFor='email'
            className='block mt-2 text-gray-300 font-serif text-lg font-bold'
          >
            Description
          </label>
          <textarea
            name='description'
            id='description'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
          ></textarea>
          <label
            htmlFor='password'
            className='block mt-2 text-gray-300 font-serif text-lg font-bold'
          >
            Image
          </label>
          <input
            type='file'
            name='file'
            className='cursor-pointer block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
            required
          />
          <label
            htmlFor='password-confirm'
            className='block mt-2 text-gray-300 font-serif text-lg font-bold'
          >
            Game result
          </label>
          <div className='flex justify-evenly block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'>
            <div>
              <label htmlFor='win'>Win</label>
              <input type='radio' name='Win' id='win' className='mx-1' />
            </div>
            <div>
              <label htmlFor='win'>Loss</label>
              <input type='radio' name='Win' id='win' className='mx-1' />
            </div>
          </div>
          <button
            type='submit'
            className='w-full py-3 mt-6 text-gray-300 font-bold rounded-lg shadow-lg bg-gray-600 hover:bg-gray-800 hover:text-gray-400 font-serif text-lg'
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
