import {SET_CONNECTION} from '../types';

export function setConnection(data) {
  return {
    type: SET_CONNECTION,
    data,
  };
}
