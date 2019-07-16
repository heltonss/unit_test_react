export const Types = {
  GET_REQUEST: 'POSTS_GET_REQUESTS',
  GET_SUCCESS: 'POSTS_GET_SUCCESSS',
  GET_FAILURE: 'POSTS_GET_FAILURE'
};

const INITIAL_STATE = {
  data: {
    title: '',
    body: '',
    userId: 0
  }
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  getRequest: todo => ({
    type: Types.GET_REQUEST
  }),
  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getFailure: () => ({
    type: Types.GET_FAILURE
  })
};
