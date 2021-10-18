import { useState } from "react";
import { getUser, setUser } from "../redux/helpers/authHelpers";
import { request } from "../utils/axiosUtilities"
import defaultAvatar from "../assets/defaultAvatar.png"

export const useProfileForm = () => {

    const user = getUser()

    const[name,setName] = useState(user.name)
    const[bio,setBio] = useState(user.bio)
    const[skills,setSkills] = useState(user.skills)
    const[image,setImage] = useState(user.image? user.image.url : defaultAvatar)
    const[phone,setPhone] = useState(user.phone)
    const[github,setGithub] = useState(user.githubUserName)

    const getUpdateObject = () => {
        let data = {}
        if(name !== user.name){
            data.name = name
        }
        if(bio !== user.bio){
            data.bio = bio
        }
        if(phone !== user.phone){
            data.phone = phone
        }
        if(github !== user.github){
            data.githubUserName = github
        }
        if(image !== defaultAvatar && image !== user.image){
            data.image = image
        }
        data.skills = skills
        return data
    }

    const update = async () => {
        try{
            let {data} = await request(
                `/users/${user._id}`,
                'patch',
                getUpdateObject()
            )
            setUser(data.data)
            return {
                err : false,
                message : "Profile Updated Successfully."
            }
        }catch(error){
            console.log(error.response.data.message)
            return {
                err: true,
                message : error.response.data.message
            }
        }
    }

    return {
        name : {
            label : "Name",
            value : name,
            onChange : (event) => setName(event.target.value)
        },
        email: {
            label : "Registered Email",
            value : user.email
        },
        image : {
            value : image,
            onChange : (value) => setImage(value)
        },
        phone : {
            label : "Contact Number",
            value : phone,
            onChange : (event) => setPhone(event.target.value)
        },
        bio : {
            label : "Bio",
            value : bio,
            onChange : (event) => setBio(event.target.value)
        },
        github: {
            label: "Github Username",
            value : github,
            onChange : (event) => setGithub(event.target.value)
        },
        skills:{
            label: "Skills",
            value : skills,
            add : (value) => {
                console.log(value)
                if(!skills.includes(value)){
                    setSkills(prev => [...prev,value])
                }
            },
            remove : (value) => {
                if(skills.includes(value)){
                    setSkills(prev => [...prev.filter(e => e !== value)])
                }
            }
        },
        update
    }
}