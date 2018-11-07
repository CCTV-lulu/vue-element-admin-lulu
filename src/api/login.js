import axios from '@/http'
export function loginByUsername() {
    return axios({
        url:'/api/hello',
        method:'post'
    })
}
export function test404() {
    return axios({
        url: '/api/test404',
        method: 'get'
    })
}
export function test500() {
    return axios({
        url:'/api/test500',
        method:'post'
    })
}
export function testMock() {
   return axios({
       url:'/api/user/userinfo',
       method:'post'
   })
}
