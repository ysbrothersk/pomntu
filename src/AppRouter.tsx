import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {App} from './App';

export class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={App}></Route>
                </div>
            </Router>
        )
    }
}