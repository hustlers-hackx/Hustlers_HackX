import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Flex } from '@chakra-ui/react'
import { Home } from '../screens/Home'
import { Hackathons } from "../screens/Hackathons";
import { Profile } from "../screens/Profile";
import { Friends } from "../screens/Friends";
import { Layout } from "./Layout";
import { Login } from "../screens/Login";

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
                            <Route path="/profile" component={Profile}/>
                            <Route path="/hackathons" component={Hackathons}/>
                            <Route path="/friends" component={Friends}/>
                        </Switch>
                    </Layout>
                </Switch> 
            </Flex>
        </BrowserRouter>
    );
}