import * as url from './urlConfig'
import axios from 'axios'
// 获取banner
export const getbanner = () => {
  return axios
    .get(url.banner)
    .then((response) => {
      return response.data
    })
}
// 推荐歌单
export const personalized = () => {
  return axios
    .get(url.personalized)
    .then((response) => {
      return response.data
    })
}
// 推荐mv
export const personalizedMv = () => {
  return axios
    .get(url.personalizedMv)
    .then((response) => {
      return response.data
    })
}
// 推荐新音乐
export const personalizedMusci = () => {
  return axios
    .get(url.personalizedMusci)
    .then((response) => {
      return response.data
    })
}
