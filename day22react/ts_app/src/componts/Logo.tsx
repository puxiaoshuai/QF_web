import React  from 'react'
import './logo.css'
interface IProprs{
    logo:string,
    className:string,
    alt:string,
}
export const Logo=(props:IProprs)=>{
    const {logo,className,alt}=props
    return (
        <img src={logo} className={className} alt={alt}/>
    )
}

