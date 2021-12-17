const baseUrl = 'http://localhost:3030';

async function register() {}

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

function logout() {}

const authService = {
  register,
  login,
  logout,
};

export default authService;
