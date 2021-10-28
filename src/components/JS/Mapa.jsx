import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../styles/styled'
import { Link } from "react-router-dom";
import logo from '../images/Mapa.png'

const Div = styled.div`
    padding: 10px;
    background: url(${logo});
    width: 45rem;
    height: 30rem;
    margin-top: 0.8rem;
    margin-bottom: 0.1rem;
    border-radius:25px;
    border: #C0C0C0 solid 1px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    text-align: center;
`

export default function Mapa(){
    return(
        <Fragment>
            <Title>
                <Link to="/"><Button>HOME</Button></Link> 
                <Button>CLEAR</Button>
                <i>RPG BOARD GAME</i>
                <Link to="/rules"><Button>RULES</Button></Link> 
                <Link to="/map"><Button>MAPS</Button></Link> 
            </Title>
            <Div>

            </Div>

        </Fragment>
    )
}