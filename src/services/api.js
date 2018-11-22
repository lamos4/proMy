import request from '../utils/request'

const host = "http://localhost:8001";

export async function getUser(param) {
  console.log('param',param);
  return request(`${host}/api/users/${param}`);
}
