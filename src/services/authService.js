const baseUrl = 'http://localhost:3030';

async function register(summonerName, email, password) {
  let res = await fetch(`${baseUrl}/users/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ summonerName, email, password }),
  });

  let registerData = res.json();

  return registerData;
}

async function login(email, password) {
  let res = await fetch(`${baseUrl}/users/login`, {
    method: 'POST',

    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw data.message;
  }
}

async function logout(accessToken) {
  await fetch(`${baseUrl}/users/logout`, {
    headers: {
      'X-Authorization': accessToken,
    },
  });
}

const authService = {
  register,
  login,
  logout,
};

export default authService;
