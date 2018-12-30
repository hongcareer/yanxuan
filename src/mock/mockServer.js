import Mock from 'mockjs'
import data from './json/shouye_data.json'
Mock.mock('/homedata',{code:0,data:data})
