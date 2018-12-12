# database-design

### 文章管理

**文章表**

| 字段       | 数据类型           | 说明       |
| -------- | -------------- | -------- |
| aid      | int            | 文章ID（主码） |
| atitle   | varchar(40)    | 文章标题     |
| acontent | varchar(10000) | 文章内容     |
| astatus  | bool           | 文章状态     |
| atran    | int            | 文章转发量    |
| agood    | int            | 文章点赞量    |
| atime    | varchar(20)    | 文章发布时间   |
| uid      | int            | 用户ID（外码） |

 **文章和栏目表**

| 字段   | 数据类型        | 说明   |
| ---- | ----------- | ---- |
| aid  | int         | 文章ID |
| acol | varchar(10) | 文章栏目 |

### 说说管理

**说说表**

| 字段       | 数据类型          | 说明       |
| -------- | ------------- | -------- |
| sid      | int           | 说说ID（主码） |
| stitle   | varchar(40)   | 说说标题     |
| scontent | varchar(1000) | 说说内容     |
| sstatus  | bool          | 说说状态     |
| stran    | int           | 说说转发量    |
| sgood    | int           | 说说点赞量    |
| stime    | varchar(20)   | 说说发布时间   |
| uid      | int           | 用户ID     |

### 用户管理

**用户表**

| 字段      | 数据类型        | 说明           |
| ------- | ----------- | ------------ |
| uid     | int         | 用户ID（主码）     |
| uname   | varchar(10) | 用户姓名（unique） |
| uimage  | varchar(40) | 用户头像         |
| usex    | char(4)     | 用户性别         |
| utel    | varchar(20) | 用户手机号码       |
| upass   | varchar(20) | 用户密码         |
| ustatus | bool        | 用户状态         |

**关注用户表**

| 字段   | 数据类型 | 说明     |
| ---- | ---- | ------ |
| uid  | int  | 用户ID   |
| upid | int  | 关注用户ID |

### 评论管理

**评论表**

| 字段       | 数据类型          | 说明       |
| -------- | ------------- | -------- |
| cid      | int           | 评论ID（主码） |
| ccontent | varchar(1000) | 评论内容     |
| ctime    | varchar(20)   | 评论发布时间   |
| cstatus  | bool          | 评论状态     |
| cgood    | int           | 评论点赞量    |
| uid      | int           | 用户ID（外码） |

**意见反馈**

| 字段       | 数据类型          | 说明       |
| -------- | ------------- | -------- |
| rid      | int           | 反馈ID（主码） |
| rcontent | varchar(1000) | 反馈内容     |
| rtime    | varchar(20)   | 反馈发布时间   |
| rstatus  | bool          | 反馈状态     |
| rtel     | int           | 反馈手机号码   |
| uid      | int           | 用户ID（外码） |

### 相册管理

**相册表**

| 字段      | 数据类型          | 说明       |
| ------- | ------------- | -------- |
| xid     | int           | 相册ID（主码） |
| xname   | varchar(1000) | 相册名字     |
| xtime   | varchar(20)   | 相册发布时间   |
| xstatus | bool          | 相册状态     |
| xcount  | int           | 相册张数     |
| xlocal  | varchar(100)  | 相册地址     |
| uid     | int           | 用户ID（外码） |

**照片表**

| 字段      | 数据类型         | 说明       |
| ------- | ------------ | -------- |
| pid     | int          | 照片ID（主码） |
| pname   | varchar(100) | 照片名字     |
| ptime   | varchar(20)  | 照片发布时间   |
| pstatus | bool         | 照片状态     |
| ptype   | varchar(10)  | 照片类型     |
| plocal  | varchar(100) | 照片地址     |
| xid     | int          | 相册ID（外码） |

### 视频管理

**视频表**

| 字段      | 数据类型          | 说明       |
| ------- | ------------- | -------- |
| vid     | int           | 视频ID（主码） |
| vname   | varchar(1000) | 视频名字     |
| vtime   | varchar(20)   | 视频发布时间   |
| vstatus | bool          | 视频状态     |
| vtype   | varchar(10)   | 视频类型     |
| vlocal  | varchar(100)  | 视频地址     |
| uid     | int           | 用户ID（外码） |

### 成长树管理

**成长树表**

| 字段      | 数据类型        | 说明        |
| ------- | ----------- | --------- |
| tid     | int         | 成长树ID（主码） |
| tcount  | int         | 成长树果实个数   |
| ttime   | varchar(20) | 成长树发布时间   |
| tstatus | bool        | 成长树状态     |
| uid     | int         | 用户ID（外码）  |

**果实表**

| 字段      | 数据类型         | 说明        |
| ------- | ------------ | --------- |
| fid     | int          | 果实ID（主码）  |
| fname   | varchar(100) | 果实名字      |
| ftime   | varchar(20)  | 果实发布时间    |
| fstatus | bool         | 果实状态      |
| tid     | int          | 成长树ID（外码） |
