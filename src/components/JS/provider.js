import React, { createContext, useContext, useState } from "react";

const StatesContext = createContext()

export const StatesProvider = ({children}) => {
    
    const [forca1, setForca1] = useState()
    const [forca2, setForca2] = useState()
    const [forca3, setForca3] = useState()
    const [forca4, setForca4] = useState()
    const [forca5, setForca5] = useState()
    const [forca6, setForca6] = useState()

    const [dex1, setDex1] = useState()
    const [dex2, setDex2] = useState()
    const [dex3, setDex3] = useState()
    const [dex4, setDex4] = useState()
    const [dex5, setDex5] = useState()
    const [dex6, setDex6] = useState()

    const [wis1, setWis1] = useState()
    const [wis2, setWis2] = useState()
    const [wis3, setWis3] = useState()
    const [wis4, setWis4] = useState()
    const [wis5, setWis5] = useState()
    const [wis6, setWis6] = useState()

    const [con1, setCon1] = useState()
    const [con2, setCon2] = useState()
    const [con3, setCon3] = useState()
    const [con4, setCon4] = useState()
    const [con5, setCon5] = useState()
    const [con6, setCon6] = useState()

    return(
        <StatesContext.Provider value={{
            forca1,forca2,forca3,forca4,forca5,forca6,
            setForca1,setForca2,setForca3,setForca4,setForca5,setForca6,

            dex1,dex2,dex3,dex4,dex5,dex6,
            setDex1,setDex2,setDex3,setDex4,setDex5,setDex6,

            wis1,wis2,wis3,wis4,wis5,wis6,
            setWis1,setWis2,setWis3,setWis4,setWis5,setWis6,
            
            con1,con2,con3,con4,con5,con6,
            setCon1,setCon2,setCon3,setCon4,setCon5,setCon6
        }}
        >
            {children}
        </StatesContext.Provider>
    )
} 

export const useStates = () => useContext(StatesContext)