// import React from "react";

import { Children } from "react"

// const Card = () => {
//     return (
//         <div>
//             <h1>This is a Card Component</h1>
//         </div>
//     )
// }

// export default Card

// const Card = (props) => {
//     return (
//         <div>
//             <h1>{props.users.id}</h1>
//             <h1>{props.users.name}</h1>
//             <h1>{props.users.age}</h1>
//             <h1>{props.users.city}</h1>
//         </div>
//     )
// }

// export default Card

// const Card = ({users:{id, name, age = "Not given", city}}) => {
//     return (
//         <div>
//             <h1>{id}</h1>
//             <h1>{name}</h1>
//             <h1>{age}</h1>
//             <h1>{city}</h1>
//         </div>
//     )
// }

// export default Card

const Card = (props) => {
    console.log(props)
    return (
        <div>
            {props.children[1]}
        </div>
    )
}

export default Card