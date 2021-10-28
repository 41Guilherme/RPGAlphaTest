
export function D20(props){
    const valor = Math.floor(Math.random() * 20 + 1) + props
    return valor
}

export function D12(props){
    const valor = Math.floor(Math.random() * 12 + 1) + props
    return valor
}

export function D10(props){
    const valor = Math.floor(Math.random() * 10 + 1) + props
    return valor
}

export function D8(props){
    const valor = Math.floor(Math.random() * 8 + 1) + props
    return valor
}

export function D6(props){
    const valor = Math.floor(Math.random() * 6 + 1) + props
    return valor
}

export function D4(props){
    const valor = Math.floor(Math.random() * 4 + 1) + props
    return valor
}

export const Lista =  [{
    For: 3,
    Dex: 1,
    Wis:-2,
    Con: 1
},
{
    For: 3,
    Dex:-1,
    Wis:-2,
    Con: 3
},
{
    For:-1,
    Dex:+2,
    Wis:+3,
    Con:-1
},
{
    For: 1,
    Dex: 1,
    Wis: 1,
    Con: 0
},
{
    For:-2,
    Dex: 4,
    Wis: 2,
    Con:-1
},
{
    For: 1,
    Dex: 3,
    Wis:-1,
    Con: 0
}

]