import React from 'react';

function Register() {
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-gray-700 sm:w-8/12 md:w-1/2 lg:w-5/12 rounded-lg shadow-lg'>
        <h1 className='text-xl font-semibold text-white'>
          Hello there 👋,{' '}
          <span className='font-normal'>
            please enter your credentials to get access account
          </span>
        </h1>
        <form className='mt-6'>
          <label
            htmlFor='summonerName'
            className='block text-gray-300 font-serif text-lg font-bold'
          >
            Summoner Name
          </label>
          <input
            type='text'
            name='summonerName'
            placeholder='John'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
            required
          />
          <label
            htmlFor='email'
            className='block mt-2 text-gray-300 font-serif text-lg font-bold'
          >
            E-mail
          </label>
          <input
            type='email'
            name='email'
            placeholder='john.doe@company.com'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
            required
          />
          <label
            htmlFor='password'
            className='block mt-2 text-gray-300 font-serif text-lg font-bold'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='********'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
            required
          />
          <label
            htmlFor='password-confirm'
            className='block mt-2 text-gray-300 font-serif text-lg font-bold'
          >
            Confirm password
          </label>
          <input
            type='password'
            name='password-confirm'
            placeholder='********'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner font-serif'
            required
          />
          <button
            type='submit'
            className='w-full py-3 mt-6 text-gray-300 font-bold rounded-lg shadow-lg bg-gray-600 hover:bg-gray-800 hover:text-gray-400 font-serif text-lg'
          >
            Sign up
          </button>
          <p className='flex justify-between inline-block mt-4 text-xs text-gray-300 cursor-pointer hover:text-black font-serif text-lg font-bold'>
            Already registered?
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
