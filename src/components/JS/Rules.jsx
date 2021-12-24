import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../styles/styled'
import { Link } from "react-router-dom";
import C1 from "../images/IcoCru.png"
import C2 from "../images/IcoLep.png"
import C3 from "../images/IcoDoc.png"
import C4 from "../images/IcoVes.png"
import C5 from "../images/IcoJes.png"
import C6 from "../images/IcoBan.png"
import { useStates } from "./provider";


export default function Rules(){

    

    const {value1, value2, value3, value4, value5, value6,
        setValue1, setValue2, setValue3, setValue4, setValue5, setValue6} = useStates()
    
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
        button{
            margin-top: 30px;
            width: 50px;
            height: 50px;
            font-size: 2rem;
        }
        button:hover{
            transform: scale(1.1);
            transition: all 0.5s;
            color: red;
            border-color: red;
        }
        h1{
            background: #000;
            color: white;
            font-size: 700;
        }
        .x{
            display: flex;
            flex-direction: column;
            justify-content: start;
            header{
                margin: 2.1rem;
                font-size: 2rem;
                font-weight: 700;
            }
            div{
                margin: 0.5rem;
                display: flex;
    
                .progress-bar1{
                /* vamos declarar nossa
                    variável com o nome de
                    "progress". Ela terá seu
                    valor entre 0 e 100.
                    */
                    --progress: ${value1};
                    height: 50px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #ccc;
                    display: flex;
                }
    
                .progress-bar1::before{
                    content: '';
                    width: calc(var(--progress) * 1%);
                    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
                    transition: all 0.2s ease;
                }

                .progress-bar2{
                /* vamos declarar nossa
                    variável com o nome de
                    "progress". Ela terá seu
                    valor entre 0 e 100.
                    */
                    --progress: ${value2};
                    height: 50px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #ccc;
                    display: flex;
                }
    
                .progress-bar2::before{
                    content: '';
                    width: calc(var(--progress) * 1%);
                    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
                    transition: all 0.2s ease;
                }
                .progress-bar3{
                /* vamos declarar nossa
                    variável com o nome de
                    "progress". Ela terá seu
                    valor entre 0 e 100.
                    */
                    --progress: ${value3};
                    height: 50px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #ccc;
                    display: flex;
                }
    
                .progress-bar3::before{
                    content: '';
                    width: calc(var(--progress) * 1%);
                    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
                    transition: all 0.2s ease;
                }
                .progress-bar4{
                /* vamos declarar nossa
                    variável com o nome de
                    "progress". Ela terá seu
                    valor entre 0 e 100.
                    */
                    --progress: ${value4};
                    height: 50px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #ccc;
                    display: flex;
                }
    
                .progress-bar4::before{
                    content: '';
                    width: calc(var(--progress) * 1%);
                    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
                    transition: all 0.2s ease;
                }

                .progress-bar5{
                /* vamos declarar nossa
                    variável com o nome de
                    "progress". Ela terá seu
                    valor entre 0 e 100.
                    */
                    --progress: ${value5};
                    height: 50px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #ccc;
                    display: flex;
                }
    
                .progress-bar5::before{
                    content: '';
                    width: calc(var(--progress) * 1%);
                    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
                    transition: all 0.2s ease;
                }

                .progress-bar6{
                /* vamos declarar nossa
                    variável com o nome de
                    "progress". Ela terá seu
                    valor entre 0 e 100.
                    */
                    --progress: ${value6};
                    height: 50px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #ccc;
                    display: flex;
                }
    
                .progress-bar6::before{
                    content: '';
                    width: calc(var(--progress) * 1%);
                    background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
                    transition: all 0.2s ease;
                }
            }
            }
        }
    `
    
       
   

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
                
                <div className="x">
                    <header>HP DA PARTY</header>
                   <div>
                       <img src={C1} alt="LOGO" />
                       <span> {value1}<div className="progress-bar1" ></div></span>
                       <button onClick={() => setValue1(value1 + 10)}>+</button>
                       <button onClick={() => setValue1(value1 - 10)}>-</button>
                   </div>
                   <div>
                        <img src={C2} alt="LOGO" />
                        <span> {value2}<div className="progress-bar2" ></div></span>
                        <button onClick={() => setValue2(value2 + 10)}>+</button>
                        <button onClick={() => setValue2(value2 - 10)}>-</button>
                   </div>
                   <div>
                        <img src={C3} alt="LOGO" />
                        <span> {value3}<div className="progress-bar3" ></div></span>
                        <button onClick={() => setValue3(value3 + 10)}>+</button>
                        <button onClick={() => setValue3(value3 - 10)}>-</button>
                   </div>
                   <div>
                       <img src={C4} alt="LOGO" />
                       <span> {value4}<div className="progress-bar4" ></div></span>
                       <button onClick={() => setValue4(value4 + 10)}>+</button>
                       <button onClick={() => setValue4(value4 - 10)}>-</button>
                   </div>
                   <div>
                        <img src={C5} alt="LOGO" />
                        <span> {value5}<div className="progress-bar5" ></div></span>
                        <button onClick={() => setValue5(value5 + 10)}>+</button>
                        <button onClick={() => setValue5(value5 - 10)}>-</button>
                   </div>
                   <div>
                        <img src={C6} alt="LOGO" />
                        <span> {value6}<div className="progress-bar6" ></div></span>
                        <button onClick={() => setValue6(value6 + 10)}>+</button>
                        <button onClick={() => setValue6(value6 - 10)}>-</button>
                   </div>
                
                </div>
            </Div>

        </Fragment>
    )
}