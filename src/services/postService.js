const baseUrl = 'http://localhost:3030/data';

async function create(postData, accessToken) {
  let res = await fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    },
    body: JSON.stringify({ ...postData, upVotes: [], downVotes: [] }),
  });

  let post = await res.json();

  if (res.ok) {
    return post;
  } else {
    throw post.message;
  }
}

async function getAll() {
  let res = await fetch(`${baseUrl}/posts`);
  let posts = await res.json();

  if (res.ok) {
    return Object.values(posts);
  } else {
    throw posts;
  }
}

async function getOne(postId) {
  let res = await fetch(`${baseUrl}/posts/${postId}`);
  let post = res.json();

  return post;
}

async function getMyPosts(ownerId) {
  let query = encodeURIComponent(`_ownerId="${ownerId}"`);
  let res = await fetch(`${baseUrl}/posts?where=${query}`);
  let myPosts = await res.json();

  if (res.ok) {
    return Object.values(myPosts);
  } else {
    throw myPosts;
  }
}

async function deleteOne(postId, token) {
  let res = await fetch(`${baseUrl}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'X-Authorization': token,
    },
  });

  let result = res.json();

  return result;
}

async function updateOne(postId, postData, accessToken, author) {
  let res = await fetch(`${baseUrl}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    },
    body: JSON.stringify({ ...postData, author }),
  });

  let post = res.json();

  return post;
}

const postService = {
  create,
  getAll,
  getOne,
  deleteOne,
  updateOne,
  getMyPosts,
};

export default postService;
