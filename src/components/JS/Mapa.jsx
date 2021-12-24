import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../styles/styled'
import { Link } from "react-router-dom";


const Div = styled.div`
        background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfcu4kpkjo3wlvpfFZB06yvvEA2riYgW4Vw&usqp=CAU') ;
        width: 45rem;
        height: 50rem;
        margin-top: 0.8rem;
        margin-bottom: 0.1rem;
        border-radius:25px;
        border: #C0C0C0 solid 1px;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
`



export default function Mapa(){
    return(
        <Fragment>
            <Title>
                <Link to="/"><Button>HOME</Button></Link> 
                <Button>CLEAR</Button>
                <i>RPG BOARD GAME</i>
                <Link to="/rules"><Button>HP CHAR</Button></Link> 
                <Link to="/map"><Button>ITENS</Button></Link> 
            </Title>
            <Div>


            </Div>

        </Fragment>
    )
}