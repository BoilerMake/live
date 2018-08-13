import cookie from 'react-cookie';
import Hashids from 'hashids';
import { API_BASE_URL } from '../config';

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export default function apiFetch(endpoint, options = {}) {
  let uuid = cookie.load('uuid');
  //if we don't have a uuid cookie set, generate a fresh one
  //uuid has 3 parts, separated by dash:
  //  Client identifier (i.e.) this is coming from React (r for short)
  //  HashId(current_unix_timestamp)
  // (random4digitstring)
  if (!uuid) {
    let hid = new Hashids();
    uuid = `r-${hid.encode(Math.floor(Date.now()))}-${s4()}`;
    console.log('saving new uuid', uuid);
    cookie.save('uuid', uuid, { path: '/' });
  }

  options.headers = {
    Authorization: 'Bearer ' + cookie.load('token'),
    'X-debug-token': cookie.load('debug-token'),
    'X-UUID': uuid
  };
  return fetch(`${API_BASE_URL}/${endpoint}`, options);
}
