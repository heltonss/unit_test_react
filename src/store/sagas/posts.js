import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { Creators as PostsActions } from '../ducks/posts';
import api from '../../services/api';

export function* addPosts(body) {
  try {
    const res = yield call(api.post, '/posts', body);
    yield put(PostsActions.getSuccess(res.data));
  } catch (err) {
    yield put(PostsActions.getFailure());
  }
}
