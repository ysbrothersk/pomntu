import React from 'react'
import { Button } from '@material-ui/core'

enum BtnState {
    Standby,
    Active,
    Stop,
    Rest
}

interface Props {
    style?: object
}

interface State {
    msTime: number,
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
        fontSize: '24px'
    },
}

const msRestTime: number = 300000
const msActiveTime: number = 1500000

export default class PomodorTimer extends React.Component<Props, State> {

    private intervalId: NodeJS.Timeout | null = null

    constructor(props: Props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            msTime: msActiveTime,
            btnState: BtnState.Standby
        })
    }

    componentDidMount() {
        if (Notification.permission === 'default') {
            Notification.requestPermission(function (result) {
                if (result === 'granted') {
                    new Notification('通知を受け取れるようになりました！\nよきpomntuライフを！')
                }
            })
        }
    }

    private startTimer(ms: number, onFinished: () => void) {
        this.setState({
            msTime: ms
        })
        this.intervalId = setInterval(() => {
            if (this.state.msTime == 0) {
                this.stopTimer()
                onFinished()
                return
            }
            this.setState({
                msTime: this.state.msTime - 1000
            })
        }, 1000)
    }

    private stopTimer() {
        if (this.intervalId != null) {
            clearInterval(this.intervalId)
        }
    }

    private updateToStandby() {
        this.stopTimer()
        this.setState({
            btnState: BtnState.Standby
        })
    }

    private updateToActive() {
        this.setState({
            btnState: BtnState.Active
        })
        this.startTimer(msActiveTime, () => {
            new Notification('Activeタイムが終了しました！\n休憩をとってください。')
            this.updateToRest()
        })
    }

    private continueActive() {
        this.setState({
            btnState: BtnState.Active
        })
        this.startTimer(this.state.msTime, () => {
            this.updateToRest()
        })
    }

    private updateToStop() {
        this.stopTimer()
        this.setState({
            btnState: BtnState.Stop
        })
    }

    private updateToRest() {
        this.setState({
            btnState: BtnState.Rest
        })
        this.startTimer(msRestTime, () => {
            new Notification('休憩時間が終了しました。\nActiveを再開してください。')
            this.updateToStandby()
        })
    }

    private formatTime(ms: number): string {
        const tmp = Math.floor(ms / 1000)
        const ss = String(tmp % 60).padStart(2, '0')
        const mm = String(Math.floor(tmp / 60) % 60).padStart(2, '0')
        return mm + ':' + ss;
    }

    private button(): JSX.Element {
        switch (this.state.btnState) {
            case BtnState.Standby: return (
                <Button variant="contained" style={constStyles.button} onClick={this.updateToActive.bind(this)}>
                    Start
                </Button>
            )
            case BtnState.Active: return (
                <Button color='primary' variant="contained" style={constStyles.button} onClick={this.updateToStop.bind(this)}>
                    {this.formatTime(this.state.msTime)}
                </Button>
            )
            case BtnState.Stop: return (
                <Button variant="contained" style={constStyles.button} onClick={this.continueActive.bind(this)}>
                    {this.formatTime(this.state.msTime)}
                </Button>
            )
            case BtnState.Rest: return (
                <Button color='secondary' variant="contained" style={constStyles.button} onClick={this.updateToStandby.bind(this)}>
                    {this.formatTime(this.state.msTime)}
                </Button>
            )
            default: return <Button></Button>
        }
    }

    render(): JSX.Element {
        const areaStyle = Object.assign({},
            constStyles.area,
            this.props.style
        )

        return (
            <div style={areaStyle}>
                {this.button()}
            </div>
        )
    }
}
