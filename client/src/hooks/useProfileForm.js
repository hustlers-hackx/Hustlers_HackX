import { useState } from "react";

export const useProfileForm = () => {

    let user =  {
        "name": "Vraj Parikh",
        "bio": "Web Developer",
        "email": "sugarbae051@gmail.com",
        "skills": [
            "React",
            "Node"
        ],
        image : {
            url : 'https://bit.ly/dan-abramov'
        },
        phone: '9999999999',
        githubUserName : 'vraj291'
    }

    const[name,setName] = useState(user.name)
    const[bio,setBio] = useState(user.bio)
    const[skills,setSkills] = useState(user.skills)
    const[image,setImage] = useState(user.image.url)
    const[phone,setPhone] = useState(user.phone)
    const[github,setGithub] = useState(user.githubUserName)

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
        }
    }
}