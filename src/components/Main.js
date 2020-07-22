import React, { Component } from 'react'
import ProfilePage from './ProfilePage'
import Posts from './Posts'
import Gallery from './Gallery'
import ToDo from './ToDo'
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ProfilePage} />
                <Route path="/Posts" component={Posts} />
                <Route path="/Gallery" component={Gallery} />
                <Route path="/ToDo" component={ToDo} />
                <Route path="/LandingPage" component={LandingPage} />
            </Switch>
        )
    }
}
