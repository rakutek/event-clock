import React  from 'react';

// import './Clock.css'

function FormattedDate(props) {
    return <h1> {props.date.toLocaleTimeString('it-IT')} </h1>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}


export default Clock;
