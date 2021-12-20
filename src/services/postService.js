import requesterService from './requesterService.js';

const baseUrl = 'http://localhost:3030';

async function create(postData, accessToken) {
  let res = await fetch(`${baseUrl}/data/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    },
    body: JSON.stringify({ ...postData, likes: [] }),
  });

  let post = await res.json();

  return post;
}

function getAll() {
  return requesterService.request(`${baseUrl}/data/posts`);
}

async function getOne(postId) {
  let res = await fetch(`${baseUrl}/data/posts/${postId}`);
  let post = res.json();

  return post;
}

const postService = {
  create,
  getAll,
  getOne,
};

export default postService;
