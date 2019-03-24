import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {App} from './App';
import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from './theme'

export class AppRouter extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Router>
                    <div>
                        <Route exact path='/' component={App}></Route>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}