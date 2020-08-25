import React from 'react';
import Timer from "./Timer";

import './Column.scss'

class Column extends React.Component {
    render() {
        return (


            <div className={"column"}>
                <hr/>
                <div className={"flex"}>
                    <div className={"DJ"}>NOW DJ</div>
                    <div className={"name"}>{this.props.name}</div>

                    <Timer/>
                </div>


            </div>
        )
    }
}

export default Column;
