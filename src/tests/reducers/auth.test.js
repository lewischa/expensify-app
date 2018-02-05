import authReducer from '../../reducers/auth';

test('Should set uid on login', () => {
    const uid = '123abc';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('Should clear uid on logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: 'anyID' }, action);
    expect(state).toEqual({});
});
