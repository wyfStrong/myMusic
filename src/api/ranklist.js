import config from '../config/api/ranklist'
import http from '../utils/Http'

/**
 * 酷我排行榜请求
 * @param {number} id page
 * @returns Promise
 */
export const getRankListDetail = (id, page = 1) => {
  if (!id) {
    return Promise.reject('id没传')
  }
  return http.get(config.getRankListDetail + id + '?rn=20&pn=' + page)
}

/**
 * @description: ranklist更多榜单
 * @param  {*}
 * @return Promise
 */
export const getRankList = () => {
  return http.get(config.getRankList)
}

/**
 * @description: radioDetail请求
 * @param  {number} id  page
 * @return Promise
 */
export const getRadioDetail = (id, page = 1) => {
  if (!id) {
    return Promise.reject('id没传')
  }
  return http.get(config.getRadioDetail + id + '?rn=20&pn=' + page)
}

/**
 * @description: albumDetail请求
 * @param  {number} id
 * @return Promise
 */
export const getAlbumDetail = (id) => {
  if (!id) {
    return Promise.reject('id没传')
  }
  return http.get(config.getAlbumDetail + id + '?rn=20')
}

/**
 * @description: playlist请求,表头
 * @param  {*}
 * @return Promise
 */
export const getPlayList = () => {

  return http.get(config.getPlayList)
}

/**
 * @description: playlist请求, 最新
 * @param  {*}
 * @return Promise
 */
export const getPlayListNew = () => {

  return http.get(config.getPlayListNew)
}

/**
 * @description: playlist请求,最热
 * @param  {*}
 * @return Promise
 */
export const getPlayListHot = () => {

  return http.get(config.getPlayListHot)
}

/**
 * @description: playlist_detail请求数据
 * @param  {number} id
 * @return {*}
 */
export const getPlaylistDetail = (id, page = 1) => {
  if (!id) {
    return Promise.reject('id没传')
  }
  return http.get(config.getPlaylistDetail + id + '?rn=20&pn=' + page)
}

/**
 * @description: 搜索请求列表
 * @param  {string} keyword
 * @return Promise
 */
export const getSearchCon = (keyword) => {
  return http.get(config.getSearchCon + keyword)
}

/**
 * @description: 搜索项详情
 * @param  {string} keyword
 * @return Promise
 */
export const getConDetail = (keyword) => {
  return http.get(config.getConDetail + keyword)
}

/**
 * @description: 歌曲下载请求
 * @param  {*}
 * @return {*}
 */
export const download_simulate = () => {
  return http.get('../../public/download.php')
}

