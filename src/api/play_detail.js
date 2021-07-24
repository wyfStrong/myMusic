import config from '../config/api/play_detail'
import http from '../utils/Http'

/**
 * 
 * @param {传入要播放的歌曲的id值} id 
 * @returns  歌曲详情  promise
 */
export const getPlay_detail = (id = 177504089) => {
    if (!id) {
        return Promise.reject('id没传')
    }
    return http.get(config.getSongsDetail + id)
}

/**
 * 
 * @param {传入要播放的歌曲} id 
 * @returns 歌曲url promise
 */
export const getSong = (id = 177504089) => {
    if (!id) {
        return Promise.reject('id没传')
    }
    return http.get(config.getSong + id)
}