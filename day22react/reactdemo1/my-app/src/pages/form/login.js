import React, { Component } from 'react'
import { Card, Form, Input,Button, message } from 'antd'
const FormItem=Form.Item
 class Login extends Component {
    render() {
        const {getFieldDecorator}=this.props.form
        return (
            <div>
                <Card title={"登录行内组件"}>
                    <Form layout="inline">
                        <FormItem>
                            
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="确认密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title={"水平组件"} style={{marginTop:20}}>
                    <Form style={{width:200}} layout="horizontal">
                        <FormItem>
                            {
                                getFieldDecorator("username",{
                                    initialValue:"",
                                    rules:[{
                                        required:true,
                                        message:"请输入你的姓名"
                                    },{
                                        min:5,
                                        message:"最低了"
                                    }]
                                })( <Input placeholder="名字"></Input>)
                            }
                           
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator("password",{
                                    initialValue:"",
                                    rules:[{
                                        required:true,
                                        message:"请输入你的姓名"
                                    }]
                                })( <Input placeholder="密码"></Input>)
                            }
                           
                        </FormItem> 
                        <FormItem>
                            <Button onClick={()=>{
                              let info=  this.props.form.getFieldsValue()
                            
                              this.props.form.validateFields((err,values)=>{
                                  console.log(err);
                                  
                                  if(!err){
                                      message.success(`${info.username}恭喜你登录成功啦`)
                                  }else{

                                  }
                              })
                              
                            }} type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
// 关键
const LoginForm=Form.create()(Login)
export default (LoginForm)
