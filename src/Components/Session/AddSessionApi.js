import axios from 'axios';

export const addSession = (sessionData, token) => {
  const url = new URL(`http://localhost:801/api/SessionDetails`);

  return axios({
    method: 'post',
    url: url,
    data: sessionData,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  });
};
