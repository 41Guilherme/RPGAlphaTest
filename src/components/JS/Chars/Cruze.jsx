import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../../styles/styled'
import { Link , useHistory } from "react-router-dom";
import c1 from '../../images/C1.png';
import { useStates } from "../provider";
import { useSkills } from "../skillprovider";
import Select from "react-select";

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
    background-color: #708090;
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
        background-color: #708090;
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
        color: #708090;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
    button:hover{
        transform: scale(1.1);
        transition: all 0.5s;
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
        color: #708090;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
    button:hover{
        transform: scale(1.1);
        transition: all 0.5s;
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
        color: #708090;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
    button:hover{
        transform: scale(1.1);
        transition: all 0.5s;
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
        color: #708090;
    }
    button{
        margin-top: 2px;
        width: 35px;
        border-radius: 5px;
    }
    button:hover{
        transform: scale(1.1);
        transition: all 0.5s;
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
    color: #708090;
    h1{
        background-color: #000;
        border: solid 2px #000;
        height: 40px;
        width: 340px;
        position: absolute;
        justify-content: center;
        margin-bottom: 0;
        text-align: center;
        button{
            position: absolute;
            margin-left: 112px;
            background: #708090;
           
            
        }
        .b2{
            position: absolute;
            margin-left: 78px;
            background: #708090;
        }
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
    article{
        margin-top: 5.5rem;
        
    }
    select{
        width: 20rem;
        height: 2.4rem;
        margin-bottom: 35px;
        color: #910c0c;
        
    }
   
`


export default function Cruze(){

    const { forca1,dex1,wis1,con1,setForca1, setDex1, setWis1, setCon1} = useStates()
    const  [Inv, setInv] = useState(true)
    const  [Ski, setSki] = useState(true)

    const {C1, C2, C3, C4, C5, C6, C7, C8 ,setC5, setC1, setC2, setC3, setC4, setC6, setC7, setC8} = useSkills()
    
    function handleChange1(e){
        let valor = e.target.value
        if (valor == 1){
            setC1(["FÉ DE BATALHA", "Crita com 18 e 19 e ao realizar Ataques Criticos se Cura"])
        }else if (valor == 2){
            setC1(["VETERANO DE GUERRA", "Encontra um ponto critico de um inimigo"])
        }else{
            setC1(["CONTRA-GOLPEADOR", "Ao ser atacado ganha um turno de ataque"])
        }
    }
    function handleChange2(e){
        let valor = e.target.value
        if (valor == 1){
            setC2(["CORTE SEQUENCIAL","Ao matar inimigos ganha um novo turno"])
        }else if (valor == 2){
            setC2(["MULTILADOR", "Ataques críticos arracam pedaços de inimigos"])
        }else{
            setC2(["ARREMESSO PESADO", "Pode arremssar armas pesados usando Força"])
        }
    }
    function handleChange3(e){
        let valor = e.target.value
        if (valor == 1){
            setC3(["MÃOS PESADAS", "Seus ataques atordoam alvos com pouca vida"])
        }else if (valor == 2){
            setC3(["ESQUIVA PESADA", "Pode usar como bônus de esquiva o stat força"])
        }else{
            setC3(["ESCUDEIRO NATO", "Usar escudo aumenta o dano"])
        }
    }
    function handleChange4(e){
        let valor = e.target.value
        if (valor == 1){
            setC4(['"FAZ O URRO"',"Um grito que buffa aliados e nerfa inimigos"])
        }else if (valor == 2){
            setC4(["MISERICORDIOSO", "Inimigos com pouca vida pode ser executados"])
        }else{
            setC4(["ULTIMO HOMEM", "Ao tomar um dano fatal, ganha 20 de vida e um crítico"])
        }
    }
    function handleChange5(e){
        let valor = e.target.value
        if (valor == 1){
            setC5(["ESPADA DE AÇO", "D8 + 4 de Dano"])
        }else if (valor == 2){
            setC5(["MACHADO DE BATALHA", "D10 + 2 de Dano"])
        }else{
            setC5(["CIMITARRA DE BRONZE", "D6 + D6 + 1 de Dano"])
        }
    }
    function handleChange6(e){
        let valor = e.target.value
        if (valor == 1){
            setC6(["LANÇA DE BATALHA", "D12 + 2 de Dano"])
        }else if (valor == 2){
            setC6(["ESTANDARTE DE GUERRA", "Dobra o seu dano no terreno Inserido"])
        }else{
            setC6(["CHICOTE METÁLICO", "D8 + D6 de Dano"])
        }
    }
    function handleChange7(e){
        let valor = e.target.value
        if (valor == 1){
            setC7(["ARMADURA DE PLACAS", "D8 + D4 de Armor"])
        }else if (valor == 2){
            setC7(["COURAÇA DE METAL", "D8 + 2 de Armor"])
        }else{
            setC7(["TÚNICA DO CRUZADO", "D12 + 2 de Armor"])
        }
    }
    function handleChange8(e){
        let valor = e.target.value
        if (valor == 1){
            setC8(["CAPACETE DE CRUZADO", "Imune a Decaptação"])
        }else if (valor == 2){
            setC8(["ELMO DE CHIFRES", "Bônus de Intimidação ao atacar"])
        }else{
            setC8(["INSIGNIA SANCTA", "+2 de Sabedoria Bônus"])
        }
    }
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
               <FotoArea/>
                <Stats>
                    <Força><span>Força <hr/> {forca1} <br/><button onClick={() => setForca1(forca1 + 1)}>+</button> <span>&nbsp; &nbsp;</span> <button onClick={() => setForca1(forca1 - 1)} >-</button></span></Força>
                    <Dex><span>Destreza <hr/> {dex1}<br/><button onClick={() => setDex1(dex1 + 1)}>+</button> <span>&nbsp; &nbsp;</span> <button onClick={() => setDex1(dex1 - 1)}>-</button></span></Dex>
                    <Wis><span>Sabedoria <hr/> {wis1} <br/><button onClick={() => setWis1(wis1 + 1)}>+</button> <span>&nbsp; &nbsp;</span>  <button onClick={() => setWis1(wis1 - 1)}>-</button></span></Wis>
                    <Con><span>Constituição <hr/> {con1} <br/> <button onClick={() => setCon1(con1 + 1)}>+</button> <span>&nbsp; &nbsp;</span> <button onClick={() => setCon1(con1 - 1)}>-</button></span></Con>
                </Stats>

                <Skills>
                    <Part1>
                        <h1>Skills  <button onClick={()=> setSki(!Ski)} >?</button></h1>
                        {Ski == true ? <Fragment>
                            <header></header>
                            <div>
                                {C1[0]}
                                <p>{C1[1]}</p>
                            </div>
                            <div>
                                {C2[0]}
                                <p>{C2[1]}</p>
                            </div>
                            <div>
                                {C3[0]}
                                <p>{C3[1]}</p>
                            </div>
                            <div>
                                {C4[0]}
                                <p>{C4[1]}</p>
                            </div>
                        </Fragment> 
                        : 
                        <Fragment>
                            <article>
                                <select onChange={(e) => handleChange1(e)}>
                                    <option>Escolha sua Skill Primária</option>
                                    <option value={'1'}> FÉ DE BATALHA</option>
                                    <option value={'2'}> VETERANO DE GUERRA</option>
                                    <option value={'3'}> CONTRA-GOLPEADOR</option>
                                </select>
                        
                                <select onChange={(e) => handleChange2(e)}>
                                    <option>Escolha sua Skill Secundária</option>
                                    <option value={'1'}> CORTE SEQUENCIAL</option>
                                    <option value={'2'}> MULTILADOR</option>
                                    <option value={'3'}> ARREMESSO DE ARMA PESADA</option>
                                </select>
                            
                                <select onChange={(e) => handleChange3(e)}>
                                    <option>Escolha sua Skill Bônus</option>
                                    <option value={'1'}> MÃOS PESADAS</option>
                                    <option value={'2'}> ESQUIVA PESADA</option>
                                    <option value={'3'}> ESCUDEIRO NATO</option>
                                </select>
                            
                                <select onChange={(e) => handleChange4(e)}>
                                    <option>Escolha sua Ultimate</option>
                                    <option value={'1'}> 'FAZ O URRO'</option>
                                    <option value={'2'}> MISERICORDIOSO</option>
                                    <option value={'3'}> O ULTIMO HOMEM</option>
                                </select>
                            </article>
                        </Fragment>}
                        
                    </Part1>
                    <Part1>
                        <h1>Inventário <button className="b2" onClick={() => setInv(!Inv)}>?</button></h1>
                        {Inv == true ? 
                        <Fragment>
                            <header></header>
                            <div>
                                {C5[0]}
                                <p>{C5[1]}</p>
                            </div>
                            <div>
                                {C6[0]}
                                <p>{C6[1]}</p>
                            </div>
                            <div>
                                {C7[0]}
                                <p>{C7[1]}</p>
                            </div>
                            <div>
                                {C8[0]}
                                <p>{C8[1]}</p>
                            </div> 
                        </Fragment>: 
                        
                        <Fragment>
                            <article>
                                <select onChange={(e) => handleChange5(e)}>
                                    <option>Escolha seu Item Primário</option>
                                    <option value={'1'}> ESPADA DE AÇO</option>
                                    <option value={'2'}> MACHADO DE BATALHA</option>
                                    <option value={'3'}> CIMITARRA DE BRONZE</option>
                                </select>
                        
                                <select onChange={(e) => handleChange6(e)}>
                                    <option>Escolha seu Item Secundário</option>
                                    <option value={'1'}> LANÇA DE BATALHA</option>
                                    <option value={'2'}> ESTANDARTE DE GUERRA</option>
                                    <option value={'3'}> CHICOTE METÁLICO</option>
                                </select>
                            
                                <select onChange={(e) => handleChange7(e)}>
                                    <option>Escolha seu Item Defensivo</option>
                                    <option value={'1'}> ARMADURA DE PLACAS</option>
                                    <option value={'2'}> COURAÇA DE METAL</option>
                                    <option value={'3'}> TUNICA DO CRUZADO</option>
                                </select>
                            
                                <select onChange={(e) => handleChange8(e)}>
                                    <option>Escolha seu Item Bônus</option>
                                    <option value={'1'}> CAPACETE DE CRUZADO</option>
                                    <option value={'2'}> ELMO DE CHIFRES</option>
                                    <option value={'3'}> INSIGNIA SANCTA</option>
                                </select>
                            </article>

                        </Fragment>}
                        
                    </Part1>
                </Skills>
               
               
            </Div>

        </Fragment>
    )
}