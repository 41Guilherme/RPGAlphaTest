import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import './Page.css'
import logo1 from '../images/IcoCru.png'
import logo2 from '../images/IcoLep.png'
import logo3 from '../images/IcoDoc.png'
import logo4 from '../images/IcoVes.png'
import logo5 from '../images/IcoJes.png'
import logo6 from '../images/IcoBan.png'
import Roll from "./RollZone";


const LifeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 90%;
    height: 100%;
    flex-wrap: wrap;
`

const Play1 = styled.div`
    background-image: url(${logo1});
    border-radius: 50px;
    border: solid 3px #708090;
    width: 12%;
    height: 51%;
`
const Play2 = styled.div`
    background-image: url(${logo2});
    border-radius: 50px;
    border: solid 3px #DAA520;
    width: 12%;
    height: 51%;
`
const Play3 = styled.div`
    background-image: url(${logo3});
    border-radius: 50px;
    border: solid 3px #006400;
    width: 12%;
    height: 51%;
`
const Play4 = styled.div`
    background-image: url(${logo4});
    border-radius: 50px;
    border: solid 3px #8B4513;
    width: 12%;
    height: 51%;
`
const Play5 = styled.div`
    background-image: url(${logo5});
    border-radius: 50px;
    border: solid 3px #8B0000;
    width: 12%;
    height: 51%;
`
const Play6 = styled.div`
    background-image: url(${logo6});
    border-radius: 50px;
    border: solid 3px  #4169E1;
    width: 12%;
    height: 51%;
`

const DadosRoll = styled.div`
    width: 100%;
    height: 3rem;
`


export default function Data(props){
    return(
        <Fragment>
            <LifeDiv>
                <Play1/>
                <Play2/>
                <Play3/>
                <Play4/>
                <Play5/>
                <Play6/>
                <DadosRoll>
                    <Roll 
                    v1 = {props.v1} 
                    v2 = {props.v2} 
                    v3 = {props.v3}
                    v4 = {props.v4}
                    v5 = {props.v5}
                    v6 = {props.v6}
                    />
                </DadosRoll>
            </LifeDiv>
        </Fragment>
    );


}