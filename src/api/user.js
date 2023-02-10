import request from '../utils/request.js'

export function getInitData(){
    return request({
        url:"",
        method:"GET",
        params:{
            
        }
    })
}

export function getUserInfo(){
    return request({
        url: "",
        method:"",
        params:{
            
        }
    })
}
// 获取模组
export function getSearchMods(data){
    return request({
        url: "1.php",
        method: "GET",
        params: data
    })
}