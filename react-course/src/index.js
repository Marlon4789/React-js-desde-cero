import React from 'react'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

// Primer componente
function Greeting(){
    return <div>
        <h1>Este es componente</h1>
        <p>Lorem 165261526</p>
    </div>
}

// JSX
function Married(){
    const married = true
    return <h1>{married ? "Estoy casado" : "No lo estoy jeje"}</h1>
}

// Objects
function User(){
    const info = {
        name: 'May',
        lastName: 'Sora',
    };

    return (
        <>
        <h1>{info.name}</h1>
        <h1>{info.lastName}</h1>
        </>
    )
}

// Operaciones
function Math(){
    function add(x, y){
        return x + y;
    }

    return(
        <>
        <h1>la suma es: {add(10, 15)}</h1>
        </>
    )
}



root.render(
    <div>
        <Greeting />
        <Married />
        <User />
        <Math />
    </div>
)