import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { useState } from "react";
import { D20 ,D12, D10,D8,D6,D4 } from "./Dados";

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    span{
        display:flex;
        justify-content: center;
        text-align: center;
    }
    input{
        border-color: #fff;
        color: #fff;
        font-size: 2rem;
        background-color: #580f0f ;
        width: 50px;
        height: 35px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        text-align: center;
        margin-top: 1.2rem;
    }
`
const Button = styled.button`
        border: #000 solid 5px;
        width:10.5%;
        height: 4.5rem;
        border-radius: 40px;
        font-size: 2rem;
        display:flex;
        justify-content: center;
        text-align:center;
        align-items: center;
        :hover{
            transform: scale(1.1);
            transition: all 0.5s;
            color: red;
            border-color: red;
        }
    
`

const Button1 = styled.button`
    color: white;
    background-color: black;
    border-color: #fff;
    font-weight: 700;
    width:30px;
    height:40px;
    margin-top: 1.2rem;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    
`
export default function Rolar(){

    const[value, setValue] = useState(0)
    return(
        <Fragment>
            <Div>
                <Button onClick={()=> setValue(value + D20(0))}>D20</Button>
                <Button onClick={()=> setValue(value + D12(0))}>D12</Button>
                <Button onClick={()=> setValue(value + D10(0))}>D10</Button>
                    <span>
                        <input value={value}/>
                        <Button1 onClick={() => setValue(0)}>X</Button1>
                    </span>
                <Button onClick={()=> setValue(value + D8(0))}>D8</Button>
                <Button onClick={()=> setValue(value + D6(0))}>D6</Button>
                <Button onClick={()=> setValue(value + D4(0))}>D4</Button>
            </Div>
        </Fragment>
    );
}