import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import './Page.css';
import cruse from '../images/crusader.png';
import leper from '../images/leper.png';
import jester from '../images/jester.png';
import vestal from '../images/vestal.png';
import doctor from '../images/doctor.png';
import bandit from '../images/bandit.png';
import {Link} from "react-router-dom";
import Data from './BaseBattle';
import { D20, Lista } from './Dados';
import Rolar from './RollDados';

const Div = styled.div`
    padding: 10px;
    background: url('https://media1.giphy.com/media/RkhMKpIYLT9sukfuXg/giphy.gif');
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
const Div1 = styled.div`
    padding: 5px;
    background: url('https://p4.wallpaperbetter.com/wallpaper/490/861/235/wood-pretty-picture-background-wallpaper-preview.jpg');
    width: 45rem;
    height: 10rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius:25px;
    border: #C0C0C0 solid 1px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
`
const Div2 = styled.div`
    padding: 5px;
    background: url('https://st.depositphotos.com/2577341/3022/i/600/depositphotos_30227241-stock-photo-wood-texture-background.jpg');
    width: 45rem;
    height: 5rem;
    margin-top: 0rem;
    margin-bottom: 3rem;
    border-radius:25px;
    border: #C0C0C0 solid 1px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
`
const Title = styled.h1`
    border: #C0C0C0 solid 1px;
    margin-bottom: 0.1rem;
    padding: 2px;
    background-color:#1C1C1C;
    display: flex;
    border-radius: 25px;
    height: 46px;
    text-align: center;
    justify-content: center;
    color: grey;
    font-family:'Times New Roman', Times, serif;
    justify-content: space-around;
    button:hover{
        transform: scale(1.1);
        transition: all 0.5s;
        color: red;
        border-color: red;

    }
`
const Button = styled.button`
    background: url('https://p4.wallpaperbetter.com/wallpaper/490/861/235/wood-pretty-picture-background-wallpaper-preview.jpg');
    color: #fff;
    border-radius: 25px;
    border-color: #fff;
    height: 100%;
    margin-top: 0;
    margin-bottom: 10rem;
`
const Button1 = styled.button`
    background-color: #5e656b;
    color: #000;
    border-radius: 25px;
    border-color: #fff;
`
const Button2 = styled.button`
    background-color: #b68a1a;
    color: #000;
    border-radius: 25px;
    border-color: #fff;
`
const Button3 = styled.button`
    background-color: #025802;
    color: #000;
    border-radius: 25px;
    border-color: #fff; 
`
const Button4 = styled.button`
    background-color: #6e3710;
    color: #000;
    border-radius: 25px;
    border-color: #fff;
`
const Button5 = styled.button`
    background-color: #5f0202;
    color: #000;
    border-radius: 25px;
    border-color: #fff;
`
const Button6 = styled.button`
    background-color: #2347b3 ;
    color: #000;
    border-radius: 25px;
    border-color: #fff;
`
const Char1 = styled.div`
    background: url(${cruse});
    background-color: #000000;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    display: flex;
    width: 9rem;
    height: 10rem;
    border-radius: 25px;
`
const Char2 = styled.div`
    background: url(${leper});
    background-color: #000;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    display: flex;
    width: 9rem;
    height: 10rem;
    border-radius: 25px;
`
const Char3 = styled.div`
    background: url(${doctor});
    background-color: #000;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    display: flex;
    width: 9rem;
    height: 10rem;
    border-radius: 25px;
`
const Char4 = styled.div`
    background: url(${vestal});
    background-color: #000;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    display: flex;
    width: 9rem;
    height: 10rem;
    border-radius: 25px;
`
const Char5 = styled.div`
    background: url(${jester});
    background-color: #000;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    display: flex;
    width: 9rem;
    height: 10rem;
    border-radius: 25px;
`
const Char6 = styled.div`
    background: url(${bandit});
    background-color: #000;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    display: flex;
    width: 9rem;
    height: 10rem;
    border-radius: 25px;
`
const Info1 = styled.div`
    margin: 0;
    margin-top: 95%;
    background: url('https://i.pinimg.com/originals/7d/81/3e/7d813e85d1bffee5936f474a56b6f023.jpg');
    width: 10rem;
    height: 6rem;
    color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`
const Name = styled.h4`
    margin-top: 5px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-around;
`

const Stats = styled.div`
    border-radius: 10px;
    display: flex;
    align-self: center;
    color: #000;
    display: flex;
    justify-content: row;
    justify-content: space-around;
    button:hover{
        transform: scale(1.1);
        transition: all 0.5s;
        color: #1c0853;
        border-color: #1c0853;
    }
`
const StatsF =styled.button`
    padding: 2px;
    background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8LG2lMou7Da_DpT7fj9Hs3xwid9YjxWXIiasCGYIsJCe5wXfX_gEBpCRk1F8DNqREpM&usqp=CAU');
    border-radius: 10px;
    border: solid 1px #fff;
    color: #fff;
    
