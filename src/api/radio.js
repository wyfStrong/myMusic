import config from '../config/api/radio'
import http from '../utils/Http'

/**
 * 
 * @param 
 * @returns  最新电台  promise
 */
export const getNewRadio = () => {

    return http.get(config.getNewRadio)
}

/**
 * 
 * @param 
 * @returns 最热电台 promise
 */
export const getHotRadio = () => {

    return http.get(config.getHotRadio)
}