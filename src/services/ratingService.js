const baseUrl = 'http://localhost:3030/data/rating';

function getRating(postId) {
  const query = encodeURIComponent(`postId="${postId}"`);

  return fetch(`${baseUrl}/?select=userId&where=${query}`).then((res) =>
    res.json()
  );
}

function vote(userId, postId, token) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify({ userId, postId }),
  });
}

const ratingService = {
  vote,
  getRating,
};

export default ratingService;
