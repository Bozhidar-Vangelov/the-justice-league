const baseUrl = 'http://localhost:3030/data';

function getUpVotes(postId) {
  const query = encodeURIComponent(`postId="${postId}"`);

  return fetch(`${baseUrl}/upVotes/?select=userId&where=${query}`).then((res) =>
    res.json()
  );
}

function getDownVotes(postId) {
  const query = encodeURIComponent(`postId="${postId}"`);

  return fetch(`${baseUrl}/downVotes/?select=userId&where=${query}`).then(
    (res) => res.json()
  );
}

function upVote(userId, postId, token) {
  return fetch(`${baseUrl}/upVotes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify({ userId, postId }),
  });
}

function downVote(userId, postId, token) {
  return fetch(`${baseUrl}/downVotes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify({ userId, postId }),
  });
}

const ratingService = {
  upVote,
  getUpVotes,
  downVote,
  getDownVotes,
};

export default ratingService;
