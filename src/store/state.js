import { storage } from '@/utils';
import config from '@/config';

const { auth = {}, init = false, menu = [] } = storage.get('userData') || {};
const state = {
  userData: {
    auth,
    init,
    menu
  },
  config
};

export default state;