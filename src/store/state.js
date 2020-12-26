import { storage } from '@/utils';
import setting from '@/config';

const { user = {}, menu = [] } = storage.get('userData');

const state = {
  userData: {
    user,
    menu
  },
  setting
};

export default state;