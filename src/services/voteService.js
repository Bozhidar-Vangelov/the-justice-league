const baseUrl = 'http://softuni-custom-server.herokuapp.com/data';

async function getUpVotes(postId) {
  const query = encodeURIComponent(`postId="${postId}"`);

  let res = await fetch(`${baseUrl}/upVotes/?select=userId&where=${query}`);
  let json = await res.json();

  let upVotes = Object.values(json).map((x) => x.userId);

  return upVotes;
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

const voteService = {
  upVote,
  getUpVotes,
};

export default voteService;
