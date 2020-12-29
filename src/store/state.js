import { storage } from '@/utils';
import config from '@/config';

const userData = storage.get('userData') || {};
const menu = [];
const state = {
  userData,
  menu,
  config
};

export default state;