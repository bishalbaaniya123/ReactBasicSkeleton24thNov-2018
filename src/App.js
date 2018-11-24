import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import api from '../src/app/api/index';
import testComponent from './app/components/testComponent';

class App extends Component {
    constructor() {
        super();
        api.testApi();
    }

    render() {
        return (
            <Switch>
                <Redirect to="/login" exact path='/' component={testComponent}/>
                <Route path='/login' component={testComponent}/>
            </Switch>
            );
    }
}

export default App;
