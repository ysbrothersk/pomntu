import React, { Component } from 'react'
import PomodorTimer from './components/PomdorTimer';

const styles = {
    pomodorTimer: {
        margin: 'auto'
    }
}

export class App extends Component {
    render() {
        return (
            <div>
                <PomodorTimer style={{margin: '100px auto'}}></PomodorTimer>
            </div>
        )
    }
}