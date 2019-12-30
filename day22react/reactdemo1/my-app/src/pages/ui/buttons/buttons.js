import React, { Component } from "react";
import { Button, Card,Icon } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

export default class ButtonsDemo extends Component {
  render() {
    return (
      <div>
        <Card title="基础组件">
          <Button type="danger">danger</Button>
          <Button type="dashed">dashed</Button>
          <Button type="default">default</Button>
          <Button type="ghost">ghost</Button>
          <Button type="link">link</Button>
          <Button type="primary">primary</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delect">删除</Button>
          <Button icon="search">搜索</Button>
          <Button icon="download">下载</Button>
        </Card>
        <Card title="loading">
          <Button loading>loading</Button>
          <Button size="small" loading>
            编辑
          </Button>
          <Button loading size="large">
            删除
          </Button>
          <Button type="primary" icon="poweroff" loading>
            搜索
          </Button>
          <Button shape="round" icon="download">下载</Button>
        </Card>
        <Card title="按钮组">
         <ButtonGroup>
             <Button type='primary' icon="left">返回</Button>
             <Button type='primary'>前进<Icon type="right"/></Button>
         </ButtonGroup>
        </Card>
      </div>
    );
  }
}
