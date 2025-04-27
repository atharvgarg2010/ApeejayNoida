import React from 'react'
import './Slide.css'

export default function Slide(props) {
    return (
        <div className="card1">
            <div className="image"><img src={props.image} alt="" /></div>
            <div className="content">
                <p href="#">
                    <span className="title1">
                        {props.name}
                    </span>
                    <br />
                    <span>{props.currentPosition}</span>
                </p>

                    <p>{props.batch}</p>
                <p className="desc">
                    {props.description}
                </p>

                
            </div>
        </div>
    )
}
