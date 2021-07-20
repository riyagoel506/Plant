import React from 'react';
import './login.css'

const Image = props =>{
    console.log(props)
    return(
        <>
        <div className="container">

        <div className= " col-lg-8 frame">
        <img src = {props.image} width="500px" heigth="500px" />
        <h4 className="comment"> {props.comment} </h4>
        </div>

        </div>
        </>
    )
}
export default Image