import React, { Component } from 'react'
import { Carousel } from 'antd'

export default class CarouselDemo extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay={true} effect="fade">
                    <div>
                        <img src={"/images/banner1.webp"}></img>
                    </div>
                    <div>
                    <img src={"/images/banner2.webp"}></img>
                    </div>
                    <div>
                    <img src={"/images/banner3.webp"}></img>
                    </div>
                    
                </Carousel>
            </div>
        )
    }
}
