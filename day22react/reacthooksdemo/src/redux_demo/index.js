import React, { useState, useEffect } from 'react'
import ShowArea from './show_area'
import Buttons from './buttons'
import {Color} from './colors'
export default function Index(){
    return (
        <div>
            <Color>
            <ShowArea/>
            <Buttons/>
            </Color>
        </div>
    )
}