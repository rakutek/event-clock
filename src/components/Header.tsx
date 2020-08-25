import React from 'react';
import Clock from "./Clock";

import './Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Clock date={new Date()}/>
                <hr/>
            </div>
        );
    }
}

export default Header;
