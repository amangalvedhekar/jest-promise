import {
  getPostUserId,
} from './';
import * as nock from 'nock';

describe('getPostUserId', () => {
  it('should get a post', () => {
    const postId = 1;

    const responseData = {
      userId: 4,
    };

    nock('https://jsonplaceholder.typicode.com')
      .get(`/posts/${postId}`)
      .reply(200, responseData);

    expect(getPostUserId(postId))
      .resolves
      .toEqual(responseData.userId)
  });
});
