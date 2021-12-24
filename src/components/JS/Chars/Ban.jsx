import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../../styles/styled'
import { Link } from "react-router-dom";
import c1 from '../../images/C6.png';
import { useStates } from "../provider";

const Div = styled.div`
    background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfcu4kpkjo3wlvpfFZB06yvvEA2riYgW4Vw&usqp=CAU') ;
    width: 45rem;
    height: 50rem;
    margin-top: 0.8rem;
    margin-bottom: 0.1rem;
    border-radius:25px;
    border: #C0C0C0 solid 1px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    text-align: center;
    
`
const FotoArea = styled.div`
    background: url(${c1})no-repeat ;
    background-color: #4169E1;
    padding: 10px;
    width: 45%;
    height: 280px;
    border-top-left-radius: 25px;
    border: solid #000 4px;
    border-bottom-right-radius: 25px;
    margin-bottom: 0;
`
const Stats = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    width: 47%;
    height: 280px;
    border-top-right-radius: 25px;
    margin-bottom: 0;
    button{
        background-color: #4169E1;
        border-radius: 20rem;
        font-size: 1.5rem;
    }
    
`
const Força = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #000;
    padding: 10px;
    width: 100px;;
    height:100px;
    border-radius: 25px;
    border: solid #000 3px;
    color: #000;
    font-size: 1rem;
    span{
        width: 100%;
        margin: 0;
        font-size: 1.2rem;
        background-color: #000; 
        border-radius: 10px;
        color: #4169E1;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
`
const Dex = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #000;
    padding: 10px;
    width: 100px;;
    height:100px;
    border-radius: 25px;
    border: solid #000 3px;
    color: #000;
    font-size: 1rem;
    span{
        width: 100%;
        margin: 0;
        font-size: 1.2rem;
        background-color: #000; 
        border-radius: 10px;
        color: #4169E1;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
`
const Wis = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #000;
    padding: 10px;
    width: 100px;;
    height:100px;
    border-radius: 25px;
    border: solid #000 3px;
    color: #000;
    font-size: 1rem;
    span{
        width: 100%;
        margin: 0;
        font-size: 1.2rem;
        background-color: #000; 
        border-radius: 10px;
        color: #4169E1;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
`
const Con = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #000;
    padding: 10px;
    width: 100px;;
    height:100px;
    border-radius: 25px;
    border: solid #000 3px;
    color: #000;
    font-size: 1rem;
    span{
        width: 100%;
        margin: 0;
        font-size: 1.2rem;
        background-color: #000; 
        border-radius: 10px;
        color: #4169E1;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
`
const Skills = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 410px;
    
`
const Part1 = styled.div`
    background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25b7ba9a-dc48-4015-923b-cb47a37af504/dawoesj-b8fe4a88-cfaf-4223-83d9-33019a12a273.jpg/v1/fill/w_1024,h_705,q_75,strp/grid_para_rpg_de_mesa_by_rarameth_dawoesj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA1IiwicGF0aCI6IlwvZlwvMjViN2JhOWEtZGM0OC00MDE1LTkyM2ItY2I0N2EzN2FmNTA0XC9kYXdvZXNqLWI4ZmU0YTg4LWNmYWYtNDIyMy04M2Q5LTMzMDE5YTEyYTI3My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.evP5wSLH6dEQpQtat60ENqWTW7QkvTwQBFMq-_vE6ng ');
    padding: 10px;
    width: 47%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
    color: #4169E1;
    h1{
        background-color: #000;
        border: solid 2px #000;
        height: 40px;
        width: 340px;
        position: absolute;
        justify-content: center;
        margin-bottom: 0;
    }
    div{
        background-color: white;
        display: flex;
        width: 45%;
        height: 30%;
        margin: 2px;
        margin-bottom: 5px;
        border-radius: 20px;
        border: solid 2px #000;
        color: #910c0c;
        padding: 2px;
        justify-content: center;
        flex-direction: column;
        font-weight: 700;
        font-size: 1.2rem;
        p{
            font-weight: 700;
            color: #000;
            font-size: 0.9rem;
        }

    }
    header{
        display: flex;
        width: 90%;
        height: 50px;
        border-radius: 20px;
    }
`




export default function Cruze(){

    const { forca6,dex6,wis6,con6,setForca6, setDex6, setWis6, setCon6} = useStates()

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
               <FotoArea/>
                <Stats>
                    <Força><span>Força <hr/> {forca6} <br/><button onClick={() => setForca6(forca6 + 1)}>+</button> <span>&nbsp; &nbsp;</span> <button onClick={() => setForca6(forca6 - 1)} >-</button></span></Força>
                    <Dex><span>Destreza <hr/> {dex6}<br/><button onClick={() => setDex6(dex6 + 1)}>+</button> <span>&nbsp; &nbsp;</span> <button onClick={() => setDex6(dex6 - 1)}>-</button></span></Dex>
                    <Wis><span>Sabedoria <hr/> {wis6} <br/><button onClick={() => setWis6(wis6 + 1)}>+</button> <span>&nbsp; &nbsp;</span>  <button onClick={() => setWis6(wis6 - 1)}>-</button></span></Wis>
                    <Con><span>Constituição <hr/> {con6} <br/> <button onClick={() => setCon6(con6 + 1)}>+</button> <span>&nbsp; &nbsp;</span> <button onClick={() => setCon6(con6 - 1)}>-</button></span></Con>
                </Stats>

                <Skills>
                    <Part1>
                        <h1>Skills</h1>
                        <header></header>
                        <div>
                            OLHO DE ÁGUIA
                            <p>Seus ataques não podem ser esquivados por inimigos</p>
                        </div>
                        <div>
                            TIRO EXPLOSIVO
                            <p>Mega tiro de polvora que estralhaça um inimigo proximo</p>
                        </div>
                        <div>
                            TIRO DUPLO
                            <p>Seus ataques com pistolas são duplicados</p>
                        </div>
                        <div>
                            TIRO FATAL
                            <p>Gasta os dois turnos do Tiro Duplo em um único tiro preciso</p>
                        </div>
                    </Part1>
                    <Part1>
                        <h1>Inventário</h1>
                        <header></header>
                        <div>
                            PISTOLAS GEMEAS
                        </div>
                        <div>
                            LAMINA DE ASSASSINO
                        </div>
                        <div>
                            MANTO NEGRO
                        </div>
                        <div>
                            ADAGAS DE ARREMESSO
                        </div>
                    </Part1>
                </Skills>
               
               
            </Div>

        </Fragment>
    )
}