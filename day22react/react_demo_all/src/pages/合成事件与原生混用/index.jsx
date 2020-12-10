import React, { Component } from 'react';
import {Button} from 'antd'
//点击按钮显示二维码，点击非二维码区域隐藏
export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
  render() {
    return (
          <div>
            <div>二维码</div>
               <Button type="primary">二维码</Button>
               <div className="qrcode" >
                   <img src={require("../../images/1.jpg")} style={{width:"100px",height:"100px"}} alt=""/>
               </div>
           </div>

    );
  }
}
