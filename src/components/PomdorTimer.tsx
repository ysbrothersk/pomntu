import React from 'react'
import { Button, Typography } from '@material-ui/core'

enum BtnState {
    Standby,
    Active,
    Stop,
    Rest
}

interface State {
    time: string,
    btnState: BtnState,
}

const constStyles = {
    area: {
        height: '170px',
        width: '170px',
    },
    button: {
        height: '170px',
        width: '170px',
        borderRadius: '50%',
        fontSize: '30px'
    },
}

export default class PomodorTimer extends React.Component<{}, State> {

    public state: State = {
        time: '00:00:00',
        btnState: BtnState.Standby
    }

    private button(): JSX.Element {
        switch (this.state.btnState) {
            case BtnState.Standby: return (
                <Button variant="contained" style={constStyles.button}>
                    Start
                </Button>
            )
            case BtnState.Active: return (
                <Button color='primary' variant="contained" style={constStyles.button}>
                    {this.state.time}
                </Button>
            )
            case BtnState.Stop: return (
                <Button color='primary' variant="contained" style={constStyles.button}>
                    {this.state.time}
                </Button>
            )
            case BtnState.Rest: return (
                <Button color='secondary' variant="contained" style={constStyles.button}>
                    {this.state.time}
                </Button>
            )
            default: return <Button></Button>
        }
    }

    render(): JSX.Element {
        return (
            <div className='pomodor-time' style={constStyles.area}>
                {this.button()}
            </div>
        )
    }
}