`


export default function Page(){

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);
    const [value6, setValue6] = useState(0);
    const newLista = Lista

    function Clear(){
        setValue1(0)
        setValue2(0)
        setValue3(0)
        setValue4(0)
        setValue5(0)
        setValue6(0)
    }
    return (
        <Fragment>
            <Title>
                <Link to="/"><Button>HOME</Button></Link> 
                <Button onClick={() => Clear()}>CLEAR</Button>
                <i>RPG BOARD GAME</i>
                <Link to="/rules"><Button>RULES</Button></Link> 
                <Link to="/map"><Button>MAPS</Button></Link> 
            </Title>
            <Div>
                <Char1>
                    <Info1>
                        <Name className="Cruze">Crusader
                        <Link to='/char'><Button1>?</Button1></Link>
                        </Name>
                        <Stats>
                            <StatsF onClick={()=> setValue1(D20(newLista[0].For))}>For <br/> +{newLista[0].For}</StatsF>
                            <StatsF onClick={() => setValue1(D20(newLista[0].Dex))}>Dex <br/> +{newLista[0].Dex}</StatsF>
                            <StatsF onClick={() => setValue1(D20(newLista[0].Wis))}>Wis <br/> {newLista[0].Wis}</StatsF>
                            <StatsF onClick={() => setValue1(D20(newLista[0].Con))}>Con <br/> +{newLista[0].Con}</StatsF>
                        </Stats>
                    </Info1>
                </Char1>
                <Char2>
                    <Info1>
                        <Name className="Leper">Leper
                        <Link to='/char1'><Button2>?</Button2></Link>
                        </Name>
                        <Stats>
                            <StatsF onClick={()=> setValue2(D20(newLista[1].For))}>For <br/> +{newLista[1].For}</StatsF>
                            <StatsF onClick={()=> setValue2(D20(newLista[1].Dex))}>Dex <br/> {newLista[1].Dex}</StatsF>
                            <StatsF onClick={()=> setValue2(D20(newLista[1].Wis))}>Wis <br/> {newLista[1].Wis}</StatsF>
                            <StatsF onClick={()=> setValue2(D20(newLista[1].Con))}>Con <br/> +{newLista[1].Con}</StatsF>
                        </Stats>
                    </Info1>
                </Char2>
                <Char3>
                    <Info1>
                        <Name className="Doc">Plague Doctor
                        <Link to='/char2'><Button3 >?</Button3></Link>
                        </Name>
                        <Stats>
                            <StatsF onClick={()=> setValue3(D20(newLista[2].For))}>For <br/> {newLista[2].For}</StatsF>
                            <StatsF onClick={()=> setValue3(D20(newLista[2].Dex))}>Dex <br/> +{newLista[2].Dex}</StatsF>
                            <StatsF onClick={()=> setValue3(D20(newLista[2].Wis))}>Wis <br/> +{newLista[2].Wis}</StatsF>
                            <StatsF onClick={()=> setValue3(D20(newLista[2].Con))}>Con <br/> {newLista[2].Con}</StatsF>
                        </Stats>
                    </Info1> 
                </Char3>
                <Char4>
                    <Info1>
                        <Name className="Ves">Vestal 
                        <Link to='/char3'><Button4 >?</Button4></Link>
                        </Name>
                        <Stats>
                            <StatsF onClick={()=> setValue4(D20(newLista[3].For))}>For <br/> +{newLista[3].For}</StatsF>
                            <StatsF onClick={()=> setValue4(D20(newLista[3].Dex))}>Dex <br/> +{newLista[3].Dex}</StatsF>
                            <StatsF onClick={()=> setValue4(D20(newLista[3].Wis))}>Wis <br/> +{newLista[3].Wis}</StatsF>
                            <StatsF onClick={()=> setValue4(D20(newLista[3].Con))}>Con <br/> +{newLista[3].Con}</StatsF>
                        </Stats>
                    </Info1>
                </Char4>
                <Char5>
                    <Info1>
                        <Name className="Jes">Jester 
                        <Link to='/char4'><Button5>?</Button5></Link>
                        </Name>
                        <Stats>
                            <StatsF onClick={()=> setValue5(D20(newLista[4].For))}>For <br/> {newLista[4].For}</StatsF>
                            <StatsF onClick={()=> setValue5(D20(newLista[4].Dex))}>Dex <br/> +{newLista[4].Dex}</StatsF>
                            <StatsF onClick={()=> setValue5(D20(newLista[4].Wis))}>Wis <br/> +{newLista[4].Wis}</StatsF>
                            <StatsF onClick={()=> setValue5(D20(newLista[4].Con))}>Con <br/> {newLista[4].Con}</StatsF>
                        </Stats>
                    </Info1>
                </Char5>
                <Char6>
                    <Info1>
                        <Name className="Ban">Bandit 
                        <Link to='/char5'><Button6 >?</Button6></Link>
                        </Name>
                        <Stats>
                            <StatsF onClick={()=> setValue6(D20(newLista[5].For))}>For <br/> +{newLista[5].For}</StatsF>
                            <StatsF onClick={()=> setValue6(D20(newLista[5].Dex))}>Dex <br/> +{newLista[5].Dex}</StatsF>
                            <StatsF onClick={()=> setValue6(D20(newLista[5].Wis))}>Wis <br/> {newLista[5].Wis}</StatsF>
                            <StatsF onClick={()=> setValue6(D20(newLista[5].Con))}>Con <br/> +{newLista[5].Con}</StatsF>
                        </Stats>
                    </Info1>
                </Char6>
            </Div>
            <Div1>
                <Data 
                    v1={value1}
                    v2={value2}
                    v3={value3}
                    v4={value4}
                    v5={value5}
                    v6={value6}
                    />
            </Div1>
            <Div2>
                <Rolar/>
            </Div2>
        </Fragment>
    );
}