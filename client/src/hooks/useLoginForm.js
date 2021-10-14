import { useState } from "react"

export const useLoginForm = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[conpass,setConPass] = useState("")

    return{
        name : {
            label : "Name",
            value : name,
            onChange: (event) => setName(event.target.value)
        },
        password : {
            label : "Password",
            value : password,
            onChange: (event) => setPassword(event.target.value)
        },
        email : {
            label : "Email",
            value : email,
            onChange: (event) => setEmail(event.target.value)
        },
        conpass : {
            label : "Confirm Password",
            value : conpass,
            onChange: (event) => setConPass(event.target.value)
        }
    }

}