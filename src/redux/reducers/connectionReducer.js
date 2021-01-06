import {SET_CONNECTION} from '../types';

const initialState = {
  connection: {
    details: {},
    isConnected: '',
    type: '',
    isInternetReachable: '',
    isWifiEnabled: '',
  },
};

function listSavedAddressReducer(state, action) {
  const setState = state || initialState;
  if (action.type === SET_CONNECTION) {
    return {
      ...setState,
      connection: action.data,
    };
  }
  return setState;
}

export default listSavedAddressReducer;
