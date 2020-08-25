import React from 'react';
import Clock from "./Clock";

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Clock date={new Date()}/>
            </div>
        );
    }
}

export default Header;
