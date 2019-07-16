import { runSaga } from 'redux-saga';
import { getRepositories } from '../../store/sagas/repositories';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import api from '../../services/api';
import MockAdapter from 'axios-mock-adapter';

const apiMock = new MockAdapter(api);
xdescribe('Repositories saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatched = [];

    apiMock.onGet('users/heltonss/repos').reply(200, ['repo 1', 'repo 2']);

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getSuccess(['repo 1', 'repo 2'])
    );
  });

  it('should post fetch repositories', async () => {
    const dispatched = [];

    apiMock.onGet('users/heltonss/repos').reply(200, ['repo 1', 'repo 2']);

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getSuccess(['repo 1', 'repo 2'])
    );
  });
});
