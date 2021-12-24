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
        background: url('data:image/jpeg;base64,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') ;
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
        img{
            border-radius: 50px;
            border: solid 6px ;
        }
        .c1{
            border-color:#708090;
        }
        .c2{
            border-color:#DAA520;
        }
        .c3{
            border-color:#006400;
        }
        .c4{
            border-color: #8B4513;
        }
        .c5{
            border-color:#8B0000;
        }
        .c6{
            border-color:#4169E1;
        }
        button{
            color: #fff;
            border-color: #fff;
            margin-top: 30px;
            width: 50px;
            height: 50px;
            font-size: 2rem;
            background: url('https://p4.wallpaperbetter.com/wallpaper/490/861/235/wood-pretty-picture-background-wallpaper-preview.jpg');
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
        span{
            color: #ffffff;
            font-size: 1rem;
            font-weight: 700;
        }
        .x{
            display: flex;
            flex-direction: column;
            justify-content: start;
            header{
                color: #fff;
                margin: 2.1rem;
                font-size: 2rem;
                font-weight: 700;
                background-color: #000;
                border-radius: 25px;
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
                    height: 45px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #000;
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
                    height: 45px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #000;
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
                    height: 45px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #000;
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
                    height: 45px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #000;
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
                    height: 45px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #000;
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
                    height: 45px;
                    width: 30rem;
                    padding: 5px;
                    background-color: #000;
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
                <Link to="/rules"><Button>HP CHAR</Button></Link> 
                <Link to="/map"><Button>ITENS</Button></Link> 
            </Title>
            <Div>
                
                <div className="x">
                <header>HP DA PARTY</header>
                   <div>
                       <img className='c1' src={C1} alt="LOGO" />
                       <span> HP: {value1}<div className="progress-bar1" ></div></span>
                       <button onClick={() => setValue1(value1 + 10)}>+</button>
                       <button onClick={() => setValue1(value1 - 10)}>-</button>
                   </div>
                   <div>
                        <img className='c2' src={C2} alt="LOGO" />
                        <span>HP: {value2}<div className="progress-bar2" ></div></span>
                        <button onClick={() => setValue2(value2 + 10)}>+</button>
                        <button onClick={() => setValue2(value2 - 10)}>-</button>
                   </div>
                   <div>
                        <img className='c3' src={C3} alt="LOGO" />
                        <span>HP: {value3}<div className="progress-bar3" ></div></span>
                        <button onClick={() => setValue3(value3 + 10)}>+</button>
                        <button onClick={() => setValue3(value3 - 10)}>-</button>
                   </div>
                   <div>
                       <img className='c4' src={C4} alt="LOGO" />
                       <span>HP: {value4}<div className="progress-bar4" ></div></span>
                       <button onClick={() => setValue4(value4 + 10)}>+</button>
                       <button onClick={() => setValue4(value4 - 10)}>-</button>
                   </div>
                   <div>
                        <img className='c5' src={C5} alt="LOGO" />
                        <span>HP: {value5}<div className="progress-bar5" ></div></span>
                        <button onClick={() => setValue5(value5 + 10)}>+</button>
                        <button onClick={() => setValue5(value5 - 10)}>-</button>
                   </div>
                   <div>
                        <img className='c6' src={C6} alt="LOGO" />
                        <span>HP: {value6}<div className="progress-bar6" ></div></span>
                        <button onClick={() => setValue6(value6 + 10)}>+</button>
                        <button onClick={() => setValue6(value6 - 10)}>-</button>
                   </div>
                
                </div>
            </Div>

        </Fragment>
    )
}