## 客户端功能

#### 登录注册模块

+ 手机验证码


+ 正确手机号码和密码MD5验证

```javascript
var md5 = crypto.createHash("md5");
obj.upass = md5.update(obj.upass).digest("hex");
```

+ 错误处理


+ 成长树创建


+ 上传头像

```javascript
var base64Data = obj.uimage.replace(/^data:image\/\w+;base64,/, "");
var dataBuffer = new Buffer(base64Data, 'base64');
fs.writeFile(...)
```

+ 兴趣和性别选择

#### 推荐模块

+ UI设计


+ 数据获取


+ 评论功能

```javascript
感谢cnode平台的技术支持
https://github.com/heightzhang/Angular_Cnode/tree/master/src
```

+ 点赞，观看

#### 成长树模块

+ 成长树重构


+ 数据获取


+ 视频、相册关联

#### +模块

+ 模态窗口页面


+ 发表说说和文章


+ 发表文章的基本结构

```bash
# SimpleMDE编辑器 + 提取HTML + 美化输出

$ npm install simplemde --save
```

+ 发表相册和视频

#### 社区模块

+ 详情页


+ 数据获取


+ 评论功能


+ 分享功能（未完成）


+ 转发功能（未完成）

#### 我的模块

+ 页面重构


+ 数据接收


+ 个人页面

## 目录结构

