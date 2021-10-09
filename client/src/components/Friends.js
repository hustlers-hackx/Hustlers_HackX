import React, { useState } from "react";
import { getUserFriends } from "../redux/helpers/authHelpers";
import { ChatSection } from "./ChatSection";
import {
    Button,
    Container,
    Divider,
    Grid,
    makeStyles,
    useTheme
} from "@material-ui/core";

export const Friends = () => {

    const [friends,setFriends] = useState(getUserFriends())
    const [currentChat,setCurrentChat] = useState(0)

    console.log(friends)

    const useStyles = makeStyles({
        friendList: {
            marginTop: '15rem',
            display: 'flex',
            flexDirection: 'column'
        },
        friends : {
            padding: '2rem',
            color : 'black'
        }
    })
    
    const classes = useStyles();

    return(
        <>
            {friends.length === 0 ? 
            <>
                <div> No Friends Found </div>
            </> :
            <>
                <div className="friendList">
                    {friends.map((friend,index) => <div className={classes.friends} onClick={() => setCurrentChat(index)}>{friend.name}</div>)}
                </div>
                <ChatSection sender={friends[currentChat]}/>
            </>
            }
        </>
    )

}