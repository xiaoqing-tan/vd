import Storage from './storage.js'
import setting from '@/config'
import QQMapWX from './../libs/qqmap-wx-jssdk.min.js'
const qqmapsdk = new QQMapWX({
  key: 'FL2BZ-XTQWD-YHE43-PHWXD-UNOY2-A2B5J'
})

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export const reverseGeocoder = (location) => {
  console.log(location)
  return new Promise((resolve, reject) => {
    qqmapsdk.reverseGeocoder({
      location,
      success(res) {
        const { location, address } = res.result
        resolve({
          location,
          address
        })
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        resolve(coords)
      })
    } else {
      reject({
        message: 'error'
      })
    }
  })
}

export const storage = new Storage(setting.storage)
