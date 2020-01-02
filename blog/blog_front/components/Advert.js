import React, { Component } from 'react'
import '../public/style/components/advert.css'
const Advert =(props)=>{

    return (
        <div className="ad-div">
       <div>
           <div><img style={{width:"100%",height:100}} src={props.url}></img></div>
       </div>
        </div>
    )
}
export default Advert