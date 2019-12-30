import React, { Component } from "react";
import { Button, Card,Icon, Modal } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

export default class ModalDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visible_one:false
        }
    }
    handleOk=e=>{
        this.setState({
            visible_one:false
        })
    }
    handlCancle=e=>{
        this.setState({
            visible_one:false
        })
    }
    showModal=e=>{
        this.setState({
            visible_one:true
        })
    }
    
  render() {
    return (
      <div>
        <Card title="基础弹窗">
          <Button type="primary" onClick={this.showModal}>open</Button>
        
        </Card>
        <Modal 
        title="基本弹窗"
         visible={this.state.visible_one}
         onOk={this.handleOk}
         onCancel={this.handlCancle}
         >
         <h3 style={{color:"#dc7734"}}>你确定要打开新的连接吗？</h3>
        </Modal>
        
        
      </div>
    );
  }
}
