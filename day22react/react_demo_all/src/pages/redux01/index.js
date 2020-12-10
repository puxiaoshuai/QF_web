import React, { Component } from 'react'
import {Button,Input,List,Icon} from 'antd'
import './index.css'
import store from './store/index'
import axios from 'axios'

import { ChangInputAction, AddItemAction, DelItemAction, DoneItemAction } from './store/actionCreaters'
export default class Tolist extends Component {
    constructor(props) {
        super(props)
       //获取 仓库中的默认值
        this.state = store.getState()
        // this.changInput=this.changInput.bind(this)
        // this.clickbtn=this.clickbtn.bind(this)
        
        //订阅
        this.storeChange=this.storeChange.bind(this)

        store.subscribe(this.storeChange)
        
    
    }
    
    componentDidMount(){
        axios.get("http://gank.io/api/today").then((res)=>{
            console.log(res);
            
        }).catch(e=>{
            console.log(e);
            
        })
        
    }
    
    changInput(e){
        const action=ChangInputAction(e.target.value)
        store.dispatch(action)
        
        
    }
    
    //添加
    clickbtn(){
        const action=AddItemAction()
        store.dispatch(action)
        // alert(this.state.inputValue)
        
    }
    donebtn(index){
        const action=DoneItemAction(index)
        store.dispatch(action)
    }
    del=(index)=>{
        const action =DelItemAction(index)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    render() {
        

        return (
            <div className="box">
                <Input style={{width:'240px',marginRight: '20px'}} 
                placeholder={this.state.inputValue} 
                onChange={this.changInput}
                value={this.state.inputValue}
                />
               <Button onClick={this.clickbtn} type="primary">添加</Button>
               <div style={{margin:"10px",width:'300px'}}>
  
                  <List
                      header={<div><h3>明天的代办事项</h3></div>}
                      bordered
                      dataSource={this.state.list}
                      renderItem={(item,index) => {
                          return item.done?<List.Item  style={{"text-decoration":"line-through"}} >{item.title}<Icon onClick={this.del.bind(this,index)} style={{backgroundColor:"#FFF"}} type="delete" /></List.Item>:
                        <List.Item  >{item.title}<Button onClick={this.donebtn.bind(this,index)} type="primary" style={{marginLeft:'10px',marginRight:'10px'}}>完成</Button><Icon onClick={this.del.bind(this,index)} style={{backgroundColor:"#FFF"}} type="delete" /></List.Item>

                      }}
                  />
                  
               </div>
            </div>
        )
    }
}
