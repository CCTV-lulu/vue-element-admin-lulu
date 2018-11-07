const Mock = require('mockjs');//mockjs 导入依赖模块
import loginAPI from './login/login'


/**
 * 使用正则匹配路由
 * 填写请求方法
 * 添加mock数据
 **/
// 登录模块
Mock.mock(/\/user\/userinfo/, 'post', loginAPI.testMock)

