import config  from "../config/api/home";
import http from '../utils/Http'


/**
 * 
 * @param 
 * @returns  主页数据  promise
 */
export const getHome =()=>{
  
   return http.get(config.getHome)
}