async function request(url) {
  let res = await fetch(url);

  return responseHandler(res);
}

async function responseHandler(res) {
  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw data;
  }
}

const requesterService = {
  request,
};

export default requesterService;
