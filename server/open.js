const express = require('express')
const app = express()
app.use(express.json())
app.use(require('cors')())
const Mock = require('mockjs')

Mock.Random.extend({
  // 手机号
  phone: function() {
    const phonePrefixs = ['132', '135', '189']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  },
  // 十位时间戳
  timestamp: function() {
    const start = 1631852399
    const end = 1637122799
    return Math.round(Math.random() * (end - start) + start)
  },
  // 十三位时间戳
  timestampfull: function() {
    const start = 1631852399000
    const end = 1637122799000
    return Math.round(Math.random() * (end - start) + start)
  }
})

app.get('/page', (request, response) => {
  const data = Mock.mock({
    'array|10': [
      {
        'id|+1': 10,
        name: '@cname', // 名字
        province: '@provice', // 省份
        city: '@city', // 城市
        words: '@cword(4,8)', // 随机4-8个中文字，
        time: '@time', // 时分秒
        datetime: '@datetime', //2017-03-19 13:22:54"
        phone: '@phone', // 手机号
        timestamp: '@timestamp', // 十位时间戳
        timestampfull: '@timestampfull', // 十三位时间戳，
        image: Mock.Random.image('200x200'),
        sentence: '@sentence', // 英文段落
        cparagraph: '@cparagraph' // 中文句子
      }
    ]
  })

  response.status(200).send({
    code: 200,
    msg: '',
    data: {
      content: data.array,
      pagination: {
        page: 1,
        size: 10,
        total: 50
      }
    }
  })
})

app.post('*', (req, res) => {
  res.status(200).send({
    code: 200,
    msg: '',
    data: null
  })
})
app.delete('*', (req, res) => {
  res.status(200).send({
    code: 200,
    msg: '',
    data: null
  })
})
app.put('*', (req, res) => {
  res.status(200).send({
    code: 200,
    msg: '',
    data: null
  })
})

app.listen(3000, () => {
  console.log('4567')
})
