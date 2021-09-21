import Mock from 'mockjs'

const tableData = Mock.mock({
  "list|10": [{
    name: '@cname',
    region: '@region',
    province: '@province',
    datetime: '@datetime',
    image: Mock.Random.image('200x100')
  }]
})
console.log(tableData)

export default tableData