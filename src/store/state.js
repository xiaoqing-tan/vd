import { storage } from '@/utils';
import setting from '@/config';

const userData = storage.get('userData') || {};
const menu = [];
const state = {
  userData,
  menu,
  setting
};

export default state;