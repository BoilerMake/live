import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import cookie from 'react-cookie';

import * as actions from './application';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('application actions', () => {
  it('fetches application', () => {
    fetchMock.restore();
    fetchMock.get('*', { success: true, application: {} });

    const store = mockStore({ application: {} });

    return store.dispatch(actions.fetchApplication()).then(res => {
      console.log(res);
      expect(res.json).toEqual({ success: true, application: {} });
    });
  });

  it('saves application', () => {
    fetchMock.restore();
    fetchMock.put('*', {
      success: true,
      message: 'Application Saved',
      data: { applicationForm: {} }
    });
    const store = mockStore({ application: {} });

    return store.dispatch(actions.saveApplication()).then(res => {});
  });
});
