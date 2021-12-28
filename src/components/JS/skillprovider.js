import React, { createContext, useContext, useState } from "react";

const StatesContext = createContext()

export const StatesProvider2 = ({children}) => {


    const [C1, setC1] = useState(["FÉ DE BATALHA", "Crita com 18 e 19 e ao realizar Ataques Criticos se Cura"])
    const [C2, setC2] = useState(["CORTE SEQUENCIAL","Ao matar inimigos ganha um novo turno"])
    const [C3, setC3] = useState(["MÃOS PESADAS", "Seus ataques atordoam alvos com pouca vida"])
    const [C4, setC4] = useState(['"FAZ O URRO"',"Um grito que buffa aliados e nerfa inimigos"])
    const [C5, setC5] = useState(["ESPADA DE AÇO","D8 + 4 de Dano"])
    const [C6, setC6] = useState(["LANÇA DE BATALHA","D12 + 1 de Dano"])
    const [C7, setC7] = useState(["ARMADURA DE PLACAS","D8 + D4 de Armor"])
    const [C8, setC8] = useState(["CAPACETE DE CRUZADO","Imune a Decapitação"])


    const [L1, setL1] = useState('')
    const [L2, setL2] = useState('')
    const [L3, setL3] = useState('')
    const [L4, setL4] = useState('')
    const [L5, setL5] = useState('')
    const [L6, setL6] = useState('')
    const [L7, setL7] = useState('')
    const [L8, setL8] = useState('')

    const [D1, setD1] = useState('')
    const [D2, setD2] = useState('')
    const [D3, setD3] = useState('')
    const [D4, setD4] = useState('')
    const [D5, setD5] = useState('')
    const [D6, setD6] = useState('')
    const [D7, setD7] = useState('')
    const [D8, setD8] = useState('')

    const [V1, setV1] = useState('')
    const [V2, setV2] = useState('')
    const [V3, setV3] = useState('')
    const [V4, setV4] = useState('')
    const [V5, setV5] = useState('')
    const [V6, setV6] = useState('')
    const [V7, setV7] = useState('')
    const [V8, setV8] = useState('')

    const [J1, setJ1] = useState('')
    const [J2, setJ2] = useState('')
    const [J3, setJ3] = useState('')
    const [J4, setJ4] = useState('')
    const [J5, setJ5] = useState('')
    const [J6, setJ6] = useState('')
    const [J7, setJ7] = useState('')
    const [J8, setJ8] = useState('')

    const [B1, setB1] = useState('')
    const [B2, setB2] = useState('')
    const [B3, setB3] = useState('')
    const [B4, setB4] = useState('')
    const [B5, setB5] = useState('')
    const [B6, setB6] = useState('')
    const [B7, setB7] = useState('')
    const [B8, setB8] = useState('')

    return(
        <StatesContext.Provider value={{
        
            C1,C2,C3,C4,C5,C6,C7,C8,
            setC1, setC2, setC3, setC4, setC5, setC6, setC7, setC8,

            L1,L2,L3,L4,L5,L6,L7,L8,
            setL1, setL2, setL3, setL4, setL5, setL6, setL7, setL8,

            D1,D2,D3,D4,D5,D6,D7,D8,
            setD1, setD2, setD3, setD4, setD5, setD6, setD7, setD8,

            V1,V2,V3,V4,V5,V6,V7,V8,
            setV1, setV2, setV3, setV4, setV5, setV6,setV7, setV8,

            J1,J2,J3,J4,J5,J6,J7,J8,
            setJ1, setJ2, setJ3, setJ4, setJ5, setJ6,setJ7, setJ8,

            B1,B2,B3,B4,B5,B6,B7,B8,
            setB1, setB2, setB3, setB4, setB5, setB6,setB7, setB8,


        }}
        >
            {children}
        </StatesContext.Provider>
    )
} 

export const useSkills = () => useContext(StatesContext)
