import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {Title, Button} from '../../styles/styled'
import { Link } from "react-router-dom";
import c1 from '../../images/C1.png';
import Lista from '../Dados';
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
    background-color: #686464;
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
    
`
const Força = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #C0C0C0;
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
        color: yellow;
    }
    button{
        margin-bottom: 0;
    }
`
const Dex = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #C0C0C0;
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
        color: yellow;
    }
`
const Wis = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #C0C0C0;
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
        color: yellow;
    }
`
const Con = styled.div`
    display:flex;
    justify-content: column;
    flex-wrap: wrap;
    text-align: center;
    background-color: #C0C0C0;
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
        color: yellow;
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
    justify-content: row;
    text-align: center;
    flex-wrap: wrap;
    h1{
        background-color: #7c0f0f;
        border: solid 2px #000;
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    div{
        background-color: white;
    }
`
const Part2 = styled.div`
    background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25b7ba9a-dc48-4015-923b-cb47a37af504/dawoesj-b8fe4a88-cfaf-4223-83d9-33019a12a273.jpg/v1/fill/w_1024,h_705,q_75,strp/grid_para_rpg_de_mesa_by_rarameth_dawoesj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA1IiwicGF0aCI6IlwvZlwvMjViN2JhOWEtZGM0OC00MDE1LTkyM2ItY2I0N2EzN2FmNTA0XC9kYXdvZXNqLWI4ZmU0YTg4LWNmYWYtNDIyMy04M2Q5LTMzMDE5YTEyYTI3My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.evP5wSLH6dEQpQtat60ENqWTW7QkvTwQBFMq-_vE6ng');
    padding: 10px;
    width: 47%;
    display: flex;
    justify-content: row;
    text-align: center;
    flex-wrap: wrap;
    h1{
        background-color: #7c0f0f;
        border: solid 2px #000;
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }
    form{
        position: absolute;
        margin-top: 5rem;
        display: flex;
        width: 340px;
    }
    button{
        height: 29px;
        background-color: #7c0f0f;
    }

    input{
        border-color: red;
        margin-top: 0;
        width: 100%;
        height: 25px;
    }
    ul{
        margin-top: 4rem;
        width: 100%;
        height: 80%;
        p{
            background-color: #fff;
            display: flex;
            justify-content: space-between;
        }
    }
`
const S1 = styled.div`
    background-color: #000;
`

export default function Cruze(){

    const [item, setItem] = useState('')
    const [todos, setTodos] = useState([]);



    function deletar(lista){
        lista.pop()

    }
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
               <FotoArea/>
                <Stats>
                    <Força><span>Força <hr/> +3 <br/><button>+</button><button>-</button></span></Força>
                    <Dex><span>Destreza <hr/> +1 <br/><button>+</button><button>-</button></span></Dex>
                    <Wis><span>Sabedoria <hr/> -2 <br/><button>+</button><button>-</button></span></Wis>
                    <Con><span>Constituição <hr/> +1 <br/> <button>+</button><button>-</button></span></Con>
                </Stats>

                <Skills>
                    <Part1>
                        <h1>Skills</h1>
                        <div>

                        </div>
                    </Part1>
                    <Part2>
                        <h1>Inventário</h1>
                        <form
                            onSubmit={event => {
                            event.preventDefault();
                            setTodos([...todos, item]);
                            if (!!item) {
                                setTodos([...todos, item]);
                                setItem("");
                              }
                            }}>

                            <input
                            type="text"
                            
                            onChange={event => setItem(event.target.value)}
                            />
                            <button type="submit">Add</button>
                        </form>
                        <ul>
                            {todos.map((todo, index) => (
                            <p key={index}>{todo} <button onClick={() => deletar(todos)}>X</button></p> 
                            ))}
                        </ul>
                    </Part2>
                </Skills>
               
               
            </Div>

        </Fragment>
    )
}