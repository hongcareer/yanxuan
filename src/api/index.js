import ajax from './ajax';
const BASE = '/api'
export const reqHomeData = () => ajax('/homedata')
export const reqTotalNumber =() =>ajax(BASE+`/xhr/search/getTotalNumbersOfProducts.json`,'POST')
export const reqItemData = () => ajax('/itemdata')
export const reqCategoryInfo = (id) => ajax(BASE+`/item/cateList`,{id})
//topic
export const reqTabs = () =>ajax(BASE+`/topic/v1/find/getTabs.json`)
export const reqManual = () =>ajax(BASE+`/topic/v1/find/recManual.json`)
// export const reqAutoOne = ({page,size,exceptIds}) =>ajax(BASE+`/topic/v1/find/recAuto.json`,{page,size,exceptIds})
export const reqAutoOne = (data) => ajax(BASE+`/topic/v1/find/recAuto.json`,data)
//http://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383

//获取验证码--失败
export const reqCode = (data) => ajax(BASE+`/dl/yd/lsm`,data)
//https://dl.reg.163.com/dl/yd/lsm?
// mb=18833872936
// &pd=yanxuan_web
// &pkid=pXPYGTc
// &topURL=http%3A%2F%2Fm.you.163.com%2Fu%2Flogin%3Fcallback%3D%252Fucenter
// &rtid=WTWZPLVvGZ4Sgb5J65vBzhHiB1LNlUty
// &nocache=1546513301467

//https://dl.reg.163.com/dl/yd/lsm?mb=13811500752&pd=yanxuan_web&pkid=pXPYGTc&topURL=http%3A%2F%2Fm.you.163.com%2Fu%2Flogin%3Fcallback%3D%252Fucenter&rtid=OP5aqt09ju8E8t8jcKbLVx1dhDLFr7Yq&nocache=1546518302872
//http://localhost:8080/api/zc/yd/ini?mb=18833872936&pd=yanxuan_web&pkid=pXPYGTc&topURL=http%3A%2F%2Fm.you.163.com%2Fu%2Flogin%3Fcallback%3D%252Fucenter&rtid=WTWZPLVvGZ4Sgb5J65vBzhHiB1LNlUty&nocache=1546513301467
// https://dl.reg.163.com/dl/yd/lsm?mb=18833872936&pd=yanxuan_web&pkid=pXPYGTc&topURL=http%3A%2F%2Fm.you.163.com%2Fu%2Flogin%3Fcallback%3D%252Fucenter&rtid=mJbqlBAua3SchMHplN5VmASEpRkMapbI&nocache=1546518973592
