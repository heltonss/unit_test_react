import { runSaga } from 'redux-saga';
import { addPosts } from '../../store/sagas/posts';
import { Creators as PostsActions } from '../../store/ducks/posts';
import api from '../../services/api';
import MockAdapter from 'axios-mock-adapter';

const apiMock = new MockAdapter(api);
describe('test post', () => {
  it('should post fetch', async () => {
    const dispatched = [];
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    apiMock.onPost('posts', body).reply(200, {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      addPosts,
      body
    ).toPromise();

    expect(dispatched).toEqual([
      PostsActions.getSuccess({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    ]);
  });
});
