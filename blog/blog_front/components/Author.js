import React, { Component } from 'react'
import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'

const Author =()=>{
    return (
        <div className="author">
       <div className="author-icon">
         <Avatar size={100} src="http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg"></Avatar>
       </div>
       <div>
       越有故事的人越沉静简单，越肤浅单薄的人越浮躁不安；真正的强者，不是没有眼泪的人，而是含着眼泪依然奔跑的人
       </div>
       <Divider>社交账号</Divider>
       <Avatar size={28} icon="github" className="account"></Avatar>
       <Avatar size={28} icon="qq" className="account"></Avatar>
       <Avatar size={28} icon="wechat" className="account"></Avatar>
        </div>

    )
}
export default Author