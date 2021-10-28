import React from "react";
import { Fragment } from "react";
import styled from "styled-components";


const Div = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        gap: none;
        margin-left: 0;
        margin-right: 0;
    }

`

const Input = styled.input`
    width: 9%;
    height: 50px;
    border-radius: 10px;
    background-color: #311f0a;
    color: #fff;
    font-size: 2rem;
    
`


export default function Roll(props){

    var x = props
    var x1 = x.v1
    var x2 = x.v2
    var x3 = x.v3
    var x4 = x.v4
    var x5 = x.v5
    var x6 = x.v6

    return(
        <Fragment>
            <Div>
                <Input value={'  ' + x1}></Input>
                
                <Input value={'  ' + x2}></Input>
                
                <Input value={'  ' + x3}></Input>
             
                <Input value={'  ' + x4}></Input>
         
                <Input value={'  ' + x5}></Input>
     
                <Input value={'  ' + x6}></Input>
            </Div>
            
        </Fragment>
    );
}