import axios from 'axios';
import {API_BASE_URL} from "../helper/env";

export const getDataPoint = () => {
  return new Promise((resolve, reject) => {
    axios.get(API_BASE_URL + '/getData', {
      headers: {
      }
    })
      .then(res => {
        if (res.data.meta.status === 200) {
          resolve(res.data.response)
        } else {
          reject(res.data.message)
        }
      })
      .catch(err => {
        reject('Something went wrong')
      })
  })
}

export const importDataPoint = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(API_BASE_URL + '/import', data, {
      headers: {
      }
    })
      .then(res => {
        if (res.data.meta.status === 200) {
          resolve(res.data.response)
        } else {
          reject(res.data.response)
        }
      })
      .catch(err => {
        reject('Something went wrong')
      })
  })
}