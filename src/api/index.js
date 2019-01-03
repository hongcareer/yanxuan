import ajax from './ajax';
const BASE = '/api'
export const reqHomeData = () => ajax('/homedata')
export const reqTotalNumber =() =>ajax(BASE+`/xhr/search/getTotalNumbersOfProducts.json`,'POST')
export const reqItemData = () => ajax('/itemdata')
export const reqCategoryInfo = (id) => ajax(BASE+`/item/cateList`,{id})

// export const
