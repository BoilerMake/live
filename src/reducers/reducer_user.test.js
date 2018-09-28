import deepFreeze from 'deep-freeze';
import { assert } from 'chai';
import reducer_user from './reducer_user.js';

const initialState = {
    authenticated: false,
    isHacker: false,
    isExec: false,
    me: null,
    error: null,
    loading: false,
    token: null,
    showGithubEmailErrorMessage: false
};

deepFreeze(initialState);

it('handles default action', () => {
    const newState = reducer_user(initialState, {
        type: 'none'
    });
    assert.deepEqual(initialState, newState);
});
describe('handles LOGIN_FROM_JWT_SUCCESS', ()=>{
    const newState = reducer_user(initialState, {
        type: 'LOGIN_FROM_JWT_SUCCESS',
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzMwMDQyMTMsInJvbGVzIjpbImhhY2tlciIsImFzZGZhcyJdLCJzbHVnIjoiTmlja3lmc2Rmc2Rmc2RmYWFhIFNlbWVuemFzc3MgKCMzOCkiLCJ1c2VyX2lkIjozOCwic3ViIjozOCwiaXNzIjoiaHR0cDovL2JtLmRldjo4MDgxL3YxL3VzZXJzL2F1dGgvZ2l0aHViLzZhZmM4YzVlMzgzOGUwYzAzODQ3IiwiaWF0IjoxNTAxNDY4MjEzLCJuYmYiOjE1MDE0NjgyMTMsImp0aSI6IkpoSEs0MjE0eDc0YUM2bVkifQ.yI4Vf8hqomZepgXRViZSYTpIkZR2NGRhSpYbpcuelOU"
    });
    it('sets authenticated to true', () => {
        assert.isTrue(newState.authenticated);
    });
    it('decodes JWT data', () => {
        assert.equal(newState.isHacker, true);
        assert.equal(newState.isExec, false);
    });
});
it('handles REQUEST_ME', ()=>{
    const newState = reducer_user(initialState, {
        type: 'REQUEST_ME',
    });
    assert.equal(newState.loading,true);
})
it('handles RECEIVE_ME', ()=>{
    const newState = reducer_user(initialState, {
        type: 'RECEIVE_ME',
        me: {
            data: "me-data"
        }
    });
    assert.equal(newState.loading,false);
    assert.equal(newState.me,"me-data");
})
