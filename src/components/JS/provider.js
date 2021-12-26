import React, { createContext, useContext, useState } from "react";
import { Lista } from "./Dados";

const StatesContext = createContext()

export const StatesProvider = ({children}) => {
    
    const List = Lista

    const [forca1, setForca1] = useState(List[0].For)
    const [forca2, setForca2] = useState(List[1].For)
    const [forca3, setForca3] = useState(List[2].For)
    const [forca4, setForca4] = useState(List[3].For)
    const [forca5, setForca5] = useState(List[4].For)
    const [forca6, setForca6] = useState(List[5].For)

    const [dex1, setDex1] = useState(List[0].Dex)
    const [dex2, setDex2] = useState(List[1].Dex)
    const [dex3, setDex3] = useState(List[2].Dex)
    const [dex4, setDex4] = useState(List[3].Dex)
    const [dex5, setDex5] = useState(List[4].Dex)
    const [dex6, setDex6] = useState(List[5].Dex)

    const [wis1, setWis1] = useState(List[0].Wis)
    const [wis2, setWis2] = useState(List[1].Wis)
    const [wis3, setWis3] = useState(List[2].Wis)
    const [wis4, setWis4] = useState(List[3].Wis)
    const [wis5, setWis5] = useState(List[4].Wis)
    const [wis6, setWis6] = useState(List[5].Wis)

    const [con1, setCon1] = useState(List[0].Con)
    const [con2, setCon2] = useState(List[1].Con)
    const [con3, setCon3] = useState(List[2].Con)
    const [con4, setCon4] = useState(List[3].Con)
    const [con5, setCon5] = useState(List[4].Con)
    const [con6, setCon6] = useState(List[5].Con)

    const [value1, setValue1] = useState(110)
    const [value2, setValue2] = useState(130)
    const [value3, setValue3] = useState(90)
    const [value4, setValue4] = useState(100)
    const [value5, setValue5] = useState(90)
    const [value6, setValue6] = useState(100)

    const [insan1 , setInsan1] = useState(0)

    return(
        <StatesContext.Provider value={{
            forca1,forca2,forca3,forca4,forca5,forca6,
            setForca1,setForca2,setForca3,setForca4,setForca5,setForca6,

            dex1,dex2,dex3,dex4,dex5,dex6,
            setDex1,setDex2,setDex3,setDex4,setDex5,setDex6,

            wis1,wis2,wis3,wis4,wis5,wis6,
            setWis1,setWis2,setWis3,setWis4,setWis5,setWis6,
            
            con1,con2,con3,con4,con5,con6,
            setCon1,setCon2,setCon3,setCon4,setCon5,setCon6,

            value1, value2, value3, value4, value5, value6,
            setValue1, setValue2, setValue3, setValue4, setValue5, setValue6
        }}
        >
            {children}
        </StatesContext.Provider>
    )
} 

export const useStates = () => useContext(StatesContext)