import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Flex } from '@chakra-ui/react'
import { Home } from '../screens/Home'
import { Hackathons } from "../screens/Hackathons";
import { Profile } from "../screens/Profile";
import { Friends } from "../screens/Friends";
import { Login } from "../screens/Login";
import { Users } from "../screens/Users";
import { UserProfile } from "../screens/UserProfile";
import { MyHackathons } from "../screens/MyHackathons";
import { Layout } from "./Layout";

export const Router = () => {
    return (
        <BrowserRouter>
            <Flex
                flexDirection="column"
                h="100vh"
            >
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Layout>
                        <Switch>
                            <Route exact path="/profile" component={Profile}/>
                            <Route path="/hackathons" component={Hackathons}/>
                            <Route path="/profile/hackathons" component={MyHackathons}/>
                            <Route path="/friends" component={Friends}/>
                            <Route exact path="/users" component={Users}/>
                            <Route path="/users/:id" component={UserProfile}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Layout>
                </Switch> 
            </Flex>
        </BrowserRouter>
    );
}