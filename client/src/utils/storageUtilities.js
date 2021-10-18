export const loadState = (key) => {
    try{
        const state = localStorage.getItem(key)
        if(state){
            return JSON.parse(state)
        }
        return undefined
    }catch{
        return undefined
    }
}

export const saveState = (key,state) => {
    try{
        let data = JSON.stringify(state)
        localStorage.setItem(key, data);
    }catch{
        console.log("An Error Occurred.")
    }
}