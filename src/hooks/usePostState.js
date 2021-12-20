import { useEffect, useState } from 'react';

import postService from '../services/postService.js';

const usePostState = (postId) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    postService
      .getOne(postId)
      .then((result) => {
        setPost(result);
      })
      .catch((err) => console.log(err));
  }, [postId]);

  return [post, setPost];
};

export default usePostState;
