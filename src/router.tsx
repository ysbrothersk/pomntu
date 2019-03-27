import React, { Component } from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import {App} from './App';
import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from './theme'
import Header from './components/Header';

export class AppRouter extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Header></Header>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Route exact path='/' component={App}></Route>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}