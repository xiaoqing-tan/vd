import Storage from './storage.js';
import setting from '@/config';

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export const storage = new Storage(setting.storage);