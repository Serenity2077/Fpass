export const rules = [
  { name: '腾讯企业邮', domain: 'exmail.qq.com', length: 32 },
  { name: 'segmentfault', domain: 'segmentfault.com', length: 32 },
  { name: '简书', domain: 'jianshu.com', length: 32 },
  { name: '优酷', domain: 'youku.com', length: 16 },
  { name: 'Steam', domain: 'store.steampowered.com', length: 64 },
  { name: '钉钉', domain: 'dingtalk.com', length: 64 },
  { name: '腾讯QQ', domain: 'qq.com', length: 16 },
  { name: '微信', domain: 'wx.qq.com', length: 16 },
  { name: 'GitHub', domain: 'github.com', length: 72 },
  { name: 'NPM', domain: 'npmjs.com', length: 72 },
  { name: '知乎', domain: 'zhihu.com', length: 128 },
  { name: '百度', domain: 'baidu.com', length: 14 },
  { name: '新浪微博', domain: 'weibo.com', length: 16 },
  { name: '12306', domain: '12306.cn', length: 20 },
  { name: '豆瓣', domain: 'douban.com', length: 20 },
  { name: '拉钩', domain: 'lagou.com', length: 16 },
  { name: '阿里云企业邮', domain: 'qiye.aliyun.com', length: 32 },
  { name: '淘宝', domain: 'taobao.com', length: 20 },
  { name: '京东', domain: 'jd.com', length: 20 },
  { name: 'Coding', domain: 'coding.net', length: 64 },
  { name: '开源中国', domain: 'oschina.net', length: 20 },
  { name: '码云', domain: 'gitee.com', length: 16 },
  { name: '斗鱼', domain: 'douyu.com', length: 25 },
  { name: '哔哩哔哩', domain: 'bilibili.com', length: 16 },
  { name: 'Cloudflare', domain: 'cloudflare.com', length: 128 },
  { name: 'Freenom', domain: 'freenom.com', length: 64 },
  { name: 'Vultr', domain: 'vultr.com', length: 128 },
  { name: '小米', domain: 'mi.com', length: 16 },
  { name: '华为账号', domain: 'vmall.com', length: 32 },
  { name: '网易', domain: '163.com', length: 16 },
  { name: '学信网', domain: 'chsi.com.cn', length: 30 },
  { name: '阿里云盘', domain: 'aliyundrive.com', length: 20 },
  { name: '谷歌', domain: 'google', length: 32 },
  { name: '网易邮箱', domain: '163', length: 32 },
  { name: 'bitwarden', domain: 'bitwarden', length: 32 },
  { name: 'Roam Research', domain: 'roam', length: 32 },
  { name: 'roamedit', domain: 'roam', length: 18 },
  { name: 'mxc', domain: 'mxc', length: 32 },
  { name: '币安', domain: 'bian', length: 32 },
  { name: 'heyuedi', domain: 'heyuedi', length: 16 },
  { name: 'linode', domain: 'linode', length: 32 },
  { name: '腾讯云', domain: 'cloud', length: 30 },
  { name: '苹果', domain: 'appid', length: 8 },
  { name: '推特', domain: 'twitter', length: 32 },
  { name: 'Paypal', domain: 'paypal', length: 20 },
  { name: '吾爱', domain: '52pojie', length: 32 },
  { name: '教育部考试中心', domain: 'member.neea.cn', length: 15 },
  { name: 'Etherscan', domain: 'etherscan.io', length: 75 },
  { name: 'Tokenpocket', domain: 'tokenpocket.pro', length: 64 },
]

rules.sort((a, b) => (a.domain <= b.domain ? -1 : 1))
rules.unshift({ name: '自定义', domain: '' })
