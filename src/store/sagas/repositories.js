import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import api from '../../services/api';

export function* getRepositories() {
  try {
    const res = yield call(api.get, '/users/heltonss/repos');
    yield put(RepositoriesActions.getSuccess(res.data));
  } catch (err) {
    yield put(RepositoriesActions.getFailure());
  }
}
