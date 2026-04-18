// import React from "react";

// import { Component } from "react";

// import "./Components/Card.jsx"

// export default class App extends Component{
//     render(){
//         return <h1>Hello</h1>
//     }
// }

// let App = () => {
//     let name = "Suresh"

//     return (
//         <div>
//             <h1 style={{color:"red"}}>Hello {name}</h1>
//         </div>
//     )
// }

// export default App

// import React from "react";

// import { Component } from "react";

// import Card from "./Components/Card.jsx"

// let App = () =>{
//     return (
//         <>
//             <Card></Card>
//         </>
//     )
// }

// export default App

// import Users from "./Components/Day-1/Users.jsx"

// let App = () =>{
//     return (
//         <>
//             <Users/>
//         </>
//     )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//     const [state, setState] = useState(0)

//     let normal = 0

//     let handleNormal = () => {
//         normal = 10
//     }

//     let handleState = () => {
//         setState(5)
//     }

//     return (
//         <div>
//             <h1>This is state variable {state}</h1>
//             <h1>This is normal variable {normal}</h1>
//             <button onClick={handleNormal}>Normal</button>
//             <button onClick={handleState}>State</button>
//         </div>
//     )
// }


// export default App

// import { useState } from "react"

// const App = () => {
//     let [state, setState] = useState({
//         count:0
//     })

//     let handleIncrement = () => {
//         setState({
//             count:0
//         })
//     }

//     let handleDecrememt = () => {
//         setState(10)
//     }

//     console.log("Executed")

//     return (
//         <div>
//             <h1>Use increment or Decrement {state.count}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrememt}>Decrement</button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//     let [state, setState] = useState({
//         count:0
//     })

//     let handleIncrement = () => {
//         setState({
//             count: state.count + 1
//         })
//     }

//     let handleDecrememt = () => {
//         setState({
//             count: state.count - 1
//         })
//     }

//     console.log("Executed")

//     return (
//         <div>
//             <h1>Use increment or Decrement {state.count}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrememt}>Decrement</button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//     let [state, setState] = useState(0)

//     let handleIncrement = () => {
//         setState(prev => prev + 1)
//     }

//     let handleDecrememt = () => {
//         setState(prev => prev - 1)
//     }

//     console.log("Executed")

//     return (
//         <div>
//             <h1>Use increment or Decrement {state}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrememt}>Decrement</button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//     let [show, setShow] = useState("password")
//     let [state, setState] = useState(true)

//     let handleShow = () => {
//         if(state === true){
//             setShow("text")
//             setState(prev => !prev)
//         }else{
//             setShow("password")
//             setState(prev => !prev)
//         }
//     }

//     console.log("Executed")
//     return (
//         <div>
//             <input type={show} />
//             <button onClick={handleShow}>Show/Hide</button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//     let [show, setShow] = useState(true)

//     let handleShow = () => {
//         setShow(prev => !prev)
//     }

//     let handleHide = () => {
//         setShow(prev => !prev)
//     }

//     console.log("Executed")
//     return (
//         <div>
//             <input type={show ? "password" : "text" } />
//             <button onClick={show ? handleShow : handleHide}>{show ? "Show" : "Hide"}</button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//     let [show, setShow] = useState(true)

//     let handleShow = () => {
//         setShow(prev => !prev)
//     }

//     let handleHide = () => {
//         setShow(prev => !prev)
//     }

//     console.log("Executed")
//     return (
//         <div>
//             <input type={show ? "password" : "text" } />
//             <button onClick={show ? handleShow : handleHide}>
//                 {show ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i>}
//             </button>
//         </div>
//     )
// }

// export default App

// import { useState } from "react"
// import bulbOff from "./Assests/light-bulb-off.jpg"
// import bulbOn from "./Assests/light-bulb-on.avif"

// const App = () => {
//     let [isOn, setBulb] = useState(false)

//     let toggle = () => {
//         setBulb(prev => !prev)
//     }

//     console.log("Executed")
//     return (
//         <div>
//             <img src= {isOn ? bulbOn : bulbOff} alt="bulb" width="200" />
//             <button onClick={toggle}>{isOn ? "Turn off" : "Turn on"}</button>
//         </div>
//     )
// }

// export default App

import { useEffect, useState } from "react"

const App = () => {
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(0)

    let handleCount = () => {
        setCount(prev => prev + 1)
    }

    let handleCount1 =() => {
        setCount1(prev => prev + 1)
    }
    useEffect(() => {
        console.log("UseEffect got Executed")
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <h1>Count1: {count1}</h1>
            <button onClick={handleCount}>count</button>
            <button onClick={handleCount1}>count1</button>
        </div>
    )
}

export default App