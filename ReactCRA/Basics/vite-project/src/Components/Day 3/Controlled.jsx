// const Controlled = (props) => {
//     return (
//         <div>
//             <h2>{props.load}</h2>
//         </div>
//     )
// }


// export default Controlled

import { useState } from "react"

const Controlled = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        Gender: "",
        skills: []
    })

    let handleChange = (e) => {
        console.log(e.target.name, e.target.value) 
        const{value, name, type, checked} = e.target

        console.log(checked)

        if(type === "checkbox"){
            if(checked){
                setFormData({...formData, skills:[...formData.skills,value]})
            }else{
                setFormData({...formData, skills:formData.skills.filter((skill) => skill !== value)})
            }
        }else{
            setFormData({...formData, [name]:value})
        }
    }

    const validation = {
        uppercase:/[A-Z]/.test(formData.password),
        lowercase:/[a-z]/.test(formData.password),
        number:/[0-9]/.test(formData.password),
        lengthOfPassword:formData.password.length > 8
    }

    let results = Object.values(validation).filter((o) => o === true)

    return (
        <div>
            <form action="">
                Username: <input type="text" name='username' onChange={handleChange} /><br /><br />
                Password: <input type="password" name='password' onChange={handleChange} /><br /><br />

                {results.length <= 1 && <p>Weak Password</p> }
                {results.length === 2 && <p>Medium Password</p> }
                {results.length === 3 && <p>Medium Password</p> }
                {results.length === 4 && <p>Strong Password</p> }

                <ul>
                    <li style={{color:validation.uppercase ? "green" : "red"}} >Password should contain atleast one UpperCase character</li>
                    <li style={{color:validation.lowercase ? "green" : "red"}} >Password should contain atleast one lowerCase character</li>
                    <li style={{color:validation.number ? "green" : "red"}} >Password should contain atleast one number</li>
                    <li style={{color:validation.lengthOfPassword ? "green" : "red"}} >Password length should be greater than or equal to 8</li>
                </ul>

                Gender: <input type="radio" name = 'Gender' value = {'male'} onChange={handleChange} />Male
                <input type="radio" name = 'Gender' value = {'Female'} onChange={handleChange} />Female <br /><br />
                Skills <input type="checkbox" name = 'skills' value = {'React'} onChange={handleChange} />React
                <input type="checkbox" name = 'skills' value = {'HTML'} onChange={handleChange} />HTML
                <input type="checkbox" name = 'skills' value = {'CSS'} onChange={handleChange} />CSS <br /><br />
                <input disabled={!validation.lengthOfPassword} type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Controlled