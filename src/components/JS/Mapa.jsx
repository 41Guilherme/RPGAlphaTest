import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../styles/styled'
import { Link } from "react-router-dom";


const Div = styled.div`
        background: url('https://media.istockphoto.com/photos/stone-wall-background-picture-id1000098722?k=20&m=1000098722&s=170667a&w=0&h=eC-v5ERg0vizV5r-VGUSSEIE8Isa1-MwCPqAXKILz78=') ;
        width: 45rem;
        height: 50rem;
        margin-top: 0.8rem;
        margin-bottom: 0.1rem;
        border-radius:25px;
        border: #C0C0C0 solid 1px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;

        header{
            padding: 5px;
            background: #fff;
            border: 1px black solid;
            h2{
                margin: 0;
                margin-bottom: 5px;
            }
        }
        .c1{
            background-color: #708090;
        }
        .c2{
            background-color: #DAA520;
        }
        .c3{
            background-color: #006400;
        }
        .c4{
            background-color: #8B4513;
        }
        .c5{
            background-color: #8B0000;
        }
        .c6{
            background-color: #4169E1;
        }
        div{
            display: flex;
            justify-content: flex-start;
            font-weight: 700;
            gap: 25px;
        }
        button{
            border-radius: 25px;
        }

`



export default function Mapa(){
    return(
        <Fragment>
            <Title>
                <Link to="/"><Button>HOME</Button></Link> 
                <Button>CLEAR</Button>
                <i>RPG BOARD GAME</i>
                <Link to="/rules"><Button>HP CHAR</Button></Link> 
                <Link to="/map"><Button>STATS</Button></Link> 
            </Title>
            <Div>
                <header className="c1">
                    <h2>Crusader</h2> 
                    <hr/>
                    <div>
                        
                        <span> INSANIDADE: 100  <button>+</button> <button>-</button> </span>
                        <span> ENFERMIDADE: 100 <button>+</button> <button>-</button> </span>
                        <span> 
                            <details> 
                                <summary>Lista de Sequelas</summary>
                                
                            </details> 
                        </span>
                    </div>
                </header>
                <header className="c2">
                    <h2>Leper</h2> 
                    <hr/>
                    <div>
                        
                        <span> INSANIDADE: 100  <button>+</button> <button>-</button> </span>
                        <span> ENFERMIDADE: 100 <button>+</button> <button>-</button> </span>
                        <span> 
                            <details> 
                                <summary>Lista de Sequelas</summary>
                                
                            </details> 
                        </span>
                    </div>
                </header>
                <header className="c3">
                    <h2>Plague Doctor</h2>
                    <hr/>
                    <div>
                        
                        <span> INSANIDADE: 100  <button>+</button> <button>-</button> </span>
                        <span> ENFERMIDADE: 100 <button>+</button> <button>-</button> </span>
                        <span> 
                            <details> 
                                <summary>Lista de Sequelas</summary>
                                
                            </details> 
                        </span>
                    </div>
                </header>

                <header className="c4">
                    <h2>Vestal</h2>
                    <hr/>
                    <div>
                        
                        <span> INSANIDADE: 100  <button>+</button> <button>-</button> </span>
                        <span> ENFERMIDADE: 100 <button>+</button> <button>-</button> </span>
                        <span> 
                            <details> 
                                <summary>Lista de Sequelas</summary>
                                
                            </details> 
                        </span>
                    </div>
                </header>
                <header className="c5">
                    <h2>Jester</h2>
                    <hr/>
                    <div>
                        <span> INSANIDADE: 100  <button>+</button> <button>-</button> </span>
                        <span> ENFERMIDADE: 100 <button>+</button> <button>-</button> </span>
                        <span> 
                            <details> 
                                <summary>Lista de Sequelas</summary>
                                
                            </details> 
                        </span>
                    </div>
                </header>
                <header className="c6">
                    <h2>Bandit</h2>
                    <hr/>
                    <div>
                        
                        <span> INSANIDADE: 100  <button>+</button> <button>-</button> </span>
                        <span> ENFERMIDADE: 100 <button>+</button> <button>-</button> </span>
                        <span> 
                            <details> 
                                <summary>Lista de Sequelas</summary>
                                
                            </details> 
                        </span>
                    </div>
                </header>
            </Div>

        </Fragment>
    )
}