import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PomodorTimer from './components/PomdorTimer';

export class App extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            pomntu
                    </Typography>
                    </Toolbar>
                </AppBar>
                <PomodorTimer></PomodorTimer>
            </div>
        )
    }
}