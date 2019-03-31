import request from '@/utils/request'
export const getRoleList = () => {
  return request({
    method: 'get',
    url: '/roles'
  }).then(res => res.data)
}
export const changeUserRole = ({ id, rid }) => {
  return request({
    method: 'put',
    url: `users/${id}/role`,
    data: {
      rid
    }
  }).then(res => res.data)
}
