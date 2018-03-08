import axios from 'axios';

export const getPostUserId = (postId: number) => {
  return axios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
  })
  .then((response: any) => 
    response.data.userId
  );
};
