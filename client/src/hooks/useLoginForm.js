import { useState } from "react"

export const useLoginForm = () => {

    const[name,setName] = useState("Vraj Parikh")
    const[email,setEmail] = useState("sugarbae051@gmail.com")
    const[password,setPassword] = useState("hello123")
    const[conpass,setConPass] = useState("hello123")
    const[errors,setErrors] = useState([])

    const addError = (...errs) => {
        setErrors(prev => [...prev,...errs])
    }

    const validate = (mode) => {
        let errorCount = 0
        setErrors([])
        if(email.length === 0){
            addError("Email is required.")
            errorCount++
        }else if(!email.match(/.+@.+\..+/)){
            addError("Email is invalid.")
            setEmail("")
            errorCount++
        }
        if(password.length === 0){
            addError("Password is required.")
            errorCount++
        }
        if(!mode){
            if(name.length === 0){
                addError("Name is required.")
                errorCount++
            } else if(!name.match(/^[a-zA-Z ]+$/)){
                addError("Name is invalid.")
                setName("")
                errorCount++
            }
            if(conpass !== password){
                addError("Entered Passwords do not match.")
                setConPass("")
                errorCount++
            }
        }
        return errorCount === 0? true : false
    }

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
        },
        errors : {
            value : errors,
            add : addError,
            clear : () => {
                setErrors([])
            }
        },
        validate
    }

}