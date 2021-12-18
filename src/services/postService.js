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

async function getAll() {
  let res = await fetch(`${baseUrl}/data/posts`);

  let posts = await res.json();

  let result = Object.values(posts);

  console.log(posts);

  return result;
}

const postService = {
  create,
  getAll,
};

export default postService;
