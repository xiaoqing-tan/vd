import { http } from '@/utils/http';

export const userLogin = async (params) => {
  const res = await http.post('/login', params);
  return res;
}