```bash
.
├── app
│   ├── app.component.ts
│   ├── app.html
│   ├── app.module.ts
│   ├── app.scss
│   └── main.ts
├── assets
│   ├── font
│   │   ├── iconfont.css
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   └── iconfont.woff
│   ├── icon
│   │   ├── favicon.ico
│   │   └── shouji.png
│   └── imgs
│       ├── apple.png
│       ├── app.png
│       ├── bianji.png
│       ├── boy_01.png
│       ├── boy_02.png
│       ├── camera.jpg
│       ├── clean.png
│       ├── creation.png
│       ├── edit.png
│       ├── fans.png
│       ├── follow.png
│       ├── girl_01.png
│       ├── girl_02.png
│       ├── hot01.png
│       ├── hot02.png
│       ├── hot03.png
│       ├── hot04.png
│       ├── hot05.png
│       ├── hot06.png
│       ├── important.png
│       ├── jiahao1.png
│       ├── jiahao.png
│       ├── logo.png
│       ├── lunbo1.jpg
│       ├── lunbo2.jpg
│       ├── lunbo3.jpg
│       ├── message.png
│       ├── modify.png
│       ├── photo.png
│       ├── picture.png
│       ├── pingguo.png
│       ├── shouji.png
│       ├── shu.png
│       ├── suo.png
│       ├── tab
│       │   ├── iconfont.eot
│       │   ├── iconfont.svg
│       │   ├── iconfont.ttf
│       │   └── iconfont.woff
│       ├── title1.png
│       ├── title.png
│       ├── tree.png
│       ├── video.png
│       ├── xiangce.jpg
│       ├── yaoshi1.png
│       └── yaoshi.png
├── index.html
├── manifest.json
├── pages
│   ├── about
│   │   ├── about.html
│   │   ├── about.scss
│   │   └── about.ts
│   ├── aboutus
│   │   ├── aboutus.html
│   │   ├── aboutus.module.ts
│   │   ├── aboutus.scss
│   │   └── aboutus.ts
│   ├── account
│   │   ├── account.html
│   │   ├── account.module.ts
│   │   ├── account.scss
│   │   └── account.ts
│   ├── album
│   │   ├── album.html
│   │   ├── album.module.ts
│   │   ├── album.scss
│   │   └── album.ts
│   ├── article
│   │   ├── article.html
│   │   ├── article.module.ts
│   │   ├── article.scss
│   │   └── article.ts
│   ├── authorit
│   │   ├── authorit.html
│   │   ├── authorit.module.ts
│   │   ├── authorit.scss
│   │   └── authorit.ts
│   ├── camera
│   │   ├── camera.html
│   │   ├── camera.module.ts
│   │   ├── camera.scss
│   │   └── camera.ts
│   ├── choose
│   │   ├── choose.html
│   │   ├── choose.module.ts
│   │   ├── choose.scss
│   │   └── choose.ts
│   ├── community
│   │   ├── community.html
│   │   ├── community.module.ts
│   │   ├── community.scss
│   │   └── community.ts
│   ├── contact
│   │   ├── contact.html
│   │   ├── contact.scss
│   │   └── contact.ts
│   ├── content
│   │   ├── content.html
│   │   ├── content.module.ts
│   │   ├── content.scss
│   │   └── content.ts
│   ├── creation
│   │   ├── creation.html
│   │   ├── creation.module.ts
│   │   ├── creation.scss
│   │   └── creation.ts
│   ├── edit
│   │   ├── edit.html
│   │   ├── edit.module.ts
│   │   ├── edit.scss
│   │   └── edit.ts
│   ├── fans
│   │   ├── fans.html
│   │   ├── fans.module.ts
│   │   ├── fans.scss
│   │   └── fans.ts
│   ├── feedback
│   │   ├── feedback.html
│   │   ├── feedback.module.ts
│   │   ├── feedback.scss
│   │   └── feedback.ts
│   ├── feel
│   │   ├── feel.html
│   │   ├── feel.module.ts
│   │   ├── feel.scss
│   │   └── feel.ts
│   ├── first
│   │   ├── first.html
│   │   ├── first.module.ts
│   │   ├── first.scss
│   │   └── first.ts
│   ├── follow
│   │   ├── follow.html
│   │   ├── follow.module.ts
│   │   ├── follow.scss
│   │   └── follow.ts
│   ├── home
│   │   ├── home.html
│   │   ├── home.scss
│   │   └── home.ts
│   ├── homepage
│   │   ├── homepage.html
│   │   ├── homepage.module.ts
│   │   ├── homepage.scss
│   │   └── homepage.ts
│   ├── login
│   │   ├── login.html
│   │   ├── login.module.ts
│   │   ├── login.scss
│   │   └── login.ts
│   ├── message
│   │   ├── message.html
│   │   ├── message.module.ts
│   │   ├── message.scss
│   │   └── message.ts
│   ├── my
│   │   ├── my.html
│   │   ├── my.module.ts
│   │   ├── my.scss
│   │   └── my.ts
│   ├── photo
│   │   ├── photo.html
│   │   ├── photo.module.ts
│   │   ├── photo.scss
│   │   └── photo.ts
│   ├── picture
│   │   ├── picture.html
│   │   ├── picture.module.ts
│   │   ├── picture.scss
│   │   └── picture.ts
│   ├── reset-pwd
│   │   ├── reset-pwd.html
│   │   ├── reset-pwd.module.ts
│   │   ├── reset-pwd.scss
│   │   └── reset-pwd.ts
│   ├── seetouxiang
│   │   ├── seetouxiang.html
│   │   ├── seetouxiang.module.ts
│   │   ├── seetouxiang.scss
│   │   └── seetouxiang.ts
│   ├── selectalbum
│   │   ├── selectalbum.html
│   │   ├── selectalbum.module.ts
│   │   ├── selectalbum.scss
│   │   └── selectalbum.ts
│   ├── set-pwd
│   │   ├── set-pwd.html
│   │   ├── set-pwd.module.ts
│   │   ├── set-pwd.scss
│   │   └── set-pwd.ts
│   ├── setup
│   │   ├── setup.html
│   │   ├── setup.module.ts
│   │   ├── setup.scss
│   │   └── setup.ts
│   ├── share
│   │   ├── share.html
│   │   ├── share.module.ts
│   │   ├── share.scss
│   │   └── share.ts
│   ├── shequ
│   │   ├── shequ.html
│   │   ├── shequ.module.ts
│   │   ├── shequ.scss
│   │   └── shequ.ts
│   ├── tabs
│   │   ├── tab.scss
│   │   ├── tabs.html
│   │   └── tabs.ts
│   ├── tiezi
│   │   ├── tiezi.html
│   │   ├── tiezi.module.ts
│   │   ├── tiezi.scss
│   │   └── tiezi.ts
│   ├── touxiang
│   │   ├── touxiang.html
│   │   ├── touxiang.module.ts
│   │   ├── touxiang.scss
│   │   └── touxiang.ts
│   ├── transmit
│   │   ├── transmit.html
│   │   ├── transmit.module.ts
│   │   ├── transmit.scss
│   │   └── transmit.ts
│   ├── video
│   │   ├── video.html
│   │   ├── video.module.ts
│   │   ├── video.scss
│   │   └── video.ts
│   ├── vidio
│   │   ├── vidio.html
│   │   ├── vidio.module.ts
│   │   ├── vidio.scss
│   │   └── vidio.ts
│   ├── xieyi
│   │   ├── xieyi.html
│   │   ├── xieyi.module.ts
│   │   ├── xieyi.scss
│   │   └── xieyi.ts
│   ├── xingqu
│   │   ├── xingqu.html
│   │   ├── xingqu.module.ts
│   │   ├── xingqu.scss
│   │   └── xingqu.ts
│   └── zhuce
│       ├── zhuce.html
│       ├── zhuce.module.ts
│       ├── zhuce.scss
│       └── zhuce.ts
├── providers
│   ├── api
│   │   └── api.ts
│   └── storage
│       └── storage.ts
├── service-worker.js
└── theme
    └── variables.scss

52 directories, 223 files
```