import React, { Component } from 'react'
import { Card, Spin, Row, Col, Avatar } from 'antd'
const { Meta } = Card;

export default class GalleyDemo extends Component {
    render() {
        const imgs = [
            ["logo.jpg", "logo.jpg", "logo.jpg", "logo.jpg", ],
            ["logo.jpg", "logo.jpg", "logo.jpg", "logo.jpg",],
            ["logo.jpg", "logo.jpg", "logo.jpg", "logo.jpg", ],
            ["logo.jpg", "logo.jpg", "logo.jpg", "logo.jpg", ],
          
        ]
        const imgList = imgs.map((list) => {
            return list.map((item, index) => {
                console.log(item);

                return <Card style={{marginTop:20}} key={index}
                    cover={<img  src={"/images/"+item}></img>}>
                    <Meta
                        avatar={<Avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=205543427,1062854480&fm=26&gp=0.jpg"/>}
                        title="新年快乐"
                        description="happy new year"
                    />
                </Card>


            })
        })


        return (
            <div>
                <Card title="画廊"  >
                    <Row gutter={20}>
                        <Col  md={4}>
                            {imgList[0]}
                        </Col>
                        <Col md={4}>
                            {imgList[1]}
                        </Col>
                        <Col md={4}>
                            {imgList[2]}
                        </Col>
                        <Col md={4}>
                            {imgList[3]}
                        </Col>
                        
                    </Row>
                </Card>

            </div>
        )
    }
}
