import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './Timer.scss'

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {


        // update every second
        this.interval = setInterval(() => {
            let date = this.calculateCountdown(this.props.start);

            if (date === false) {
                date = this.calculateCountdown(this.props.state);
            }

            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate).toLocaleString({timeZone: 'Asia/Tokyo'})) - Date.parse(new Date().toLocaleString({timeZone: 'Asia/Tokyo'}))) / 1000;


        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 3600) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;

        let state = 'AFTER';

        let date = this.calculateCountdown(this.props.start);

        if (date === false) {
            state = 'REMAIN'
        }




        return (
            <div className="Countdown">


        <span className="Countdown-col">
          <span className="Countdown-col-element">

            <span>{state}       </span><strong>{this.addLeadingZeros(countDown.hours)}:</strong>
          </span>
        </span>


                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}:</strong>
          </span>
        </span>

                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
          </span>
        </span>
            </div>
        );
    }
}

Timer.propTypes = {
    date: PropTypes.string.isRequired
};

Timer.defaultProps = {
    date: new Date().toLocaleString({timeZone: 'Asia/Tokyo'})
};

export default Timer;
