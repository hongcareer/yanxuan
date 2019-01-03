import axios from 'axios'

export default function ajax(url,data={},method='GET'){
  return new Promise((resolve, reject)=>{
    let promise;
    if(method === 'GET'){
      //路径
      if(data.page){
        url = url+`?page=${data.page}&size=${data.size}&exceptIds=${data.exceptIds}`
      }
      promise = axios.get(url,data)
        .then((response)=>{
          resolve(response.data)
        })
        .catch((err)=>{
          reject('请求失败')
        })
    }else{
      promise = axios.post(url,data)
        .then((response)=>{
          resolve(response.data)
        })
        .catch((err)=>{
          reject('请求失败')
        })
    };
    return promise
  })
}
